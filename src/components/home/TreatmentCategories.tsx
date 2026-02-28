import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import FadeIn from '@/components/animations/FadeIn'

/**
 * Three treatment category cards — horizontally laid out,
 * with a hover overlay revealing treatments in that category.
 * Clicking navigates to /treatments?category=<slug>.
 */

const categories = [
    {
        id: 'injectables',
        label: 'Injectables',
        headline: 'Fillers & Anti-Wrinkle',
        description:
            'Medically precise injectable treatments — from natural lip enhancement to anti-wrinkle injections — designed to refresh and refine.',
        image:
            'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=900',
        treatments: ['Lip Fillers', 'Anti-Wrinkle Injections', 'Cheek Contouring', 'Jawline Definition'],
        slug: 'lip-fillers',
        filterParam: 'injectables',
    },
    {
        id: 'skin',
        label: 'Skin',
        headline: 'Skin Health & Glow',
        description:
            'Advanced skin treatments that work at a cellular level — improving texture, radiance, and resilience from within.',
        image:
            'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=900',
        treatments: ['Profhilo', 'Skin Boosters', 'PRP Therapy', 'Polynucleotides'],
        slug: 'skin-boosters',
        filterParam: 'skin',
    },
    {
        id: 'aesthetics',
        label: 'Aesthetics',
        headline: 'Premium Aesthetics',
        description:
            'Bespoke aesthetic enhancements curated for each individual — natural results that celebrate your unique features.',
        image:
            'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=900',
        treatments: ['Brow Lift', 'Gummy Smile', 'Nefertiti Lift', 'Tear Trough'],
        slug: 'anti-wrinkle',
        filterParam: 'aesthetics',
    },
]

