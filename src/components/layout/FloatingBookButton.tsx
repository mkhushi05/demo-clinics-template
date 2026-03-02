import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CalendarDays } from 'lucide-react'

export default function FloatingBookButton() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            // Show button after scrolling down 400px (roughly past hero section)
            setScrolled(window.scrollY > 400)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])
    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    bottom: '1.5rem',
                    left: '50%',
                    transform: `translateX(-50%) translateY(${scrolled ? '0' : '150%'})`,
                    opacity: scrolled ? 1 : 0,
                    zIndex: 90,
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
                    width: 'calc(100% - 3rem)',
                    maxWidth: '300px',
                    pointerEvents: scrolled ? 'auto' : 'none',
                }}
                className="floating-book"
            >
                <Link
                    to="/booking"
                    className="btn btn-primary"
                    style={{
                        boxShadow: '0 8px 30px rgba(26, 22, 20, 0.3)',
                        gap: '0.5rem',
                        width: '100%',
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
          .floating-book { display: flex; justify-content: center; }
        }
      `}</style>
        </>
    )
}
