import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
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
                title="Aesthetic Treatments Manchester | Lip Filler, Anti-Wrinkle, Skin Boosters"
                description="Natural-looking lip fillers, anti-wrinkle injections, Profhilo, tear trough, and more — by qualified nurse prescriber Elena Davies. Free consultations. Manchester city centre."
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
                            All our{' '}
                            <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>treatments</em>
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '520px', margin: '0 auto', fontSize: '1.0625rem' }}>
                            Every treatment includes a free consultation first. Elena will tell you honestly what will and won't work for you — then leave the decision entirely with you.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ─── Main Treatments ─── */}
            <section style={{ backgroundColor: 'var(--color-cream)', paddingTop: '3.5rem', paddingBottom: '7rem' }}>

                {/* ── Bespoke Category Filter ── */}
                <FadeIn>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '3.5rem',
                        padding: '0 1.5rem',
                    }}>
                        <div style={{
                            position: 'relative',
                            display: 'inline-flex',
                            gap: '0',
                            borderBottom: '1px solid rgba(26,22,20,0.1)',
                            paddingBottom: '0',
                        }}>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    style={{
                                        fontFamily: 'var(--font-heading)',
                                        fontStyle: 'italic',
                                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                                        fontWeight: 400,
                                        letterSpacing: '0.02em',
                                        padding: '0.5rem 1.75rem 1rem',
                                        background: 'none',
                                        border: 'none',
                                        borderBottom: activeCategory === cat ? '2px solid var(--color-charcoal)' : '2px solid transparent',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        color: activeCategory === cat ? 'var(--color-charcoal)' : 'rgba(26,22,20,0.35)',
                                        marginBottom: '-1px',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </FadeIn>

                {/* ── Full-bleed Treatment Grid ── */}
                <div className="tx-grid-outer">
                    <div className="tx-grid">
                        {(filtered.length > 0 ? filtered : treatments).map((t: any, i: number) => (
                            <FadeIn key={t.slug} delay={i * 60}>
                                <Link to={`/treatments/${t.slug}`} className="tx-card">
                                    {/* Image */}
                                    <div className="tx-card-img">
                                        <img
                                            src={t.image}
                                            alt={t.name}
                                            loading="lazy"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s cubic-bezier(0.25,1,0.5,1)' }}
                                        />
                                    </div>
                                    {/* Gradient overlay */}
                                    <div className="tx-card-overlay" />

                                    {/* Bottom text row */}
                                    <div className="tx-card-content">
                                        <h2 className="tx-card-title">{t.name}</h2>
                                        <div className="tx-card-arrow">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                        </div>
                                    </div>

                                    {/* Hover desc */}
                                    <p className="tx-card-desc">{t.tagline}</p>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                <style>{`
                    /* ── Outer wrapper: full-width with symmetrical padding ── */
                    .tx-grid-outer {
                        width: 100%;
                        padding: 0 1.5rem;
                        box-sizing: border-box;
                    }

                    @media (min-width: 768px) {
                        .tx-grid-outer {
                            padding: 0 2rem;
                        }
                    }

                    /* ── Grid: 1 col on mobile, 3 on desktop ── */
                    .tx-grid {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 1rem;
                    }

                    @media (min-width: 768px) {
                        .tx-grid {
                            grid-template-columns: repeat(3, 1fr);
                            gap: 1.25rem;
                        }
                    }

                    /* ── Card ── */
                    .tx-card {
                        position: relative;
                        display: block;
                        width: 100%;
                        aspect-ratio: 4 / 5;
                        overflow: hidden;
                        text-decoration: none;
                        cursor: pointer;
                        isolation: isolate;
                        background: #111;
                        border-radius: 0.75rem;
                    }

                    /* Keep image as an absolute fill, use the img element */
                    .tx-card-img {
                        position: absolute;
                        inset: 0;
                        z-index: 1;
                    }

                    /* Persistent gradient so name is always legible */
                    .tx-card-overlay {
                        position: absolute;
                        inset: 0;
                        z-index: 2;
                        background: linear-gradient(
                            to top,
                            rgba(0,0,0,0.78) 0%,
                            rgba(0,0,0,0.28) 40%,
                            transparent 65%
                        );
                        transition: background 0.5s ease;
                    }

                    .tx-card:hover .tx-card-overlay {
                        background: linear-gradient(
                            to top,
                            rgba(0,0,0,0.92) 0%,
                            rgba(0,0,0,0.55) 55%,
                            rgba(0,0,0,0.15) 100%
                        );
                    }

                    /* Zoom image on hover */
                    .tx-card:hover .tx-card-img img {
                        transform: scale(1.06);
                    }

                    /* Bottom content row */
                    .tx-card-content {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        z-index: 3;
                        display: flex;
                        align-items: flex-end;
                        justify-content: space-between;
                        padding: 1.75rem 1.75rem;
                        transition: padding 0.35s ease;
                    }

                    .tx-card:hover .tx-card-content {
                        padding-bottom: 5.5rem;
                    }

                    .tx-card-title {
                        font-family: var(--font-body);
                        font-size: clamp(1.2rem, 2vw, 1.5rem);
                        font-weight: 400;
                        color: #ffffff;
                        margin: 0;
                        line-height: 1.25;
                        letter-spacing: -0.01em;
                    }

                    .tx-card-arrow {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        border: 1.5px solid rgba(255,255,255,0.5);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        flex-shrink: 0;
                        opacity: 0;
                        transform: scale(0.8);
                        transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1);
                    }

                    .tx-card:hover .tx-card-arrow {
                        opacity: 1;
                        transform: scale(1);
                        border-color: rgba(255,255,255,0.9);
                        background: rgba(255,255,255,0.1);
                    }

                    /* Tagline that reveals on hover */
                    .tx-card-desc {
                        position: absolute;
                        bottom: 1.75rem;
                        left: 1.75rem;
                        right: 4rem;
                        z-index: 3;
                        font-family: var(--font-body);
                        font-size: 0.875rem;
                        color: rgba(255,255,255,0.7);
                        line-height: 1.6;
                        margin: 0;
                        opacity: 0;
                        transform: translateY(8px);
                        transition: all 0.35s ease 0.05s;
                    }

                    .tx-card:hover .tx-card-desc {
                        opacity: 1;
                        transform: translateY(0);
                    }
                `}</style>
            </section>

            {/* ── Final CTA ── */}
            <section style={{ backgroundColor: 'var(--color-charcoal)', padding: '7rem 0 8rem', position: 'relative', textAlign: 'center', overflow: 'hidden' }}>
                {/* Ambient glow */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(184,147,90,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <FadeIn>
                        <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>Ready When You Are</span>
                        <h2 style={{ color: '#ffffff', marginBottom: '1.25rem', maxWidth: '700px', margin: '0 auto 1.25rem' }}>
                            Still not sure?{' '}<em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>That's what the consultation is for.</em>
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '500px', margin: '0 auto 2.5rem', fontSize: '1.0625rem' }}>
                            The free consultation is genuinely no-obligation. You can ask every question you've been sitting on, hear what Elena thinks, and decide from there. No pressure, ever.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/booking" className="btn btn-gold" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', boxShadow: '0 0 40px rgba(184,147,90,0.35)' }}>
                                Book Free Consultation
                            </Link>
                            <a
                                href="https://wa.me/440000000000"
                                className="btn btn-secondary"
                                style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#ffffff' }}
                                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#ffffff'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-charcoal)'; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'; }}
                            >
                                WhatsApp Us
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    )
}
