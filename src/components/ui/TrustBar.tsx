import { ShieldCheck, Star, Stethoscope, BadgeCheck } from 'lucide-react'

const items = [
    { icon: Stethoscope, label: 'Medically Led Clinic' },
    { icon: BadgeCheck, label: 'Independent Nurse Prescriber' },
    { icon: Star, label: '5-Star Rated · 200+ Reviews' },
    { icon: ShieldCheck, label: 'Safe & Regulated' },
]

export default function TrustBar() {
    return (
        <div
            style={{
                backgroundColor: 'var(--color-charcoal)',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                padding: '1.25rem 0',
            }}
        >
            <div
                className="container"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '0.25rem 3rem',
                }}
            >
                {items.map(({ icon: Icon, label }) => (
                    <div
                        key={label}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.625rem',
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '0.8125rem',
                            letterSpacing: '0.04em',
                            padding: '0.375rem 0',
                        }}
                    >
                        <Icon size={15} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                        <span>{label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
