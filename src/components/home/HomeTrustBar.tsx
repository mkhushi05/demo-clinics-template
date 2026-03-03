import { ShieldCheck, Star, Stethoscope, BadgeCheck } from 'lucide-react'

const items = [
    { icon: Stethoscope, label: 'Medically Led Clinic' },
    { icon: BadgeCheck, label: 'Independent Nurse Prescriber' },
    { icon: Star, label: '5-Star Rated · 200+ Reviews' },
    { icon: ShieldCheck, label: 'Safe & Regulated' },
]

export default function HomeTrustBar() {
    return (
        <div
            style={{
                backgroundColor: '#1a1817', // Dark charcoal/brown matching SRGN
                padding: '1.25rem 0',
                borderBottom: '1px solid #111',
            }}
        >
            <div className="container">
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: '2.5rem',
                    }}
                    className="trust-strip-flex"
                >
                    {items.map(({ icon: Icon, label }, idx) => (
                        <div
                            key={idx}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.625rem',
                            }}
                        >
                            <Icon size={18} style={{ color: '#d3ae7a', flexShrink: 0 }} strokeWidth={1.5} />
                            <span
                                style={{
                                    color: '#e5e1dc',
                                    fontSize: '0.85rem',
                                    fontWeight: 400,
                                    letterSpacing: '0.03em',
                                    fontFamily: 'var(--font-body)',
                                }}
                            >
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .trust-strip-flex {
                        display: grid !important;
                        grid-template-columns: 1fr 1fr !important;
                        gap: 1.25rem 0.5rem !important;
                    }
                }
                @media (max-width: 480px) {
                    .trust-strip-flex span {
                        font-size: 0.75rem !important;
                    }
                }
            `}</style>
        </div>
    )
}