export default function TreatmentCategories() {
    const [hovered, setHovered] = useState<string | null>(null)

    return (
        <section
            aria-labelledby="treatments-heading"
            style={{
                backgroundColor: 'var(--color-cream)',
                padding: '7rem 0 8rem',
            }}
        >
            <div className="container">
                <FadeIn>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.75rem',
                            marginBottom: '4rem',
                            maxWidth: '640px',
                        }}
                    >
                        <span className="eyebrow">Our Treatments</span>
                        <h2 id="treatments-heading" style={{ marginBottom: 0 }}>
                            Our Signature <em style={{ fontStyle: 'italic', color: 'var(--color-gold-dark)' }}>Experience</em>
                        </h2>
                        <p style={{ marginTop: '0.75rem', fontSize: '1.0625rem', maxWidth: '520px' }}>
                            Three pillars of excellence — each deeply medically grounded, each individually art-directed.
                        </p>
                    </div>
                </FadeIn>

                {/* Horizontal cards */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '1.5rem',
                        minHeight: '520px',
                    }}
                    className="tc-grid"
                >
                    {categories.map((cat, idx) => {
                        const isHovered = hovered === cat.id
                        return (
                            <FadeIn key={cat.id} delay={idx * 100}>
                                <Link
                                    to={`/treatments?category=${cat.filterParam}`}
                                    aria-label={`Explore ${cat.label} treatments`}
                                    style={{
                                        display: 'block',
                                        position: 'relative',
                                        borderRadius: '1.5rem',
                                        overflow: 'hidden',
                                        height: '520px',
                                        cursor: 'pointer',
                                        textDecoration: 'none',
                                        boxShadow: isHovered
                                            ? '0 24px 60px rgba(26,22,20,0.22)'
                                            : '0 8px 30px rgba(26,22,20,0.1)',
                                        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                                        transition: 'box-shadow 0.55s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)',
                                    }}
                                    onMouseEnter={() => setHovered(cat.id)}
                                    onMouseLeave={() => setHovered(null)}
                                >
                                    {/* Background image — no zoom animation */}
                                    <div
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            backgroundImage: `url(${cat.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                        aria-hidden="true"
                                    />

                                    {/* Base gradient overlay */}
                                    <div
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background:
                                                'linear-gradient(to top, rgba(26,22,20,0.85) 0%, rgba(26,22,20,0.3) 50%, rgba(26,22,20,0.1) 100%)',
                                            transition: 'opacity 0.55s ease',
                                        }}
                                    />

                                    {/* Hover overlay — dark wash + treatments list */}
                                    <div
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'rgba(26,22,20,0.82)',
                                            opacity: isHovered ? 1 : 0,
                                            transition: 'opacity 0.45s cubic-bezier(0.25,0.46,0.45,0.94)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            padding: '2.5rem',
                                        }}
                                    >
                                        <p
                                            style={{
                                                color: 'rgba(255,255,255,0.65)',
                                                fontSize: '0.9375rem',
                                                lineHeight: 1.75,
                                                marginBottom: '1.75rem',
                                                transform: isHovered ? 'translateY(0)' : 'translateY(12px)',
                                                transition: 'transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94) 0.05s',
                                            }}
                                        >
                                            {cat.description}
                                        </p>

                                        <ul
                                            style={{
                                                listStyle: 'none',
                                                padding: 0,
                                                margin: '0 0 2rem',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '0.625rem',
                                                transform: isHovered ? 'translateY(0)' : 'translateY(12px)',
                                                transition: 'transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94) 0.1s',
                                            }}
                                        >
                                            {cat.treatments.map((t) => (
                                                <li
                                                    key={t}
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.625rem',
                                                        color: 'rgba(255,255,255,0.88)',
                                                        fontSize: '0.9375rem',
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            width: '4px',
                                                            height: '4px',
                                                            borderRadius: '50%',
                                                            backgroundColor: 'var(--color-gold-light)',
                                                            flexShrink: 0,
                                                        }}
                                                    />
                                                    {t}
                                                </li>
                                            ))}
                                        </ul>

                                        <span
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                fontFamily: 'var(--font-body)',
                                                fontSize: '0.75rem',
                                                fontWeight: 600,
                                                letterSpacing: '0.14em',
                                                textTransform: 'uppercase',
                                                color: 'var(--color-gold-light)',
                                                transform: isHovered ? 'translateY(0)' : 'translateY(12px)',
                                                transition: 'transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94) 0.15s',
                                            }}
                                        >
                                            Explore All <ArrowRight size={13} />
                                        </span>
                                    </div>

                                    {/* Default bottom text — always visible */}
                                    <div
                                        style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            padding: '2rem',
                                            opacity: isHovered ? 0 : 1,
                                            transform: isHovered ? 'translateY(6px)' : 'translateY(0)',
                                            transition: 'opacity 0.3s ease, transform 0.3s ease',
                                        }}
                                    >
                                        {/* Corner bracket accent */}
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: '-2.5rem',
                                                left: '2rem',
                                                width: '22px',
                                                height: '22px',
                                                borderTop: '1.5px solid rgba(212,170,114,0.6)',
                                                borderLeft: '1.5px solid rgba(212,170,114,0.6)',
                                            }}
                                        />
                                        <div
                                            style={{
                                                position: 'absolute',
                                                bottom: '0.75rem',
                                                right: '1.75rem',
                                                width: '22px',
                                                height: '22px',
                                                borderBottom: '1.5px solid rgba(212,170,114,0.6)',
                                                borderRight: '1.5px solid rgba(212,170,114,0.6)',
                                            }}
                                        />

                                        <span
                                            style={{
                                                display: 'block',
                                                fontFamily: 'var(--font-body)',
                                                fontSize: '0.625rem',
                                                fontWeight: 600,
                                                letterSpacing: '0.2em',
                                                textTransform: 'uppercase',
                                                color: 'var(--color-gold-light)',
                                                marginBottom: '0.5rem',
                                            }}
                                        >
                                            {cat.label}
                                        </span>
                                        <h3
                                            style={{
                                                color: '#ffffff',
                                                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                                                lineHeight: 1.15,
                                                marginBottom: 0,
                                            }}
                                        >
                                            {cat.headline}
                                        </h3>
                                    </div>
                                </Link>
                            </FadeIn>
                        )
                    })}
                </div>

                {/* View All link */}
                <FadeIn delay={400}>
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/treatments" className="btn btn-secondary">
                            View All Treatments <ArrowRight size={14} />
                        </Link>
                    </div>
                </FadeIn>
            </div>

            <style>{`
                @media (max-width: 767px) {
                    .tc-grid {
                        grid-template-columns: 1fr !important;
                        min-height: unset !important;
                    }
                }
                @media (min-width: 768px) and (max-width: 1023px) {
                    .tc-grid {
                        grid-template-columns: 1fr 1fr !important;
                        gap: 1.25rem !important;
                    }
                    .tc-grid > *:last-child {
                        grid-column: 1 / -1;
                    }
                }
            `}</style>
        </section>
    )
}
