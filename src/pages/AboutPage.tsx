import { Link } from 'react-router-dom';
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
                        backgroundImage: 'url(/src/assets/images/premium_about_hero.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: -1,
                    }}
                />

                {/* Frosted overlay */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, rgba(250, 246, 240, 0.45) 0%, rgba(250, 246, 240, 0.75) 100%)',
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

            {/* ── Flowing Coded Background & Content Wrapper ── */}
            <div style={{ backgroundColor: 'var(--color-cream)', position: 'relative', paddingBottom: '2rem' }}>
                {/* Overflow hidden boundary for the glowing orbs only */}
                <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                    {/* Subtle slow-moving CSS glowing orbs */}
                    <div style={{
                        position: 'absolute',
                        top: '-5%',
                        right: '-10%',
                        width: '60vw',
                        minWidth: '600px',
                        height: '60vw',
                        minHeight: '600px',
                        background: 'radial-gradient(ellipse, rgba(212,170,114,0.08) 0%, transparent 60%)',
                        borderRadius: '50%',
                        pointerEvents: 'none',
                        animation: 'slowPan1 25s ease-in-out infinite'
                    }} />
                    <div style={{
                        position: 'absolute',
                        top: '40%',
                        left: '-15%',
                        width: '70vw',
                        minWidth: '700px',
                        height: '70vw',
                        minHeight: '700px',
                        background: 'radial-gradient(ellipse, rgba(184,147,90,0.06) 0%, transparent 65%)',
                        borderRadius: '50%',
                        pointerEvents: 'none',
                        animation: 'slowPan2 30s ease-in-out infinite reverse'
                    }} />
                </div>

                {/* ── Stats Bar ── */}
                <div style={{ position: 'relative', zIndex: 20 }}>
                    <StatsBar />
                </div>

                {/* ── Meet Elena ── */}
                <section style={{ padding: '4rem 0 6rem', position: 'relative', zIndex: 1 }}>
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
                <section style={{ padding: '2rem 0 7rem', position: 'relative', zIndex: 1 }}>
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
                                <h2 style={{ color: 'var(--color-charcoal)', maxWidth: '600px', margin: '0 auto' }}>
                                    Why our clients come back — and{' '}
                                    <em style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>send their friends</em>
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
                                        border: '1px solid rgba(184,147,90,0.15)',
                                        backgroundColor: 'rgba(255,255,255,0.4)',
                                        backdropFilter: 'blur(10px)',
                                        transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                                    }}
                                        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(184,147,90,0.4)'; (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.8)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; }}
                                        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(184,147,90,0.15)'; (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.4)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
                                    >
                                        <div style={{
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: '3rem',
                                            fontWeight: 300,
                                            lineHeight: 1,
                                            color: 'rgba(184,147,90,0.4)',
                                            flexShrink: 0,
                                            transition: 'color 0.35s ease',
                                        }}>
                                            {num}
                                        </div>
                                        <div>
                                            <h3 style={{ color: 'var(--color-charcoal)', fontSize: '1.375rem', marginBottom: '0.75rem' }}>{title}</h3>
                                            <p style={{ color: 'rgba(26,22,20,0.75)', lineHeight: 1.85, margin: 0 }}>{desc}</p>
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

                {/* CSS Animation Keyframes for Coded Background */}
                <style>{`
                    @keyframes slowPan1 {
                        0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
                        50% { transform: translate(5%, 10%) scale(1.05); opacity: 0.8; }
                        100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
                    }
                    @keyframes slowPan2 {
                        0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
                        50% { transform: translate(-5%, -10%) scale(1.1); opacity: 0.8; }
                        100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
                    }
                `}</style>
            </div>

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
                            Have a question before you book?{' '}<br className="hidden md:inline" /><em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)', fontWeight: 300 }}>That's what the consultation is for.</em>
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '520px', margin: '0 auto 2.5rem', fontSize: '1.0625rem', lineHeight: 1.8 }}>
                            The consultation is genuinely no-obligation. You can ask every question you've been sitting on, hear what Elena thinks, and decide from there. No pressure, ever.
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
