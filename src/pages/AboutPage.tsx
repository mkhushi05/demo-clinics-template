import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEOHead from '@/components/ui/SEOHead';
import FadeIn from '@/components/animations/FadeIn';
import StatsBar from '@/components/ui/StatsBar';

export default function AboutPage() {
    return (
        <>
            <SEOHead
                title="About Lumière — Elena Davies, Nurse Prescriber | Manchester Aesthetic Clinic"
                description="Lumière is a medically-led aesthetic clinic in Manchester run by Elena Davies, an NHS-trained Independent Nurse Prescriber. Natural results, no upselling, free consultations."
                canonical="/about"
            />

            {/* ── Hero ── */}
            <section
                style={{
                    position: 'relative',
                    padding: '12rem 1rem 10rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    overflow: 'hidden',
                }}
            >
                {/* BG image */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'url(/src/assets/images/aboutushero.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: -1,
                    }}
                />

                {/* Optional: Subtle overlay to ensure text readability if needed */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(255, 255, 255, 0.4)',
                        zIndex: -1,
                    }}
                />
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
                                Lumière is a small, medically-led aesthetic clinic in Manchester, founded and run by Elena Davies — an NHS-trained nurse and independent prescriber with 8+ years of clinical experience.
                            </p>
                            <p>
                                We're not a chain. We're not a beauty salon that also does injectables. Every treatment is carried out by Elena personally, following a free consultation where she's honest with you about what's possible and what isn't.
                            </p>
                            <p>
                                If you've been putting off getting something done because you're not sure who to trust — or you've had a bad experience somewhere else — that's exactly who we're here for.
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
                                        I started Lumière because I kept seeing what happened when aesthetics was done by people without the right training. Patients were walking around looking overdone, unsatisfied, and in some cases, having to deal with complications that shouldn't have happened.
                                    </p>
                                    <p>
                                        My background is in the NHS. I've cared for patients in high-acuity environments. I know what medical safety actually looks like — and I bring that same rigour to aesthetics.
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
                                        "The goal is never to change how you look. It's to help you look like yourself — just the version of you that feels a bit more like you."
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
                                Why our clients come back — and{' '}
                                <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>send their friends</em>
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
                                title: 'Honesty over sales',
                                desc: "If a treatment isn't right for you, Elena will tell you. If what you're asking for won't give you a natural result on your face, she won't do it. We'd rather you leave without treatment than leave with something that doesn't look right.",
                            },
                            {
                                num: '02',
                                title: 'Natural results only',
                                desc: "Everyone who comes here has the same underlying goal: to look like themselves, just better. We don't do overdone. We don't do trends. We do precise, subtle enhancement that nobody can quite put their finger on.",
                            },
                            {
                                num: '03',
                                title: 'Medical-grade safety',
                                desc: "Aesthetics is a medical procedure. We follow clinical safety standards, hold emergency medications on site, train in complications management, and never cut corners. What you get here is the real thing — not a cheaper version of it.",
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
                        <h2 style={{ marginBottom: '1rem' }}>Have a question before you book?</h2>
                        <p style={{ marginBottom: '2.5rem' }}>
                            The consultation is free and genuinely no-obligation. Come in, ask everything you've been wondering, and decide from there. Or message us on WhatsApp first if that's easier.
                        </p>
                        <Link to="/booking" className="btn btn-primary" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                            Book Free Consultation <ArrowRight size={14} />
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </>
    )
}
