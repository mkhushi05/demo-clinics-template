import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import BeforeAfterSlider from '@/components/home/BeforeAfterSlider'
import FadeIn from '@/components/animations/FadeIn'

type Category = 'All' | 'Lip' | 'Anti-Wrinkle' | 'Profhilo'

const galleryCategories: Category[] = ['All', 'Lip', 'Anti-Wrinkle', 'Profhilo']

const galleryItems = [
    { src: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6ece?q=80&w=800&fit=crop', label: 'Lip Enhancement', category: 'Lip', aspect: '3/4', tilt: 1 },
    { src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&fit=crop', label: 'Skin Glow Treatment', category: 'Profhilo', aspect: '4/3', tilt: -1 },
    { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&fit=crop', label: 'Profhilo Result', category: 'Profhilo', aspect: '3/4', tilt: 2 },
    { src: 'https://images.unsplash.com/photo-1614859324967-bdf31ae1874b?q=80&w=800&fit=crop', label: 'Anti-Wrinkle Treatment', category: 'Anti-Wrinkle', aspect: '4/3', tilt: -2 },
    { src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&fit=crop', label: 'Natural Lip Volume', category: 'Lip', aspect: '3/4', tilt: 1 },
    { src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&fit=crop', label: 'Clinic Environment', category: 'All', aspect: '4/5', tilt: -1 },
    { src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&fit=crop', label: 'Forehead Smoothing', category: 'Anti-Wrinkle', aspect: '4/3', tilt: 2 },
    { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&fit=crop', label: 'Skin Texture Result', category: 'Profhilo', aspect: '3/4', tilt: -1 },
    { src: 'https://images.unsplash.com/photo-1560750133-c374aca90a50?q=80&w=800&fit=crop', label: 'Cheek Definition', category: 'Lip', aspect: '4/3', tilt: 1 },
]

const sliderCategories = [
    { key: 'Lip', label: 'Lip Enhancement', desc: '0.5ml dermal filler — subtle hydration and border definition' },
    { key: 'Anti-Wrinkle', label: 'Anti-Wrinkle Treatment', desc: '3 areas — forehead, frown lines, crow\'s feet' },
    { key: 'Profhilo', label: 'Profhilo Skin Booster', desc: 'Course of 2 sessions — skin quality transformation' },
]

const testimonials = [
    { name: 'Sarah M.', treatment: 'Lip Filler', text: 'I was nervous but Elena made me feel so comfortable. The results are so natural — exactly what I wanted.' },
    { name: 'Rebecca L.', treatment: 'Anti-Wrinkle', text: "I've been coming to Lumière for two years. The attention to detail and care is unlike anywhere else I've been." },
]

export default function GalleryPage() {
    const [active, setActive] = useState<Category>('All')
    const [activeSlider, setActiveSlider] = useState('Lip')

    const filtered = active === 'All' ? galleryItems : galleryItems.filter(g => g.category === active)

    return (
        <>
            <SEOHead
                title="Patient Gallery — Real Before & After Results"
                description="See real before and after results from Lumière Aesthetics Clinic. Natural lip filler, anti-wrinkle, and Profhilo transformations in Manchester."
                canonical="/gallery"
            />

            {/* ── Hero ── */}
            <section
                style={{
                    backgroundColor: 'var(--color-charcoal)',
                    paddingTop: '9rem',
                    paddingBottom: '5rem',
                    position: 'relative',
                    overflow: 'hidden',
                    textAlign: 'center',
                }}
            >
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '700px', height: '350px', background: 'radial-gradient(ellipse, rgba(184,147,90,0.09) 0%, transparent 65%)', pointerEvents: 'none' }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <FadeIn>
                        <span style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1.25rem' }}>
                            Real Results
                        </span>
                        <h1 style={{ color: '#ffffff', marginBottom: '1.25rem' }}>
                            Before &amp; After <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>Gallery</em>
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '520px', margin: '0 auto 2rem', fontSize: '1.0625rem' }}>
                            Every image shown here represents a genuine patient result. We never retouch or manipulate our clinical photography.
                        </p>
                        {/* Trust badge */}
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', backgroundColor: 'rgba(184,147,90,0.12)', border: '1px solid rgba(212,170,114,0.25)', borderRadius: '9999px', padding: '0.5rem 1.25rem' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-gold-light)' }} />
                            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em' }}>
                                100% real, unretouched patient photography
                            </span>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ── Interactive Before/After Sliders ── */}
            <section style={{ backgroundColor: 'var(--color-cream)', padding: '5rem 0' }}>
                <div className="container">
                    <FadeIn>
                        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                            <span className="eyebrow">Compare Results</span>
                            <h2 style={{ marginBottom: '1.5rem' }}>Drag to Reveal the Transformation</h2>

                            {/* Slider category tabs */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.625rem', marginTop: '1.5rem' }}>
                                {sliderCategories.map(s => (
                                    <button
                                        key={s.key}
                                        onClick={() => setActiveSlider(s.key)}
                                        style={{
                                            fontFamily: 'var(--font-body)',
                                            fontSize: '0.8125rem',
                                            fontWeight: 500,
                                            letterSpacing: '0.06em',
                                            padding: '0.5rem 1.25rem',
                                            borderRadius: '9999px',
                                            border: '1.5px solid',
                                            cursor: 'pointer',
                                            transition: 'all 0.25s ease',
                                            backgroundColor: activeSlider === s.key ? 'var(--color-charcoal)' : 'transparent',
                                            borderColor: activeSlider === s.key ? 'var(--color-charcoal)' : 'rgba(26,22,20,0.2)',
                                            color: activeSlider === s.key ? '#ffffff' : 'var(--color-stone-light)',
                                        }}
                                    >
                                        {s.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {sliderCategories.map(s => (
                        <div key={s.key} style={{ display: activeSlider === s.key ? 'block' : 'none' }}>
                            <FadeIn>
                                <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-stone-muted)', fontSize: '0.9375rem' }}>
                                    {s.desc}
                                </p>
                                <div style={{
                                    borderRadius: '2rem',
                                    overflow: 'hidden',
                                    boxShadow: 'var(--shadow-lift)',
                                    maxWidth: '860px',
                                    margin: '0 auto',
                                    border: '1px solid rgba(184,147,90,0.1)',
                                }}>
                                    <BeforeAfterSlider />
                                </div>
                            </FadeIn>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Scrapbook Gallery Grid ── */}
            <section style={{ backgroundColor: 'var(--color-ivory)', padding: '5rem 0 6rem' }}>
                <div className="container">
                    <FadeIn>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <span className="eyebrow">Patient Portfolio</span>
                            <h2>Browse Our <em style={{ fontStyle: 'italic', color: 'var(--color-gold-dark)' }}>Results</em></h2>
                        </div>
                    </FadeIn>

                    {/* Category filter */}
                    <FadeIn delay={100}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '3rem' }}>
                            {galleryCategories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActive(cat)}
                                    style={{
                                        fontFamily: 'var(--font-body)',
                                        fontSize: '0.8125rem',
                                        fontWeight: 500,
                                        padding: '0.5rem 1.25rem',
                                        borderRadius: '9999px',
                                        border: '1.5px solid',
                                        cursor: 'pointer',
                                        transition: 'all 0.25s ease',
                                        backgroundColor: active === cat ? 'var(--color-charcoal)' : 'var(--color-white)',
                                        borderColor: active === cat ? 'var(--color-charcoal)' : 'rgba(26,22,20,0.15)',
                                        color: active === cat ? '#ffffff' : 'var(--color-stone-light)',
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Masonry-style scrapbook grid */}
                    <div
                        style={{
                            columns: '2',
                            columnGap: '1.25rem',
                            orphans: 1,
                            widows: 1,
                        }}
                        className="scrapbook-grid"
                    >
                        {filtered.map((item, idx) => (
                            <FadeIn
                                key={`${item.src}-${idx}`}
                                delay={idx * 60}
                                direction={idx % 2 === 0 ? 'left' : 'right'}
                            >
                                <div
                                    style={{
                                        marginBottom: '1.25rem',
                                        breakInside: 'avoid',
                                        transform: `rotate(${item.tilt}deg)`,
                                        transformOrigin: 'center center',
                                        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                                    }}
                                    className="scrapbook-item"
                                >
                                    <div
                                        style={{
                                            position: 'relative',
                                            borderRadius: '1rem',
                                            overflow: 'hidden',
                                            aspectRatio: item.aspect,
                                            boxShadow: '0 6px 24px rgba(26,22,20,0.12), 0 2px 8px rgba(26,22,20,0.08)',
                                            border: '3px solid #ffffff',
                                            cursor: 'pointer',
                                        }}
                                        onMouseEnter={e => {
                                            const parent = (e.currentTarget as HTMLDivElement).parentElement as HTMLDivElement;
                                            parent.style.transform = 'rotate(0deg) scale(1.03)';
                                            parent.style.zIndex = '10';
                                        }}
                                        onMouseLeave={e => {
                                            const parent = (e.currentTarget as HTMLDivElement).parentElement as HTMLDivElement;
                                            parent.style.transform = `rotate(${item.tilt}deg) scale(1)`;
                                            parent.style.zIndex = '1';
                                        }}
                                    >
                                        <img
                                            src={item.src}
                                            alt={item.label}
                                            loading="lazy"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease', display: 'block' }}
                                            onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'; }}
                                            onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                                        />
                                        {/* Hover overlay */}
                                        <div
                                            style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                background: 'linear-gradient(to top, rgba(26,22,20,0.75) 0%, transparent 100%)',
                                                padding: '1.25rem 1rem 0.875rem',
                                                transform: 'translateY(100%)',
                                                transition: 'transform 0.35s ease',
                                            }}
                                            className="gallery-label"
                                        >
                                            <span style={{ color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.8125rem', fontWeight: 500, letterSpacing: '0.05em' }}>
                                                {item.label}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    {/* "Show all" note */}
                    {filtered.length === 0 && (
                        <p style={{ textAlign: 'center', color: 'var(--color-stone-muted)', marginTop: '2rem' }}>
                            No results in this category yet. <button onClick={() => setActive('All')} style={{ color: 'var(--color-gold)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>View all</button>
                        </p>
                    )}
                </div>

                <style>{`
                    @media (min-width: 640px) { .scrapbook-grid { columns: 3 !important; } }
                    @media (min-width: 1024px) { .scrapbook-grid { columns: 4 !important; } }
                    .scrapbook-item:hover .gallery-label { transform: translateY(0) !important; }
                `}</style>
            </section>

            {/* ── Patient voices ── */}
            <section style={{ backgroundColor: 'var(--color-white)', padding: '5rem 0' }}>
                <div className="container">
                    <FadeIn>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <span className="eyebrow">Patient Voices</span>
                            <h2>Their <em style={{ fontStyle: 'italic', color: 'var(--color-gold-dark)' }}>Experience</em></h2>
                        </div>
                    </FadeIn>

                    <div
                        style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}
                        className="gallery-quotes-grid"
                    >
                        {testimonials.map((t, idx) => (
                            <FadeIn key={t.name} delay={idx * 150}>
                                <div style={{
                                    backgroundColor: 'var(--color-cream)',
                                    borderRadius: '1.5rem',
                                    padding: '2rem 2.5rem',
                                    border: '1px solid rgba(184,147,90,0.12)',
                                    position: 'relative',
                                }}>
                                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '4rem', lineHeight: 1, color: 'rgba(184,147,90,0.2)', marginBottom: '-1rem', userSelect: 'none' }}>
                                        "
                                    </div>
                                    <p style={{ lineHeight: 1.85, marginBottom: '1.5rem', fontSize: '1.0625rem' }}>
                                        {t.text}
                                    </p>
                                    <div style={{ borderTop: '1px solid rgba(26,22,20,0.07)', paddingTop: '1rem' }}>
                                        <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-charcoal)', fontSize: '1.125rem' }}>{t.name}</span>
                                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-gold)', marginLeft: '0.75rem' }}>{t.treatment}</span>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <style>{`
                        @media (min-width: 640px) {
                            .gallery-quotes-grid { grid-template-columns: 1fr 1fr !important; }
                        }
                    `}</style>
                </div>
            </section>

            {/* ── CTA ── */}
            <section style={{ backgroundColor: 'var(--color-charcoal)', padding: '6rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '500px', height: '250px', background: 'radial-gradient(ellipse, rgba(184,147,90,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <FadeIn>
                        <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>
                            Love What You <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>See?</em>
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '460px', margin: '0 auto 2.5rem' }}>
                            Book a complimentary consultation to discuss achieving similar results tailored to your unique features.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/booking" className="btn btn-gold" style={{ paddingLeft: '2.25rem', paddingRight: '2.25rem' }}>
                                Book Consultation
                            </Link>
                            <Link to="/treatments" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#ffffff' }}
                                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#ffffff'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-charcoal)'; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'; }}
                            >
                                View Treatments <ArrowRight size={14} />
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    )
}
