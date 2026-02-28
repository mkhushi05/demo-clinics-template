import { testimonials } from '@/data/testimonials'
import type { Testimonial } from '@/types'

export default function PremiumReviews() {
    return (
        <section className="section" style={{ backgroundColor: 'var(--color-ivory)', position: 'relative', overflow: 'hidden' }}>
            {/* Background design element */}
            <div
                style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-5%',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, var(--color-gold-light) 0%, transparent 70%)',
                    opacity: 0.15,
                    zIndex: 0,
                    pointerEvents: 'none',
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="eyebrow">Client Stories</span>
                    <h2>Hear From Our Clients</h2>
                    <p style={{ maxWidth: '560px', margin: '1rem auto 0', fontSize: '1.0625rem' }}>
                        Honest experiences from our patients. We pride ourselves on clear communication, safe practices, and transformative results.
                    </p>
                </div>

                <div
                    className="reviews-container"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem',
                    }}
                >
                    {/* Featured Review (Larger, Top) */}
                    <div
                        style={{
                            backgroundColor: 'var(--color-white)',
                            padding: '3rem 2.5rem',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-lg)',
                            position: 'relative',
                        }}
                    >
                        <div style={{ position: 'absolute', top: '1.5rem', right: '2.5rem', opacity: 0.1, color: 'var(--color-gold)' }}>
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                            </svg>
                        </div>
                        <div style={{ color: 'var(--color-gold)', fontSize: '1.125rem', marginBottom: '1.5rem', letterSpacing: '3px' }}>
                            {'★'.repeat(testimonials[0].rating)}
                        </div>
                        <p style={{ fontSize: '1.25rem', lineHeight: 1.8, marginBottom: '2rem', fontStyle: 'italic', color: 'var(--color-charcoal)', maxWidth: '90%' }}>
                            "{testimonials[0].text}"
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-ivory)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-stone)' }}>
                                {testimonials[0].initial}
                            </div>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--color-charcoal)' }}>{testimonials[0].name}</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--color-stone-muted)' }}>{testimonials[0].treatment}</div>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Reviews Grid */}
                    <div
                        className="reviews-grid-secondary"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            gap: '2rem',
                        }}
                    >
                        {testimonials.slice(1, 4).map((t: Testimonial, i: number) => (
                            <div
                                key={i}
                                style={{
                                    backgroundColor: 'var(--color-white)',
                                    padding: '2rem',
                                    borderRadius: 'var(--radius-lg)',
                                    boxShadow: 'var(--shadow-card)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <div>
                                    <div style={{ color: 'var(--color-gold)', fontSize: '0.9375rem', marginBottom: '1rem', letterSpacing: '2px' }}>
                                        {'★'.repeat(t.rating)}
                                    </div>
                                    <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '2rem', color: 'var(--color-stone)' }}>
                                        "{t.text}"
                                    </p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--color-ivory)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--color-stone)' }}>
                                        {t.initial}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-charcoal)' }}>{t.name}</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--color-stone-muted)' }}>{t.treatment}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @media (min-width: 768px) {
                    .reviews-grid-secondary {
                        grid-template-columns: repeat(3, 1fr) !important;
                    }
                }
            `}</style>
        </section>
    )
}
