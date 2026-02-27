import { Link } from 'react-router-dom'
import { CalendarDays } from 'lucide-react'

export default function FloatingBookButton() {
    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    bottom: '1.5rem',
                    right: '1.5rem',
                    zIndex: 90,
                }}
                className="floating-book"
            >
                <Link
                    to="/booking"
                    className="btn btn-primary"
                    style={{
                        boxShadow: '0 8px 30px rgba(26, 22, 20, 0.3)',
                        gap: '0.5rem',
                    }}
                    id="floating-book-btn"
                >
                    <CalendarDays size={16} />
                    Book Now
                </Link>
            </div>

            {/* Only visible on mobile */}
            <style>{`
        .floating-book { display: none; }
        @media (max-width: 768px) {
          .floating-book { display: block; }
        }
      `}</style>
        </>
    )
}
