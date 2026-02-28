export default function HowItWorks() {
    const steps = [
        {
            number: '01',
            title: 'Consultation',
            description: 'In-depth facial assessment and honest conversation about your goals. We align on a bespoke treatment plan designed exclusively for you.',
        },
        {
            number: '02',
            title: 'Preparation',
            description: 'Your comfort is paramount. We prepare your skin meticulously, applying premium numbing agents and ensuring a serene, clinical environment.',
        },
        {
            number: '03',
            title: 'Treatment',
            description: 'Expert execution by a qualified medical professional, using industry-leading products and micro-precision techniques for natural results.',
        },
        {
            number: '04',
            title: 'Aftercare & Review',
            description: 'Comprehensive post-treatment guidance. A complimentary follow-up appointment guarantees your results are flawlessly integrating.',
        },
    ]

    return (
        <section className="section" style={{ backgroundColor: 'var(--color-ivory)', borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="eyebrow">The Process</span>
                    <h2>Your Journey with Lumière</h2>
                    <p style={{ maxWidth: '560px', margin: '1rem auto 0', fontSize: '1.0625rem' }}>
                        From initial consultation to final review, every step is designed to ensure safety, comfort, and outstanding aesthetic results.
                    </p>
                </div>

                <div
                    className="steps-grid"
                    style={{
                        display: 'grid',
                        gap: '2.5rem',
                        gridTemplateColumns: '1fr',
                    }}
                >
                    {steps.map((step, idx) => (
                        <div key={step.number} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative' }}>
                            {/* Decorative Line (Desktop only) */}
                            {idx !== steps.length - 1 && (
                                <div
                                    className="step-connector"
                                    style={{
                                        position: 'absolute',
                                        top: '24px',
                                        left: '48px',
                                        width: 'calc(100% - 24px)',
                                        height: '1px',
                                        backgroundColor: 'var(--color-stone-muted)',
                                        opacity: 0.3,
                                        zIndex: 0,
                                        display: 'none' // Handled via CSS class below
                                    }}
                                />
                            )}

                            <div style={{ position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-gold-light)', color: 'var(--color-gold)', fontSize: '1.125rem', fontFamily: 'var(--font-heading)', fontWeight: 500, border: '1px solid rgba(204,163,113,0.3)' }}>
                                {step.number}
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.375rem', marginBottom: '0.75rem' }}>{step.title}</h3>
                                <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--color-stone)' }}>
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (min-width: 768px) {
                    .steps-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 4rem 3rem !important;
                    }
                }
                @media (min-width: 1024px) {
                    .steps-grid {
                        grid-template-columns: repeat(4, 1fr) !important;
                        gap: 2rem !important;
                    }
                    .step-connector {
                        display: block !important;
                    }
                }
            `}</style>
        </section>
    )
}
