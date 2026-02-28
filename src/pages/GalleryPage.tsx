import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import FadeIn from '@/components/animations/FadeIn'

type Category = 'All' | 'Lip' | 'Anti-Wrinkle' | 'Profhilo'

const galleryCategories: Category[] = ['All', 'Lip', 'Anti-Wrinkle', 'Profhilo']

const galleryItems = [
    { src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800', label: 'Lip Enhancement', category: 'Lip', aspect: '3/4', tilt: 1 },
    { src: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6ece?auto=format&fit=crop&q=80&w=800', label: 'Skin Glow Treatment', category: 'Profhilo', aspect: '4/3', tilt: -1 },
    { src: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=800', label: 'Lip Volume', category: 'Lip', aspect: '3/4', tilt: 2 },
    { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800', label: 'Skin Hydration', category: 'Profhilo', aspect: '4/3', tilt: -2 },
    { src: 'https://images.unsplash.com/photo-1614859324967-bdf31ae1874b?auto=format&fit=crop&q=80&w=800', label: 'Anti-Wrinkle Treatment', category: 'Anti-Wrinkle', aspect: '3/4', tilt: 1 },
    { src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800', label: 'Clinic Environment', category: 'All', aspect: '4/5', tilt: -1 },
    { src: 'https://images.unsplash.com/photo-1608272522770-f81d866a87e3?auto=format&fit=crop&q=80&w=800', label: 'Forehead Smoothing', category: 'Anti-Wrinkle', aspect: '4/3', tilt: 2 },
    { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800', label: 'Skin Texture Result', category: 'Profhilo', aspect: '3/4', tilt: -1 },
    { src: 'https://images.unsplash.com/photo-1560750133-c374aca90a50?auto=format&fit=crop&q=80&w=800', label: 'Cheek Definition', category: 'Lip', aspect: '4/3', tilt: 1 },
]

export default function GalleryPage() {
    const [active, setActive] = useState<Category>('All')

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

            {/* ── Scrapbook Gallery Grid ── */}
            <section style={{ backgroundColor: 'var(--color-cream)', padding: '5rem 0 6rem' }}>
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
                                            parent.style.transform = 'rotate(0deg)';
                                            parent.style.zIndex = '10';
                                        }}
                                        onMouseLeave={e => {
                                            const parent = (e.currentTarget as HTMLDivElement).parentElement as HTMLDivElement;
                                            parent.style.transform = `rotate(${item.tilt}deg)`;
                                            parent.style.zIndex = '1';
                                        }}
                                    >
                                        <img
                                            src={item.src}
                                            alt={item.label}
                                            loading="lazy"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease', display: 'block' }}
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
            <section style={{ backgroundColor: 'var(--color-porcelain)', padding: '7rem 0 8rem' }}>
                <div className="container">
                    <FadeIn>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <span className="eyebrow">Patient Voices</span>
                            <h2 style={{ marginBottom: '0.75rem' }}>Their <em style={{ fontStyle: 'italic', color: 'var(--color-gold-dark)' }}>Experience</em></h2>
                            <p style={{ color: 'var(--color-taupe)', maxWidth: '380px', margin: '0 auto', fontSize: '0.9rem', lineHeight: 1.7 }}>
                                Unedited words from patients, in their own hand.
                            </p>
                        </div>
                    </FadeIn>

                    <div
                        style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', alignItems: 'start' }}
                        className="gallery-quotes-grid"
                    >
                        {[
                            {
                                quote: (
                                    <>
                                        I had this deep fear of looking "done".<br /><br />
                                        Elena spent a full twenty minutes just talking
                                        through my face shape — not once pushing a treatment.<br /><br />
                                        The result is so natural my mum couldn't quite place
                                        what had changed. <em>That's exactly what I wanted.</em>
                                    </>
                                ),
                                name: 'Sarah M.',
                                initial: 'S',
                                treatment: 'Lip Filler',
                                rotation: '-0.8deg',
                            },
                            {
                                quote: (
                                    <>
                                        Both times the clinic itself has felt beautiful and calm —
                                        nothing clinical, nothing intimidating.<br /><br />
                                        I look refreshed. Well-rested. Not frozen.<br /><br />
                                        <em>My colleagues keep asking what I've changed about my skincare.</em>
                                    </>
                                ),
                                name: 'Jessica T.',
                                initial: 'J',
                                treatment: 'Anti-Wrinkle Injections',
                                rotation: '0.6deg',
                            },
                            {
                                quote: (
                                    <>
                                        During my consultation, Elena actually talked me
                                        out of the treatment I came in for.<br /><br />
                                        She said it wouldn't give me the results I was after,
                                        and recommended Profhilo instead.<br /><br />
                                        <em>That integrity means everything.</em>
                                    </>
                                ),
                                name: 'Amanda L.',
                                initial: 'A',
                                treatment: 'Skin Boosters',
                                rotation: '-0.4deg',
                            },
                        ].map((item, idx) => (
                            <FadeIn key={item.name} delay={idx * 180} direction="up">
                                <div
                                    style={{
                                        /* Warm linen paper feel */
                                        background: 'linear-gradient(160deg, #faf8f4 0%, #f5f0e6 100%)',
                                        borderRadius: '4px',
                                        padding: 'clamp(2rem, 4vw, 3rem) clamp(1.75rem, 4vw, 3rem) 2.25rem',
                                        /* Outer border — very subtle gold tint */
                                        border: '1px solid rgba(184,147,90,0.18)',
                                        /* Layered shadow: lift + warm inner glow */
                                        boxShadow: [
                                            '0 4px 6px rgba(26,22,20,0.03)',
                                            '0 14px 40px rgba(26,22,20,0.06)',
                                            'inset 0 1px 0 rgba(255,255,255,0.85)',   /* top highlight */
                                            'inset 0 -1px 0 rgba(184,147,90,0.08)',  /* bottom warm edge */
                                            'inset 1px 0 0 rgba(255,255,255,0.6)',   /* left highlight */
                                        ].join(', '),
                                        display: 'flex',
                                        flexDirection: 'column',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transform: `rotate(${item.rotation})`,
                                        transition: 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease',
                                        willChange: 'transform',
                                    }}
                                    className="editorial-note-card"
                                    onMouseEnter={e => {
                                        const el = e.currentTarget as HTMLDivElement;
                                        el.style.transform = 'rotate(0deg) translateY(-6px)';
                                        el.style.boxShadow = [
                                            '0 4px 6px rgba(26,22,20,0.03)',
                                            '0 20px 50px rgba(26,22,20,0.09)',
                                            'inset 0 1px 0 rgba(255,255,255,0.85)',
                                            'inset 0 -1px 0 rgba(184,147,90,0.1)',
                                            'inset 1px 0 0 rgba(255,255,255,0.6)',
                                        ].join(', ');
                                    }}
                                    onMouseLeave={e => {
                                        const el = e.currentTarget as HTMLDivElement;
                                        el.style.transform = `rotate(${item.rotation})`;
                                        el.style.boxShadow = [
                                            '0 4px 6px rgba(26,22,20,0.03)',
                                            '0 14px 40px rgba(26,22,20,0.06)',
                                            'inset 0 1px 0 rgba(255,255,255,0.85)',
                                            'inset 0 -1px 0 rgba(184,147,90,0.08)',
                                            'inset 1px 0 0 rgba(255,255,255,0.6)',
                                        ].join(', ');
                                    }}
                                >
                                    {/* Faint ruled lines — paper texture suggestion */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        backgroundImage: 'repeating-linear-gradient(transparent, transparent 27px, rgba(184,147,90,0.04) 27px, rgba(184,147,90,0.04) 28px)',
                                        backgroundPositionY: '4rem',
                                        pointerEvents: 'none',
                                        zIndex: 0,
                                    }} />

                                    {/* Opening quote mark — very faint ink suggestion */}
                                    <div style={{
                                        fontFamily: '"Cormorant Garamond", Georgia, serif',
                                        fontSize: '5rem',
                                        lineHeight: 0.8,
                                        color: 'rgba(184,147,90,0.12)',
                                        marginBottom: '0.5rem',
                                        marginLeft: '-0.25rem',
                                        position: 'relative',
                                        zIndex: 1,
                                        userSelect: 'none',
                                    }}>
                                        "
                                    </div>

                                    {/* Handwritten quote body */}
                                    <p style={{
                                        fontFamily: '"Caveat", cursive',
                                        fontSize: 'clamp(1.45rem, 2.2vw, 1.7rem)',
                                        lineHeight: 1.75,
                                        letterSpacing: '0.015em',
                                        color: '#3a3230',
                                        fontWeight: 500,
                                        position: 'relative',
                                        zIndex: 1,
                                        marginBottom: '2.5rem',
                                        flexGrow: 1,
                                    }}>
                                        {item.quote}
                                    </p>

                                    {/* Signature row */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        paddingTop: '1.5rem',
                                        borderTop: '1px solid rgba(184,147,90,0.12)',
                                        position: 'relative',
                                        zIndex: 1,
                                    }}>
                                        {/* Monogram stamp */}
                                        <div style={{
                                            width: '2.25rem',
                                            height: '2.25rem',
                                            borderRadius: '50%',
                                            border: '1px solid rgba(184,147,90,0.35)',
                                            color: 'var(--color-gold-dark)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontFamily: '"Cormorant Garamond", Georgia, serif',
                                            fontSize: '1.1rem',
                                            flexShrink: 0,
                                        }}>
                                            {item.initial}
                                        </div>
                                        <div>
                                            <span style={{
                                                fontFamily: '"Cormorant Garamond", Georgia, serif',
                                                color: 'var(--color-charcoal)',
                                                fontSize: '1.05rem',
                                                display: 'block',
                                                lineHeight: 1.2,
                                                marginBottom: '0.2rem',
                                            }}>{item.name}</span>
                                            <span style={{
                                                fontFamily: '"Inter", system-ui, sans-serif',
                                                fontSize: '0.6rem',
                                                fontWeight: 600,
                                                letterSpacing: '0.15em',
                                                textTransform: 'uppercase',
                                                color: 'var(--color-gold)',
                                            }}>{item.treatment}</span>
                                        </div>
                                        {/* Five stars — small & elegant */}
                                        <div style={{ marginLeft: 'auto', color: 'var(--color-gold-light)', fontSize: '0.65rem', letterSpacing: '0.1em' }}>
                                            ★★★★★
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <style>{`
                        @media (min-width: 900px) {
                            .gallery-quotes-grid { grid-template-columns: repeat(3, 1fr) !important; }
                        }
                        .editorial-note-card em {
                            font-family: "Caveat", cursive;
                            font-style: normal;
                            font-weight: 600;
                            color: var(--color-gold-dark);
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
