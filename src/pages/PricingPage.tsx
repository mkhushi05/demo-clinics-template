import { Link } from 'react-router-dom'
import SEOHead from '@/components/ui/SEOHead'
import FadeIn from '@/components/animations/FadeIn'
import { pricingData, depositNote } from '@/data/pricing'

export default function PricingPage() {
    return (
        <>
            <SEOHead
                title="Treatment Pricing"
                description="Transparent pricing for all aesthetic treatments at Lumière Aesthetics Clinic Manchester. Lip fillers from £250, anti-wrinkle from £190, Profhilo from £300."
                canonical="/pricing"
            />

            {/* ── Hero Header ── */}
            <section
                style={{
                    backgroundColor: 'var(--color-charcoal)',
                    paddingTop: '9rem',
                    paddingBottom: '5rem',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Ambient background */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '800px', height: '400px', background: 'radial-gradient(ellipse, rgba(184,147,90,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <FadeIn>
                        <span style={{
                            display: 'inline-block',
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.6875rem',
                            fontWeight: 600,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            color: 'var(--color-gold)',
                            marginBottom: '1.25rem',
                        }}>
                            Transparent Pricing
                        </span>
                        <h1 style={{ color: '#ffffff', marginBottom: '1.25rem' }}>
                            Treatment{' '}
                            <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>Pricing</em>
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '520px', margin: '0 auto', fontSize: '1.0625rem' }}>
                            Premium treatments using industry-leading products. All prices include a comprehensive consultation and full aftercare review.
                        </p>
                    </FadeIn>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    {pricingData.map((cat) => (
                        <div key={cat.name} style={{ marginBottom: '3rem' }}>
                            <h2
                                style={{
                                    fontSize: '1.5rem',
                                    borderBottom: '2px solid var(--color-gold)',
                                    paddingBottom: '0.5rem',
                                    display: 'inline-block',
                                    marginBottom: '1.5rem',
                                }}
                            >
                                {cat.name}
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {cat.items.map((item) => (
                                    <div
                                        key={item.name}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'baseline',
                                            borderBottom: '1px dashed rgba(0,0,0,0.08)',
                                            paddingBottom: '0.75rem',
                                            gap: '1rem',
                                        }}
                                    >
                                        <div>
                                            <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 500, margin: 0, fontSize: '1rem' }}>{item.name}</h4>
                                            {item.note && (
                                                <span style={{ fontSize: '0.8125rem', color: 'var(--color-stone-muted)', display: 'block', marginTop: '2px' }}>
                                                    {item.note}
                                                </span>
                                            )}
                                        </div>
                                        <span style={{ fontWeight: 600, color: 'var(--color-gold-dark)', whiteSpace: 'nowrap', fontSize: '0.9375rem' }}>
                                            {item.price}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div
                        style={{
                            backgroundColor: 'var(--color-ivory)',
                            padding: '1.25rem 1.5rem',
                            borderRadius: 'var(--radius-md)',
                            textAlign: 'center',
                        }}
                    >
                        <p style={{ fontSize: '0.9rem', margin: 0 }}>
                            <strong style={{ color: 'var(--color-charcoal)' }}>Deposit Policy:</strong>{' '}
                            <span style={{ color: 'var(--color-stone-light)' }}>{depositNote}</span>
                        </p>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/booking" className="btn btn-primary">Book Consultation</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
