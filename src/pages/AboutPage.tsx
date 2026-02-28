import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEOHead from '@/components/ui/SEOHead';
import FadeIn from '@/components/animations/FadeIn';
import StatsBar from '@/components/ui/StatsBar';

export default function AboutPage() {
    return (
        <>
            <SEOHead
                title="About Us — Elena Davies | Lumière Aesthetics"
                description="Meet Elena Davies, founder of Lumière Aesthetics Clinic in Manchester. Learn about our medically-led approach, qualifications, and commitment to natural results."
                canonical="/about"
            />

            {/* ── Hero ── */}
            <section
                style={{
                    position: 'relative',
                    padding: '8rem 1rem 6rem',
                    backgroundColor: 'var(--color-cream)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                <div className="container" style={{ maxWidth: '800px' }}>
                    <FadeIn>
                        <h1
                            style={{
                                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                                lineHeight: 1.1,
                                fontWeight: 500,
                                marginBottom: '2.5rem',
                                color: 'var(--color-charcoal)',
                            }}
                        >
                            Expert aesthetic
                            <br />
                            treatments
                            <br />
                            bespoke {' '}
                            <span style={{ position: 'relative', display: 'inline-block', zIndex: 1 }}>
                                to you
                                {/* Hand-drawn style SVG underline matching website colors (gold) */}
                                <svg
                                    viewBox="0 0 100 20"
                                    style={{
                                        position: 'absolute',
                                        bottom: '-0.1em',
                                        left: '-0.1em',
                                        width: '110%',
                                        height: '0.6em',
                                        zIndex: -1,
                                    }}
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M2,15 Q40,5 98,8"
                                        fill="none"
                                        stroke="rgba(184, 147, 90, 0.3)"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={150}>
                        <div
                            style={{
                                fontSize: '1.2rem',
                                lineHeight: 1.8,
                                color: 'var(--color-charcoal)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                margin: '0 auto',
                            }}
                        >
                            <p>
                                Founded by Independent Nurse Prescriber Elena Davies, Lumière is a leading
                                aesthetic clinic based in Manchester, specialising in expert injectable
                                treatments, advanced facial rejuvenation, and personalised skin solutions.
                            </p>
                            <p>
                                Our mission is simple: to help every client feel confident through
                                safe, natural-looking results that enhance rather than transform.
                            </p>
                            <p>
                                At Lumière, excellence, safety, and precision are at the heart of everything
                                we do. We believe in absolute honesty, continual education, and providing a
                                sanctuary where medical precision meets artistic vision.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ── Stats Bar ── */}
            <StatsBar />

            {/* ── Meet Elena ── */}
            <section style={{ backgroundColor: 'var(--color-white)', padding: '6rem 0 7rem', position: 'relative' }}>
                <div className="container">
                    <div
                        style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}
                        className="elena-grid"
                    >
                        {/* Image */}
                        <div style={{ position: 'relative' }}>
                            <FadeIn direction="left">
                                <div style={{ position: 'relative', maxWidth: '420px', margin: '0 auto' }}>
                                    <div style={{
                                        borderRadius: '50% 2rem 50% 2rem',
                                        overflow: 'hidden',
                                        aspectRatio: '3/4',
                                        boxShadow: '0 30px 80px rgba(26,22,20,0.16)',
                                    }}>
                                        <img
                                            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
                                            alt="Elena Davies, Founder of Lumière Aesthetics"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    {/* Decorative rings */}
                                    <div style={{ position: 'absolute', bottom: '-2.5rem', right: '-2.5rem', width: '140px', height: '140px', borderRadius: '50%', border: '1.5px solid rgba(184,147,90,0.2)', zIndex: -1 }} />
                                    <div style={{ position: 'absolute', top: '-1.5rem', left: '-1.5rem', width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-ivory)', zIndex: -1 }} />
                                </div>
                            </FadeIn>
                        </div>

                        {/* Content */}
                        <div>
                            <FadeIn direction="right">
                                <h2 style={{ marginBottom: '0.5rem' }}>Meet Elena Davies</h2>
                                <p style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontStyle: 'italic',
                                    fontSize: '1.25rem',
                                    color: 'var(--color-gold-dark)',
                                    marginBottom: '2rem',
                                }}>
                                    Founder &amp; Lead Practitioner
                                </p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                                    <p>
                                        I founded Lumière with a singular vision: to raise the standard of care in the aesthetics industry and provide a safe space where patients achieve beautiful, undetectable results.
                                    </p>
                                    <p>
                                        With over 8 years of clinical experience across the NHS and private aesthetic sector, my approach is anchored in medical safety, detailed anatomical knowledge, and an artistic eye for facial proportions.
                                    </p>
                                    <p
                                        style={{
                                            fontFamily: 'var(--font-heading)',
                                            fontStyle: 'italic',
                                            fontSize: '1.25rem',
                                            lineHeight: 1.6,
                                            color: 'var(--color-stone)',
                                        }}
                                    >
                                        "My goal is never to change how you look, but to restore confidence and help you feel like the absolute best version of yourself."
                                    </p>
                                </div>

                                {/* Qualification chips */}
                                <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(184,147,90,0.15)', marginBottom: '2rem' }}>
                                    <div style={{
                                        fontFamily: 'var(--font-body)',
                                        fontSize: '0.6875rem',
                                        fontWeight: 600,
                                        letterSpacing: '0.18em',
                                        textTransform: 'uppercase',
                                        color: 'var(--color-gold)',
                                        marginBottom: '1rem',
                                    }}>
                                        Qualifications &amp; Credentials
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        {[
                                            'NMC Registered Prescriber',
                                            'Level 7 PGDip Aesthetics',
                                            'Complications Management',
                                            'Advanced Dermal Filler Cert.',
                                            '8+ Years Clinical Experience',
                                            'Anatomy Expert',
                                        ].map(chip => (
                                            <span
                                                key={chip}
                                                style={{
                                                    fontFamily: 'var(--font-body)',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 500,
                                                    padding: '0.4rem 0.875rem',
                                                    borderRadius: '9999px',
                                                    border: '1px solid rgba(184,147,90,0.3)',
                                                    color: 'var(--color-stone)',
                                                    backgroundColor: 'var(--color-cream)',
                                                }}
                                            >
                                                {chip}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <Link to="/booking" className="btn btn-primary">
                                    Book Your Consultation
                                </Link>
                            </FadeIn>
                        </div>
                    </div>
                </div>

                <style>{`
                    @media (min-width: 900px) {
                        .elena-grid { grid-template-columns: 1fr 1fr !important; gap: 5rem !important; }
                    }
                `}</style>
            </section>

            {/* ── What Drives Us ── */}
            <section style={{ backgroundColor: 'var(--color-charcoal)', padding: '6rem 0 7rem', position: 'relative', overflow: 'hidden' }}>
                {/* Decorative top border */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(212,170,114,0.4), transparent)' }} />

                <div className="container">
                    <FadeIn>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <span style={{
                                display: 'inline-block',
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.6875rem',
                                fontWeight: 600,
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                color: 'var(--color-gold)',
                                marginBottom: '1rem',
                            }}>
                                What Drives Us
                            </span>
                            <h2 style={{ color: '#ffffff', maxWidth: '600px', margin: '0 auto' }}>
                                An unwavering commitment to{' '}
                                <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>excellence</em>
                            </h2>
                        </div>
                    </FadeIn>

                    <div
                        style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }}
                        className="values-grid"
                    >
                        {[
                            {
                                num: '01',
                                title: 'Medical Integrity',
                                desc: "We promise absolute honesty. If a treatment isn't right for you, or won't yield the results you want safely, we won't perform it. Your health comes first, always.",
                            },
                            {
                                num: '02',
                                title: 'Subtle, Natural Results',
                                desc: "We reject the over-filled look. Our technique is defined by precise micro-adjustments that harmonise your natural features — never transform them.",
                            },
                            {
                                num: '03',
                                title: 'Continual Education',
                                desc: "Aesthetics is constantly evolving. We commit to ongoing training and attend global masterclasses to bring the safest, most advanced techniques to Manchester.",
                            },
                        ].map(({ num, title, desc }, idx) => (
                            <FadeIn key={num} delay={idx * 180}>
                                <div style={{
                                    display: 'flex',
                                    gap: '1.5rem',
                                    alignItems: 'flex-start',
                                    padding: '2rem',
                                    borderRadius: '1.25rem',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                    transition: 'border-color 0.35s ease, background 0.35s ease',
                                }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(212,170,114,0.25)'; (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(212,170,114,0.04)'; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLDivElement).style.backgroundColor = 'transparent'; }}
                                >
                                    <div style={{
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: '3rem',
                                        fontWeight: 300,
                                        lineHeight: 1,
                                        color: 'rgba(212,170,114,0.25)',
                                        flexShrink: 0,
                                        transition: 'color 0.35s ease',
                                    }}>
                                        {num}
                                    </div>
                                    <div>
                                        <h3 style={{ color: '#ffffff', fontSize: '1.375rem', marginBottom: '0.75rem' }}>{title}</h3>
                                        <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.85, margin: 0 }}>{desc}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                <style>{`
                    @media (min-width: 768px) {
                        .values-grid { grid-template-columns: repeat(3, 1fr) !important; }
                    }
                `}</style>
            </section>

            {/* ── Final CTA ── */}
            <section style={{ backgroundColor: 'var(--color-ivory)', padding: '6rem 0', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '640px', margin: '0 auto' }}>
                    <FadeIn>
                        <div style={{ width: '48px', height: '1.5px', background: 'linear-gradient(to right, transparent, var(--color-gold), transparent)', margin: '0 auto 2rem' }} />
                        <h2 style={{ marginBottom: '1rem' }}>Ready to begin your journey?</h2>
                        <p style={{ marginBottom: '2.5rem' }}>
                            Book a complimentary consultation and let's talk about how we can help you look and feel your very best.
                        </p>
                        <Link to="/booking" className="btn btn-primary" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                            Book Your Consultation <ArrowRight size={14} />
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </>
    )
}
