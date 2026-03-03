import { useEffect, useRef, useState } from 'react'

const stats = [
    { number: '1,000+', label: 'Treatments Performed' },
    { number: '100+', label: 'Five-Star Reviews' },
    { number: '5+', label: 'Years Experience' },
    { number: '5', label: 'Average Rating', hasStar: true },
]

function StatItem({ number, label, delay, hasStar }: { number: string; label: string; delay: number; hasStar?: boolean }) {
    const [visible, setVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            style={{
                textAlign: 'center',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(15px)',
                transition: `all 1.2s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
            }}
        >
            <div
                style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                    fontWeight: 300,
                    lineHeight: 1,
                    color: 'var(--color-espresso)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.15em',
                    marginBottom: '0.75rem',
                }}
            >
                {number}
                {hasStar && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--color-espresso)', marginBottom: '0.15em' }}>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                )}
            </div>
            <div
                style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.625rem',
                    fontWeight: 600,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--color-taupe)',
                }}
            >
                {label}
            </div>
        </div>
    )
}

export default function StatsBar() {
    return (
        <>
            <div style={{
                maxWidth: '960px',
                margin: '0 auto',
                position: 'relative',
                transform: 'translateY(-5rem)',
                zIndex: 10,
                padding: '0 1rem',
            }}>
                <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.45)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.6)',
                    borderRadius: '2rem',
                    padding: '3.5rem 2rem',
                    boxShadow: '0 30px 60px rgba(184, 147, 90, 0.08), 0 4px 15px rgba(0, 0, 0, 0.03)',
                }}>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '3rem 1.5rem',
                        }}
                        className="stats-grid"
                    >
                        {stats.map((s, i) => (
                            <StatItem key={s.label} {...s} delay={i * 150} />
                        ))}
                    </div>
                </div>
            </div>
            <style>{`
                @media (min-width: 900px) {
                    .stats-grid { 
                        grid-template-columns: repeat(4, 1fr) !important; 
                        gap: 2rem !important;
                    }
                }
            `}</style>
        </>
    )
}
