import { useEffect, useRef, useState } from 'react'

const stats = [
    { number: '1,000+', label: 'Treatments Performed', suffix: '' },
    { number: '100+', label: 'Five-Star Reviews', suffix: '' },
    { number: '5+', label: 'Years Experience', suffix: '' },
    { number: '5★', label: 'Average Rating', suffix: '' },
]

function StatItem({ number, label, delay }: { number: string; label: string; delay: number }) {
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
            { threshold: 0.2 }
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
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
            }}
        >
            <div
                style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                    fontWeight: 300,
                    lineHeight: 1,
                    color: 'var(--color-charcoal)',
                    letterSpacing: '-0.02em',
                    marginBottom: '0.5rem',
                }}
            >
                {number}
            </div>
            <div
                style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--color-stone-muted)',
                }}
            >
                {label}
            </div>
        </div>
    )
}

export default function StatsBar({ dark = false }: { dark?: boolean }) {
    return (
        <div
            style={{
                backgroundColor: dark ? 'var(--color-charcoal)' : 'var(--color-white)',
                padding: '4rem 0',
                borderTop: dark ? 'none' : '1px solid rgba(26,22,20,0.06)',
                borderBottom: dark ? 'none' : '1px solid rgba(26,22,20,0.06)',
            }}
        >
            <div className="container">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '2.5rem 1.5rem',
                    }}
                    className="stats-grid"
                >
                    {stats.map((s, i) => (
                        <StatItem key={s.label} number={s.number} label={s.label} delay={i * 120} />
                    ))}
                </div>
            </div>
            <style>{`
                @media (min-width: 640px) {
                    .stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
                }
            `}</style>
        </div>
    )
}
