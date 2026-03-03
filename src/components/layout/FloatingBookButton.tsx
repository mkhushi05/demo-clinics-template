import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CalendarDays } from 'lucide-react'

export default function FloatingBookButton() {
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY
            const viewportH = window.innerHeight
            const pageH = document.documentElement.scrollHeight

            // Show after scrolling past 80% of the viewport height
            const topThreshold = viewportH * 0.8
            // Hide when within 120px of the page bottom (footer zone)
            const nearBottom = scrollY + viewportH >= pageH - 120

            setScrolled(scrollY > topThreshold && !nearBottom)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        // Re-read immediately on route change — window.scrollTo() does NOT fire scroll event
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [location.pathname])
    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    bottom: '1.5rem',
                    left: 0,
                    right: 0,
                    transform: `translateY(${scrolled ? '0' : '150%'})`,
                    opacity: scrolled ? 1 : 0,
                    zIndex: 90,
                    pointerEvents: 'none',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
                }}
                className="floating-book"
            >
                <Link
                    to="/booking"
                    className="btn btn-primary"
                    style={{
                        pointerEvents: scrolled ? 'auto' : 'none',
                        boxShadow: '0 8px 30px rgba(26, 22, 20, 0.3)',
                        gap: '0.5rem',
                        width: 'calc(100% - 3rem)',
                        maxWidth: '300px',
                        justifyContent: 'center'
                    }}
                    id="floating-book-btn"
                >
                    <CalendarDays size={16} />
                    Book Free Consultation
                </Link>
            </div>

            {/* Only visible on mobile */}
            <style>{`
        .floating-book { display: none; }
        @media (max-width: 768px) {
          .floating-book { display: flex; justify-content: center; align-items: center; }
        }
      `}</style>
        </>
    )
}
