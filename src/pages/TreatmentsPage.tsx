import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Sparkles } from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import FadeIn from '@/components/animations/FadeIn'
import { treatments } from '@/data/treatments'

const categories = ['All', 'Lip', 'Anti-Wrinkle', 'Skin']

export default function TreatmentsPage() {
    const [activeCategory, setActiveCategory] = useState('All')

    const filtered = activeCategory === 'All'
        ? treatments
        : treatments.filter((t: any) =>
            t.category?.toLowerCase().includes(activeCategory.toLowerCase()) ||
            t.name?.toLowerCase().includes(activeCategory.toLowerCase())
        )

    return (
        <>
            <SEOHead
                title="Our Treatments — Luxury Medical Aesthetics"
                description="Explore our range of medically-led aesthetic treatments: lip fillers, anti-wrinkle injections, and Profhilo skin boosters. All delivered by qualified nurse prescriber Elena Davies."
                canonical="/treatments"
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
                            Our Services
                        </span>
                        <h1 style={{ color: '#ffffff', marginBottom: '1.25rem' }}>
                            Advanced Aesthetic{' '}
                            <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>Procedures</em>
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '520px', margin: '0 auto', fontSize: '1.0625rem' }}>
                            Every treatment begins with a complimentary consultation. We take the time to understand your goals and create a bespoke plan — tailored entirely to you.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ── Main Treatments ── */}
            <section style={{ backgroundColor: 'var(--color-cream)', padding: '5rem 0 7rem' }}>
                <div className="container">
                    {/* Category filter pills */}
                    <FadeIn>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', justifyContent: 'center', marginBottom: '4rem' }}>
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    style={{
                                        fontFamily: 'var(--font-body)',
                                        fontSize: '0.8125rem',
                                        fontWeight: 500,
                                        letterSpacing: '0.08em',
                                        padding: '0.6rem 1.5rem',
                                        borderRadius: '9999px',
                                        border: '1.5px solid',
                                        cursor: 'pointer',
                                        transition: 'all 0.25s ease',
                                        backgroundColor: activeCategory === cat ? 'var(--color-charcoal)' : 'transparent',
                                        borderColor: activeCategory === cat ? 'var(--color-charcoal)' : 'rgba(26,22,20,0.2)',
                                        color: activeCategory === cat ? '#ffffff' : 'var(--color-stone-light)',
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Treatment list */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
                        {(filtered.length > 0 ? filtered : treatments).map((t: any, i: number) => {
                            const isEven = i % 2 === 0;
                            return (
                                <FadeIn key={t.slug} direction={isEven ? 'left' : 'right'}>
                                    <div
                                        style={{
                                            display: 'grid',
                                            gridTemplateColumns: '1fr',
                                            gap: '2.5rem',
                                            alignItems: 'center',
                                            backgroundColor: 'var(--color-white)',
                                            borderRadius: '2rem',
                                            overflow: 'hidden',
                                            boxShadow: 'var(--shadow-card)',
                                            border: '1px solid rgba(184,147,90,0.08)',
                                            transition: 'box-shadow 0.4s ease',
                                        }}
                                        className={`treatment-card-row t-row-${i}`}
                                        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-lg)'; }}
                                        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-card)'; }}
                                    >
                                        {/* Image */}
                                        <div
                                            style={{
                                                overflow: 'hidden',
                                                position: 'relative',
                                                minHeight: '300px',
                                            }}
                                            className={isEven ? 'treat-img-order-1' : 'treat-img-order-2'}
                                        >
                                            <img
                                                src={t.image}
                                                alt={t.name}
                                                loading="lazy"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease', display: 'block', position: 'absolute', inset: 0 }}
                                                onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'; }}
                                                onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                                            />
                                            {/* Duration chip */}
                                            <div style={{
                                                position: 'absolute',
                                                top: '1.25rem',
                                                right: '1.25rem',
                                                backgroundColor: 'rgba(26,22,20,0.7)',
                                                backdropFilter: 'blur(8px)',
                                                borderRadius: '9999px',
                                                padding: '0.375rem 0.875rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.4rem',
                                                color: '#fff',
                                                fontSize: '0.75rem',
                                                fontFamily: 'var(--font-body)',
                                                fontWeight: 500,
                                            }}>
                                                <Clock size={11} style={{ color: 'var(--color-gold-light)' }} />
                                                {t.duration}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div style={{ padding: '2.5rem' }} className={isEven ? 'treat-txt-order-2' : 'treat-txt-order-1'}>
                                            <span className="eyebrow">{t.tagline}</span>
                                            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>{t.name}</h2>
                                            <p style={{ lineHeight: 1.85, marginBottom: '1.5rem' }}>{t.description}</p>

                                            {/* Benefits */}
                                            {t.benefits && (
                                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                    {t.benefits.slice(0, 4).map((b: string) => (
                                                        <li key={b} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.9rem', color: 'var(--color-stone-light)' }}>
                                                            <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--color-gold)', flexShrink: 0 }} />
                                                            {b}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {/* Price + CTA */}
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.375rem',
                                                    color: 'var(--color-gold-dark)',
                                                    fontFamily: 'var(--font-body)',
                                                    fontSize: '0.9375rem',
                                                    fontWeight: 600,
                                                }}>
                                                    <Sparkles size={14} />
                                                    {t.price}
                                                </div>
                                                <Link to={`/treatments/${t.slug}`} className="btn btn-primary" style={{ fontSize: '0.75rem', padding: '0.75rem 1.5rem' }}>
                                                    Learn More <ArrowRight size={13} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>

                <style>{`
                    @media (min-width: 768px) {
                        .treatment-card-row { grid-template-columns: 1fr 1fr !important; }
                        .treat-img-order-1 { order: 1; min-height: 420px !important; }
                        .treat-img-order-2 { order: 2; min-height: 420px !important; }
                        .treat-txt-order-1 { order: 1; }
                        .treat-txt-order-2 { order: 2; }
                    }
                `}</style>
            </section>

            {/* ── Bottom CTA ── */}
            <section style={{ backgroundColor: 'var(--color-ivory)', padding: '5rem 0', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <FadeIn>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>Can't decide which treatment is right?</h3>
                        <p style={{ marginBottom: '2rem' }}>
                            Book a complimentary consultation and Elena will help you create a personalised treatment plan based on your unique goals.
                        </p>
                        <Link to="/booking" className="btn btn-primary" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                            Book Free Consultation
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </>
    )
}
