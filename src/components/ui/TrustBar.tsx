import { ShieldCheck, Star, Stethoscope, BadgeCheck, Clock } from 'lucide-react'

const items = [
    { icon: Stethoscope, label: 'Medically Led Clinic' },
    { icon: BadgeCheck, label: 'Nurse Prescriber Led' },
    { icon: Star, label: '100+ Five Star Reviews' },
    { icon: ShieldCheck, label: '1,000+ Treatments Performed' },
    { icon: Clock, label: '5+ Years Experience' },
]

export default function TrustBar() {
    return (
        <div
            style={{
                backgroundColor: 'var(--color-charcoal)',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                padding: '1rem 0',
                overflow: 'hidden',
            }}
        >
            {/* Mobile: scrolling marquee */}
            <div className="marquee-wrapper" style={{ position: 'relative' }}>
                <div
                    style={{
                        display: 'flex',
                        gap: '3rem',
                        width: 'max-content',
                    }}
                    className="marquee-track"
                >
                    {[...items, ...items].map(({ icon: Icon, label }, idx) => (
                        <div
                            key={idx}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                color: 'rgba(255,255,255,0.75)',
                                fontSize: '0.8125rem',
                                letterSpacing: '0.05em',
                                whiteSpace: 'nowrap',
                                padding: '0.375rem 0',
                            }}
                        >
                            <Icon size={14} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                            <span>{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .marquee-track {
                    animation: marquee 28s linear infinite;
                }
                @media (min-width: 900px) {
                    .marquee-wrapper {
                        display: flex;
                        justify-content: center;
                        overflow: visible;
                    }
                    .marquee-track {
                        animation: none;
                        width: auto;
                        justify-content: center;
                        flex-wrap: wrap;
                        gap: 0;
                    }
                    .marquee-track > div:not(:last-child)::after {
                        content: '';
                        display: inline-block;
                        width: 1px;
                        height: 12px;
                        background: rgba(255,255,255,0.15);
                        margin: 0 2rem;
                        vertical-align: middle;
                    }
                }
                @media (min-width: 900px) {            
                    .marquee-track > div:nth-child(n+6) {
                        display: none;
                    }
                }
            `}</style>
        </div>
    )
}
