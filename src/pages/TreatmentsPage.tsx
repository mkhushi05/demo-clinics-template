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
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1.25rem',
                        marginBottom: '4.5rem',
                        padding: '0 1.5rem',
                    }}>
                        {categories.map((cat, idx) => {
                            const isActive = activeCategory === cat;
                            return (
                                <div key={cat} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                                    <button
                                        onClick={() => setActiveCategory(cat)}
                                        style={{
                                            fontFamily: isActive ? 'var(--font-heading)' : 'var(--font-body)',
                                            fontStyle: isActive ? 'italic' : 'normal',
                                            fontSize: isActive ? '1.5rem' : '0.8125rem',
                                            fontWeight: isActive ? 400 : 500,
                                            letterSpacing: isActive ? '0.02em' : '0.15em',
                                            textTransform: isActive ? 'none' : 'uppercase',
                                            padding: '0.25rem',
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                                            color: isActive ? 'var(--color-gold-dark)' : 'rgba(26,22,20,0.4)',
                                            lineHeight: 1,
                                            position: 'relative'
                                        }}
                                        onMouseEnter={e => {
                                            if (!isActive) {
                                                e.currentTarget.style.color = 'var(--color-charcoal)';
                                            }
                                        }}
                                        onMouseLeave={e => {
                                            if (!isActive) {
                                                e.currentTarget.style.color = 'rgba(26,22,20,0.4)';
                                            }
                                        }}
                                    >
                                        {cat}
                                        {isActive && (
                                            <span style={{
                                                position: 'absolute',
                                                bottom: '-4px',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                width: '24px',
                                                height: '1px',
                                                backgroundColor: 'var(--color-gold)',
                                                borderRadius: '2px'
                                            }} />
                                        )}
                                    </button>
                                    {idx < categories.length - 1 && (
                                        <span style={{ color: 'rgba(184,147,90,0.25)', fontSize: '0.6rem' }}>◆</span>
                                    )}
                                </div>
                            )
                        })}
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
                                        />
                                    </div>
                                    {/* Gradient overlay */}
                                    <div className="tx-card-overlay" />

                                    {/* Text Content Block */}
                                    <div className="tx-card-content">
                                        <h2 className="tx-card-title">
                                            {t.name}
                                            <ArrowRight size={24} className="tx-card-arrow" strokeWidth={1.5} />
                                        </h2>
                                        <p className="tx-card-desc">{t.description}</p>
                                    </div>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                <style>{`
                    /* ── Outer wrapper: full-width to fill the page ── */
                    .tx-grid-outer {
                        width: 100%;
                        padding: 0 0.5rem;
                        box-sizing: border-box;
                        max-width: 100%; /* allows edge-to-edge stretch depending on container */
                        margin: 0 auto;
                    }

                    @media (min-width: 768px) {
                        .tx-grid-outer {
                            padding: 0 1rem;
                        }
                    }

                    @media (min-width: 1600px) {
                        .tx-grid-outer {
                            max-width: 1920px;
                        }
                    }

                    /* ── Grid: 1 col on mobile, 3 on desktop ── */
                    .tx-grid {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 0.5rem;
                    }

                    @media (min-width: 768px) {
                        .tx-grid {
                            grid-template-columns: repeat(3, 1fr);
                            gap: 0.5rem; /* tight gap like image 1 */
                        }
                    }

                    /* ── Card ── */
                    .tx-card {
                        position: relative;
                        display: block;
                        width: 100%;
                        aspect-ratio: 1 / 1;
                        overflow: hidden;
                        text-decoration: none;
                        cursor: pointer;
                        isolation: isolate;
                        background: var(--color-charcoal);
                        border-radius: 0.5rem; /* smaller tight corner radius */
                        box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                        transform: translateZ(0); /* For Safari scrolling performance */
                    }

                    .tx-card-img {
                        position: absolute;
                        inset: 0;
                        z-index: 1;
                    }
                    
                    .tx-card-img img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
                    }

                    /* Overlay to ensure text legibility */
                    .tx-card-overlay {
                        position: absolute;
                        inset: 0;
                        z-index: 2;
                        background: linear-gradient(
                            to top,
                            rgba(20, 15, 12, 0.8) 0%,
                            rgba(20, 15, 12, 0.2) 40%,
                            transparent 70%
                        );
                        transition: background 0.5s ease;
                    }

                    .tx-card:hover .tx-card-overlay {
                        background: linear-gradient(
                            to top,
                            rgba(15, 10, 8, 0.95) 0%,
                            rgba(15, 10, 8, 0.7) 50%,
                            rgba(15, 10, 8, 0.3) 100%
                        );
                    }

                    /* Zoom image on hover */
                    .tx-card:hover .tx-card-img img {
                        transform: scale(1.05);
                    }

                    /* Content Block */
                    .tx-card-content {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        z-index: 3;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end;
                        padding: 2rem;
                        height: 100%;
                    }

                    .tx-card-title {
                        font-family: var(--font-body); /* clean sans-serif like image 1 */
                        font-size: clamp(1.5rem, 2vw, 2.125rem);
                        font-weight: 400;
                        color: #ffffff;
                        margin: 0;
                        line-height: 1.2;
                        letter-spacing: 0.02em;
                        transform: translateY(0);
                        transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
                        display: flex;
                        align-items: center;
                    }

                    .tx-card-arrow {
                        opacity: 0;
                        transform: translateX(-10px);
                        margin-left: 0.5rem;
                        transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
                        color: var(--color-gold-light);
                    }

                    .tx-card:hover .tx-card-title {
                        transform: translateY(-0.75rem);
                    }
                    
                    .tx-card:hover .tx-card-arrow {
                        opacity: 1;
                        transform: translateX(0);
                    }

                    /* Description that reveals on hover */
                    .tx-card-desc {
                        font-family: var(--font-body);
                        font-size: 0.9375rem;
                        color: rgba(255,255,255,0.85);
                        line-height: 1.5;
                        margin: 0;
                        opacity: 0;
                        max-height: 0;
                        overflow: hidden;
                        transform: translateY(1rem);
                        transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
                    }

                    .tx-card:hover .tx-card-desc {
                        opacity: 1;
                        max-height: 10rem;
                        margin-top: 0.25rem;
                        transform: translateY(0);
                    }
                `}</style>
            </section>

            {/* ── Final CTA ── */}
            <section style={{
                backgroundColor: 'var(--color-charcoal)',
                padding: '8rem 0 9rem',
                position: 'relative',
                textAlign: 'center',
                overflow: 'hidden'
            }}>
                {/* Mesh Gradient Background */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'url(https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 40%',
                    opacity: 0.15,
                    pointerEvents: 'none'
                }} />

                {/* Custom Mesh / Glow overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse at 70% 30%, rgba(184,147,90,0.12) 0%, transparent 50%), radial-gradient(ellipse at 30% 80%, rgba(184,147,90,0.08) 0%, transparent 50%)',
                    pointerEvents: 'none'
                }} />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, var(--color-charcoal) 0%, rgba(26,22,20,0.7) 40%, var(--color-charcoal) 100%)',
                    pointerEvents: 'none'
                }} />

                {/* Decorative Rings / Elements */}
                {/* Large gentle rotating circle */}
                <div style={{
                    position: 'absolute',
                    top: '-30%',
                    right: '-10%',
                    width: '50vw',
                    minWidth: '600px',
                    aspectRatio: '1/1',
                    borderRadius: '50%',
                    border: '1px solid rgba(212,170,114,0.06)',
                    pointerEvents: 'none'
                }} />

                {/* Dashed rotating accent circle */}
                <div style={{
                    position: 'absolute',
                    bottom: '-25%',
                    left: '-15vw',
                    width: '40vw',
                    minWidth: '450px',
                    aspectRatio: '1/1',
                    borderRadius: '50%',
                    border: '1px dashed rgba(212,170,114,0.12)',
                    animation: 'rotateSlow 40s linear infinite',
                    pointerEvents: 'none'
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <FadeIn>
                        <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>Ready When You Are</span>
                        <h2 style={{ color: '#ffffff', marginBottom: '1.25rem', maxWidth: '750px', margin: '0 auto 1.25rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                            Still not sure?{' '}<br className="hidden md:inline" /><em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)', fontWeight: 300 }}>That's what the consultation is for.</em>
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '520px', margin: '0 auto 2.5rem', fontSize: '1.0625rem', lineHeight: 1.8 }}>
                            The free consultation is genuinely no-obligation. You can ask every question you've been sitting on, hear what Elena thinks, and decide from there. No pressure, ever.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/booking" className="btn btn-gold" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', boxShadow: '0 0 40px rgba(184,147,90,0.25)' }}>
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
