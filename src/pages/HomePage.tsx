import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Clock, Phone, ChevronDown } from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import TrustBar from '@/components/ui/TrustBar'
import StatsBar from '@/components/ui/StatsBar'
import { treatments } from '@/data/treatments'
import { testimonials } from '@/data/testimonials'
import BeforeAfterSlider from '@/components/home/BeforeAfterSlider'
import FadeIn from '@/components/animations/FadeIn'

export default function HomePage() {
    return (
        <>
            <SEOHead
                title="Luxury Medical Aesthetics Manchester"
                description="Manchester's premier medically-led aesthetics clinic. Natural lip fillers, anti-wrinkle injections, and skin boosters by qualified nurse prescriber Elena Davies."
                canonical="/"
            />

            {/* ── Hero ── */}
            <section
                style={{
                    position: 'relative',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    overflow: 'hidden',
                }}
            >
                {/* BG image */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'url(https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 30%',
                    }}
                />
                {/* Gradient overlay */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(105deg, rgba(26,22,20,0.82) 0%, rgba(26,22,20,0.55) 55%, rgba(26,22,20,0.3) 100%)',
                    }}
                />
                {/* Decorative script arc top-right */}
                <div
                    style={{
                        position: 'absolute',
                        top: '6rem',
                        right: '3rem',
                        width: '320px',
                        height: '320px',
                        border: '1px solid rgba(212,170,114,0.2)',
                        borderRadius: '50%',
                        display: 'none',
                    }}
                    className="hero-circle"
                />

                <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '8rem', paddingBottom: '6rem' }}>
                    <div style={{ maxWidth: '680px' }}>
                        {/* Eyebrow badge */}
                        <div
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.625rem',
                                backgroundColor: 'rgba(184,147,90,0.18)',
                                border: '1px solid rgba(212,170,114,0.35)',
                                borderRadius: '9999px',
                                padding: '0.375rem 1rem',
                                marginBottom: '1.75rem',
                                animation: 'fadeInUp 0.7s ease forwards',
                                opacity: 0,
                            }}
                        >
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-gold-light)' }} />
                            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-gold-light)' }}>
                                Manchester's Premier Aesthetics Clinic
                            </span>
                        </div>

                        <h1
                            style={{
                                color: '#ffffff',
                                marginBottom: '1.5rem',
                                animation: 'fadeInUp 0.8s ease 0.15s forwards',
                                opacity: 0,
                                maxWidth: '640px',
                                lineHeight: 1.06,
                            }}
                        >
                            Enhancing Natural Beauty with Medical{' '}
                            <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>Precision</em>
                        </h1>

                        <p
                            style={{
                                fontSize: '1.125rem',
                                lineHeight: 1.8,
                                color: 'rgba(255,255,255,0.78)',
                                marginBottom: '2.5rem',
                                maxWidth: '500px',
                                animation: 'fadeInUp 0.8s ease 0.3s forwards',
                                opacity: 0,
                            }}
                        >
                            Subtle, confidence-boosting results in a safe, medically-led environment. Led by Independent Nurse Prescriber Elena Davies.
                        </p>

                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '1rem',
                                animation: 'fadeInUp 0.8s ease 0.45s forwards',
                                opacity: 0,
                            }}
                        >
                            <Link to="/booking" className="btn btn-gold" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                                Book Consultation
                            </Link>
                            <Link to="/treatments" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#ffffff' }}>
                                Our Treatments <ArrowRight size={14} />
                            </Link>
                        </div>

                        {/* Social proof micro-line */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginTop: '2.5rem',
                                animation: 'fadeInUp 0.8s ease 0.6s forwards',
                                opacity: 0,
                            }}
                        >
                            <div style={{ display: 'flex', gap: '1px' }}>
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--color-gold-light)">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>
                            <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8125rem', letterSpacing: '0.04em' }}>
                                Rated 5.0 · 100+ verified reviews
                            </span>
                        </div>
                    </div>
                </div>

                {/* Scroll cue */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '2rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'rgba(255,255,255,0.45)',
                        animation: 'fadeIn 1s ease 1s forwards, floatY 2.5s ease 1s infinite',
                        opacity: 0,
                    }}
                >
                    <span style={{ fontSize: '0.5625rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>Scroll</span>
                    <ChevronDown size={16} />
                </div>

                <style>{`
                    @media (min-width: 900px) { .hero-circle { display: block !important; } }
                `}</style>
            </section>

            {/* ── Trust Bar ── */}
            <TrustBar />

            {/* ── Stats Bar ── */}
            <StatsBar />

            {/* ── Signature Treatments ── */}
            <section style={{ backgroundColor: 'var(--color-cream)', padding: '6rem 0 7rem' }}>
                <div className="container">
                    <FadeIn>
                        <div style={{ marginBottom: '4.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }} className="treatments-header">
                                <div>
                                    <span className="eyebrow">Curated Expertise</span>
                                    <h2 style={{ marginBottom: 0 }}>
                                        Our Signature <em style={{ fontStyle: 'italic', color: 'var(--color-gold-dark)' }}>Treatments</em>
                                    </h2>
                                </div>
                                <p style={{ maxWidth: '480px', lineHeight: 1.8 }}>
                                    Advanced aesthetic procedures designed to restore, enhance, and rejuvenate — delivered with clinical precision and an artisan eye.
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
                        {treatments.slice(0, 4).map((treatment: any, index: number) => {
                            const isEven = index % 2 === 0;
                            return (
                                <FadeIn key={treatment.slug} direction={isEven ? 'left' : 'right'}>
                                    <div
                                        style={{
                                            display: 'grid',
                                            gridTemplateColumns: '1fr',
                                            gap: '2rem',
                                            alignItems: 'center',
                                        }}
                                        className="treatment-row-home"
                                    >
                                        {/* Image */}
                                        <div
                                            style={{
                                                order: 0,
                                                position: 'relative',
                                                borderRadius: isEven ? '50% 2rem 50% 2rem' : '2rem 50% 2rem 50%',
                                                overflow: 'hidden',
                                                aspectRatio: '4/5',
                                                boxShadow: '0 20px 60px rgba(26,22,20,0.16)',
                                            }}
                                            className={isEven ? 'treatment-img-left' : 'treatment-img-right'}
                                        >
                                            <img
                                                src={treatment.image}
                                                alt={treatment.name}
                                                loading="lazy"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1.2s ease' }}
                                                onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)')}
                                                onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
                                            />
                                            {/* Price chip on image */}
                                            <div style={{
                                                position: 'absolute',
                                                bottom: '1.25rem',
                                                left: '1.25rem',
                                                backgroundColor: 'rgba(26,22,20,0.75)',
                                                backdropFilter: 'blur(8px)',
                                                border: '1px solid rgba(212,170,114,0.3)',
                                                borderRadius: '9999px',
                                                padding: '0.375rem 1rem',
                                                color: 'var(--color-gold-light)',
                                                fontFamily: 'var(--font-body)',
                                                fontSize: '0.75rem',
                                                fontWeight: 500,
                                                letterSpacing: '0.06em',
                                            }}>
                                                {treatment.price}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div style={{ order: 1 }} className={isEven ? 'treatment-content-right' : 'treatment-content-left'}>
                                            <span className="eyebrow">{treatment.tagline || 'Signature Treatment'}</span>
                                            <h3 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
                                                {treatment.name}
                                            </h3>
                                            <p style={{ lineHeight: 1.85, marginBottom: '1.75rem', maxWidth: '480px' }}>
                                                {treatment.description}
                                            </p>
                                            {/* Key benefits */}
                                            {treatment.highlights && (
                                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                    {treatment.highlights.slice(0, 3).map((b: string) => (
                                                        <li key={b} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.9rem', color: 'var(--color-stone-light)' }}>
                                                            <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--color-gold)', flexShrink: 0 }} />
                                                            {b}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                            <Link
                                                to={`/treatments/${treatment.slug}`}
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '0.625rem',
                                                    fontFamily: 'var(--font-body)',
                                                    fontSize: '0.8125rem',
                                                    fontWeight: 600,
                                                    letterSpacing: '0.12em',
                                                    textTransform: 'uppercase',
                                                    color: 'var(--color-charcoal)',
                                                    borderBottom: '1.5px solid var(--color-charcoal)',
                                                    paddingBottom: '2px',
                                                    transition: 'color 0.25s ease, border-color 0.25s ease',
                                                    textDecoration: 'none',
                                                }}
                                                onMouseEnter={e => {
                                                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-gold)';
                                                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-gold)';
                                                }}
                                                onMouseLeave={e => {
                                                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-charcoal)';
                                                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-charcoal)';
                                                }}
                                            >
                                                Explore Treatment <ArrowRight size={14} />
                                            </Link>
                                        </div>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <FadeIn>
                            <Link to="/treatments" className="btn btn-secondary">
                                View All Treatments <ArrowRight size={14} />
                            </Link>
                        </FadeIn>
                    </div>
                </div>

                <style>{`
                    @media (min-width: 768px) {
                        .treatments-header { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; align-items: end; }
                        .treatment-row-home { grid-template-columns: 1fr 1fr !important; gap: 5rem !important; }
                        .treatment-img-right { order: 2 !important; }
                        .treatment-content-left { order: 1 !important; }
                        .treatment-img-left { order: 1 !important; }
                        .treatment-content-right { order: 2 !important; }
                    }
                `}</style>
            </section>

            {/* ── Your Practitioner ── */}
            <section style={{ backgroundColor: 'var(--color-white)', padding: '6rem 0 7rem', position: 'relative', overflow: 'hidden' }}>
                {/* Subtle grid bg */}
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(184,147,90,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div
                        style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}
                        className="practitioner-grid"
                    >
                        {/* Image */}
                        <div style={{ position: 'relative' }}>
                            <FadeIn direction="left">
                                <div style={{ position: 'relative', maxWidth: '480px', margin: '0 auto' }}>
                                    {/* Rotating ring */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '-2rem',
                                        right: '-2rem',
                                        width: '120px',
                                        height: '120px',
                                        borderRadius: '50%',
                                        border: '1.5px dashed rgba(184,147,90,0.35)',
                                        animation: 'rotateSlow 20s linear infinite',
                                    }} />
                                    <div style={{
                                        borderRadius: '50% 2rem 50% 2rem',
                                        overflow: 'hidden',
                                        aspectRatio: '3/4',
                                        boxShadow: '0 30px 80px rgba(26,22,20,0.18)',
                                    }}>
                                        <img
                                            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
                                            alt="Elena Davies — Lead Practitioner"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    {/* Floating credential badge */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '2rem',
                                        right: '-1.5rem',
                                        backgroundColor: 'var(--color-charcoal)',
                                        borderRadius: '1rem',
                                        padding: '1rem 1.25rem',
                                        boxShadow: '0 8px 32px rgba(26,22,20,0.25)',
                                        minWidth: '180px',
                                        border: '1px solid rgba(212,170,114,0.2)',
                                    }}>
                                        <div style={{ color: 'var(--color-gold-light)', fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.375rem' }}>
                                            Qualification
                                        </div>
                                        <div style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', fontSize: '1rem' }}>
                                            Level 7 PGDip
                                        </div>
                                        <div style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)', fontSize: '0.75rem', marginTop: '0.2rem' }}>
                                            Medical Aesthetics
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Content */}
                        <div>
                            <FadeIn direction="right">
                                <span className="eyebrow">Your Practitioner</span>
                                <h2 style={{ marginBottom: '0.5rem' }}>Meet Elena Davies</h2>
                                <p style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--color-gold)', marginBottom: '1.75rem' }}>
                                    Independent Nurse Prescriber &amp; Founder
                                </p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                                    <p>
                                        Aesthetics is more than a treatment — it is an experience built on trust, clinical rigour, and a precise artistic touch.
                                    </p>
                                    <p>
                                        With over a decade of medical experience and a Level 7 postgraduate qualification in medical aesthetics, Elena combines clinical safety with the sensitivity required to achieve completely natural results.
                                    </p>
                                </div>

                                <blockquote style={{
                                    borderLeft: '2px solid var(--color-gold)',
                                    paddingLeft: '1.5rem',
                                    margin: '0 0 2rem',
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '1.375rem',
                                    fontStyle: 'italic',
                                    lineHeight: 1.5,
                                    color: 'var(--color-charcoal)',
                                }}>
                                    "My goal is for every client to leave feeling confident, refreshed, and entirely themselves."
                                </blockquote>

                                {/* Credential chips */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', marginBottom: '2.5rem' }}>
                                    {['NMC Registered', 'Level 7 PGDip', 'Complications Trained', 'Anatomy Expert', '10+ Years Clinical'].map(chip => (
                                        <span
                                            key={chip}
                                            style={{
                                                fontFamily: 'var(--font-body)',
                                                fontSize: '0.75rem',
                                                fontWeight: 500,
                                                padding: '0.4rem 0.875rem',
                                                borderRadius: '9999px',
                                                border: '1px solid rgba(184,147,90,0.35)',
                                                color: 'var(--color-gold-dark)',
                                                backgroundColor: 'rgba(184,147,90,0.07)',
                                                letterSpacing: '0.04em',
                                            }}
                                        >
                                            {chip}
                                        </span>
                                    ))}
                                </div>

                                <Link to="/booking" className="btn btn-primary">
                                    Schedule Private Consultation
                                </Link>
                            </FadeIn>
                        </div>
                    </div>
                </div>

                <style>{`
                    @media (min-width: 900px) {
                        .practitioner-grid { grid-template-columns: 1fr 1fr !important; gap: 5rem !important; }
                    }
                `}</style>
            </section>

            {/* ── Before & After Gallery ── */}
            <section style={{ backgroundColor: 'var(--color-charcoal)', padding: '6rem 0 7rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(212,170,114,0.3), transparent)' }} />

                <div className="container">
                    <FadeIn>
                        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                            <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>Real Results</span>
                            <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>
                                The Art of <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>Subtlety</em>
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '520px', margin: '0 auto' }}>
                                Natural transformations that celebrate your unique beauty. Drag the slider to compare before &amp; after.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={200}>
                        <div style={{
                            borderRadius: '2rem',
                            overflow: 'hidden',
                            boxShadow: '0 24px 80px rgba(0,0,0,0.4)',
                            border: '1px solid rgba(212,170,114,0.15)',
                            marginBottom: '2.5rem',
                            maxWidth: '900px',
                            margin: '0 auto 2.5rem',
                        }}>
                            <BeforeAfterSlider />
                        </div>
                    </FadeIn>

                    {/* Secondary mini-grid */}
                    <FadeIn delay={350}>
                        <div
                            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', maxWidth: '900px', margin: '0 auto 3rem' }}
                            className="gallery-mini-grid"
                        >
                            {[
                                { src: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6ece?q=80&w=800&fit=crop', label: 'Lip Enhancement' },
                                { src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&fit=crop', label: 'Skin Booster' },
                                { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&fit=crop', label: 'Profhilo' },
                                { src: 'https://images.unsplash.com/photo-1614859324967-bdf31ae1874b?q=80&w=800&fit=crop', label: 'Anti-Wrinkle' },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="gallery-item"
                                    style={{
                                        aspectRatio: '1/1',
                                        borderRadius: '1.25rem',
                                        overflow: 'hidden',
                                        border: '1px solid rgba(255,255,255,0.07)',
                                    }}
                                >
                                    <img
                                        src={item.src}
                                        alt={item.label}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.75 }}
                                    />
                                    <div className="gallery-item-overlay">
                                        <span style={{ color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.8125rem', fontWeight: 500, letterSpacing: '0.06em' }}>
                                            {item.label}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    <FadeIn delay={500}>
                        <div style={{ textAlign: 'center' }}>
                            <Link
                                to="/gallery"
                                className="btn btn-secondary"
                                style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#ffffff' }}
                                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#ffffff'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-charcoal)'; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'; }}
                            >
                                View Full Gallery <ArrowRight size={14} />
                            </Link>
                        </div>
                    </FadeIn>
                </div>

                <style>{`
                    @media (min-width: 640px) {
                        .gallery-mini-grid { grid-template-columns: repeat(4, 1fr) !important; }
                    }
                `}</style>
            </section>

            {/* ── Client Testimonials ── */}
            <section style={{ backgroundColor: 'var(--color-cream)', padding: '6rem 0 7rem' }}>
                <div className="container">
                    <FadeIn>
                        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                            <span className="eyebrow">Client Stories</span>
                            <h2>
                                What Our <em style={{ fontStyle: 'italic', color: 'var(--color-gold-dark)' }}>Clients Say</em>
                            </h2>
                        </div>
                    </FadeIn>

                    <div
                        style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}
                        className="testimonials-grid"
                    >
                        {testimonials.slice(0, 3).map((t: any, idx: number) => (
                            <FadeIn key={t.name} delay={idx * 120}>
                                <div
                                    style={{
                                        backgroundColor: 'var(--color-white)',
                                        borderRadius: '1.5rem',
                                        padding: '2.25rem',
                                        boxShadow: 'var(--shadow-card)',
                                        border: '1px solid rgba(184,147,90,0.1)',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        transition: 'box-shadow 0.35s ease, transform 0.35s ease',
                                        cursor: 'default',
                                    }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-lg)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-card)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
                                >
                                    {/* Stars */}
                                    <div style={{ display: 'flex', gap: '2px', marginBottom: '1.25rem' }}>
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--color-gold)">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>

                                    <p style={{ lineHeight: 1.85, fontSize: '1rem', flexGrow: 1, marginBottom: '1.5rem', color: 'var(--color-stone)' }}>
                                        "{t.text}"
                                    </p>

                                    <div style={{ borderTop: '1px solid rgba(26,22,20,0.08)', paddingTop: '1.25rem' }}>
                                        <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.125rem', color: 'var(--color-charcoal)', marginBottom: '0.2rem' }}>
                                            {t.name}
                                        </p>
                                        <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
                                            {t.treatment}
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                <style>{`
                    @media (min-width: 768px) {
                        .testimonials-grid { grid-template-columns: repeat(3, 1fr) !important; }
                    }
                `}</style>
            </section>

            {/* ── The Journey ── */}
            <section
                style={{
                    position: 'relative',
                    padding: '6rem 0 7rem',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&fit=crop)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                }}
            >
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(26,22,20,0.93)' }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <FadeIn>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>How It Works</span>
                            <h2 style={{ color: '#ffffff' }}>
                                Your <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>Journey</em> With Us
                            </h2>
                        </div>
                    </FadeIn>

                    <div
                        style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', maxWidth: '900px', margin: '0 auto' }}
                        className="journey-grid"
                    >
                        {[
                            { step: '01', title: 'Free Consultation', desc: 'An in-depth assessment of your anatomy, goals, and medical history. We take time to understand you — no rush, no pressure.' },
                            { step: '02', title: 'Bespoke Treatment', desc: 'Your tailored procedure is performed in our serene clinical environment using only premium, CE-marked products.' },
                            { step: '03', title: 'Aftercare & Follow-up', desc: 'Comprehensive post-treatment guidance and a complimentary review appointment to ensure optimal, long-lasting results.' },
                        ].map((item, idx) => (
                            <FadeIn key={item.step} delay={idx * 180}>
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '1.5rem',
                                        alignItems: 'flex-start',
                                    }}
                                    className="journey-item"
                                >
                                    <div style={{
                                        flexShrink: 0,
                                        width: '52px',
                                        height: '52px',
                                        borderRadius: '50%',
                                        border: '1.5px solid rgba(212,170,114,0.4)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: '1.125rem',
                                        color: 'var(--color-gold-light)',
                                    }}>
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 style={{ color: '#ffffff', fontSize: '1.5rem', marginBottom: '0.625rem' }}>{item.title}</h3>
                                        <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>{item.desc}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                <style>{`
                    @media (min-width: 768px) {
                        .journey-grid { grid-template-columns: repeat(3, 1fr) !important; }
                        .journey-item { flex-direction: column !important; align-items: center !important; text-align: center !important; }
                    }
                `}</style>
            </section>

            {/* ── Visit Us ── */}
            <section style={{ backgroundColor: 'var(--color-ivory)', padding: '6rem 0 7rem' }}>
                <div className="container">
                    <div
                        style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}
                        className="location-grid"
                    >
                        <div>
                            <FadeIn direction="left">
                                <span className="eyebrow">Find Us</span>
                                <h2 style={{ marginBottom: '1rem' }}>
                                    A Sanctuary of <em style={{ fontStyle: 'italic', color: 'var(--color-gold-dark)' }}>Refinement</em>
                                </h2>
                                <p style={{ marginBottom: '2.5rem', maxWidth: '420px' }}>
                                    Discreetly nestled in the heart of Manchester, our private clinic offers a serene retreat from the everyday.
                                </p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                        <MapPin size={18} style={{ color: 'var(--color-gold)', marginTop: '2px', flexShrink: 0 }} />
                                        <div>
                                            <div style={{ fontWeight: 500, color: 'var(--color-charcoal)', marginBottom: '0.25rem', fontFamily: 'var(--font-body)' }}>Clinic Address</div>
                                            <p style={{ margin: 0 }}>123 Deansgate, Manchester M3 2AW</p>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                        <Clock size={18} style={{ color: 'var(--color-gold)', marginTop: '2px', flexShrink: 0 }} />
                                        <div>
                                            <div style={{ fontWeight: 500, color: 'var(--color-charcoal)', marginBottom: '0.25rem', fontFamily: 'var(--font-body)' }}>Opening Hours</div>
                                            <p style={{ margin: 0 }}>Mon–Fri: 9am – 7pm &nbsp;|&nbsp; Sat: 10am – 4pm</p>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                        <Phone size={18} style={{ color: 'var(--color-gold)', marginTop: '2px', flexShrink: 0 }} />
                                        <div>
                                            <div style={{ fontWeight: 500, color: 'var(--color-charcoal)', marginBottom: '0.25rem', fontFamily: 'var(--font-body)' }}>Contact</div>
                                            <p style={{ margin: 0 }}>0161 000 0000</p>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href="https://maps.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    Get Directions
                                </a>
                            </FadeIn>
                        </div>

                        <div>
                            <FadeIn direction="right" delay={200}>
                                <div style={{
                                    borderRadius: '2rem 50% 2rem 50%',
                                    overflow: 'hidden',
                                    aspectRatio: '4/5',
                                    boxShadow: 'var(--shadow-lift)',
                                }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&fit=crop"
                                        alt="Lumière Clinic Interior"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>

                <style>{`
                    @media (min-width: 900px) {
                        .location-grid { grid-template-columns: 1fr 1fr !important; gap: 5rem !important; }
                    }
                `}</style>
            </section>

            {/* ── Final CTA ── */}
            <section style={{ backgroundColor: 'var(--color-charcoal)', padding: '7rem 0 8rem', position: 'relative', textAlign: 'center', overflow: 'hidden' }}>
                {/* Ambient glow */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(184,147,90,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <FadeIn>
                        <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>Begin Your Journey</span>
                        <h2 style={{ color: '#ffffff', marginBottom: '1.25rem', maxWidth: '700px', margin: '0 auto 1.25rem' }}>
                            Ready to Feel <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>Confident Again?</em>
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '480px', margin: '0 auto 2.5rem', fontSize: '1.0625rem' }}>
                            Book your complimentary consultation with Elena today. No pressure — just an honest conversation about your goals.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/booking" className="btn btn-gold" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', boxShadow: '0 0 40px rgba(184,147,90,0.35)' }}>
                                Book Consultation
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
