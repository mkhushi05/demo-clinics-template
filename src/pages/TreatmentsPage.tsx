import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import FadeIn from '@/components/animations/FadeIn'
import { treatments } from '@/data/treatments'

const categories = ['All', 'Lip', 'Anti-Wrinkle', 'Skin']

/** Map the home-page filterParam values → display category tabs */
const PARAM_TO_CATEGORY: Record<string, string> = {
    injectables: 'Lip',
    skin: 'Skin',
    aesthetics: 'Anti-Wrinkle',
}

export default function TreatmentsPage() {
    const [searchParams] = useSearchParams()
    const [activeCategory, setActiveCategory] = useState<string>(() => {
        const param = searchParams.get('category') ?? ''
        return PARAM_TO_CATEGORY[param.toLowerCase()] ?? 'All'
    })

    useEffect(() => {
        const param = searchParams.get('category') ?? ''
        const mapped = PARAM_TO_CATEGORY[param.toLowerCase()] ?? 'All'
        setActiveCategory(mapped)
    }, [searchParams])

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

                    {/* Treatment Grid */}
                    <div className="treatments-grid">
                        {(filtered.length > 0 ? filtered : treatments).map((t: any, i: number) => {
                            return (
                                <FadeIn key={t.slug} delay={i * 50}>
                                    <Link to={`/treatments/${t.slug}`} className="treatment-grid-card">
                                        {/* Background Image */}
                                        <div className="treatment-grid-image">
                                            <img
                                                src={t.image}
                                                alt={t.name}
                                                loading="lazy"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                            {/* Gradient Overlay */}
                                            <div className="treatment-grid-overlay" />
                                        </div>

                                        {/* Content inside the card */}
                                        <div className="treatment-grid-content">
                                            <h2 className="treatment-grid-title">{t.name}</h2>

                                            {/* Revealed on hover */}
                                            <div className="treatment-grid-hover-reveal">
                                                <p className="treatment-grid-desc">{t.tagline}</p>
                                                <div className="treatment-grid-action">
                                                    <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Discover</span>
                                                    <ArrowRight size={14} />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>

                <style>{`
                    .treatments-grid {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                    
                    @media (min-width: 768px) {
                        .treatments-grid {
                            grid-template-columns: repeat(2, 1fr);
                        }
                    }

                    @media (min-width: 1024px) {
                        .treatments-grid {
                            grid-template-columns: repeat(3, 1fr);
                        }
                    }

                    .treatment-grid-card {
                        display: block;
                        position: relative;
                        width: 100%;
                        aspect-ratio: 4 / 5;
                        border-radius: 1rem;
                        overflow: hidden;
                        text-decoration: none;
                        cursor: pointer;
                        isolation: isolate;
                    }

                    .treatment-grid-image {
                        position: absolute;
                        inset: 0;
                        z-index: 1;
                        border-radius: inherit;
                        transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
                    }

                    .treatment-grid-overlay {
                        position: absolute;
                        inset: 0;
                        border-radius: inherit;
                        background: linear-gradient(
                            to top,
                            rgba(0, 0, 0, 0.85) 0%,
                            rgba(0, 0, 0, 0.4) 35%,
                            transparent 60%
                        );
                        transition: all 0.5s ease;
                    }

                    .treatment-grid-content {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        padding: 2rem 1.5rem;
                        z-index: 2;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end;
                        color: #ffffff;
                    }

                    .treatment-grid-title {
                        font-family: var(--font-body); /* Using sans-serif for modern look like reference */
                        font-size: 1.35rem;
                        font-weight: 500;
                        margin: 0;
                        color: #ffffff;
                        transition: transform 0.4s ease;
                        transform: translateY(20px);
                    }

                    .treatment-grid-hover-reveal {
                        opacity: 0;
                        max-height: 0;
                        overflow: hidden;
                        transition: all 0.4s ease;
                        transform: translateY(20px);
                    }

                    .treatment-grid-desc {
                        font-family: var(--font-body);
                        font-size: 0.875rem;
                        color: rgba(255, 255, 255, 0.7);
                        margin: 0.75rem 0 1.25rem 0;
                        line-height: 1.6;
                    }

                    .treatment-grid-action {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        color: var(--color-gold-light);
                    }

                    /* --- Hover Effects --- */
                    .treatment-grid-card:hover .treatment-grid-image {
                        transform: scale(1.05);
                    }

                    .treatment-grid-card:hover .treatment-grid-overlay {
                        background: linear-gradient(
                            to top,
                            rgba(0, 0, 0, 0.95) 0%,
                            rgba(0, 0, 0, 0.7) 50%,
                            rgba(0,0,0,0.2) 100%
                        );
                    }

                    .treatment-grid-card:hover .treatment-grid-title {
                        transform: translateY(0);
                    }

                    .treatment-grid-card:hover .treatment-grid-hover-reveal {
                        opacity: 1;
                        max-height: 150px; /* arbitrary height to allow expansion */
                        transform: translateY(0);
                        margin-top: 0.5rem;
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
