import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Star, Stethoscope, BadgeCheck, Clock, CheckCircle, MapPin } from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import TrustBar from '@/components/ui/TrustBar'
import { treatments } from '@/data/treatments'
import { testimonials } from '@/data/testimonials'
import BeforeAfterSlider from '@/components/home/BeforeAfterSlider'

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
                    alignItems: 'center',
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'url(https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, rgba(26,22,20,0.75) 0%, rgba(26,22,20,0.45) 50%, rgba(26,22,20,0.6) 100%)',
                    }}
                />
                <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '6rem', paddingBottom: '4rem' }}>
                    <div style={{ maxWidth: '640px' }}>
                        <span
                            className="eyebrow"
                            style={{ color: 'var(--color-gold-light)', marginBottom: '1.5rem', display: 'block', animation: 'fadeInUp 0.7s ease forwards', opacity: 0 }}
                        >
                            Luxury Medical Aesthetics
                        </span>
                        <h1
                            style={{
                                color: '#ffffff',
                                marginBottom: '1.5rem',
                                animation: 'fadeInUp 0.7s ease 0.15s forwards',
                                opacity: 0,
                            }}
                        >
                            Enhancing Natural Beauty with Medical Precision
                        </h1>
                        <p
                            style={{
                                fontSize: '1.125rem',
                                lineHeight: 1.8,
                                color: 'rgba(255,255,255,0.8)',
                                marginBottom: '2.5rem',
                                maxWidth: '520px',
                                animation: 'fadeInUp 0.7s ease 0.3s forwards',
                                opacity: 0,
                            }}
                        >
                            Subtle, confidence-boosting results in a safe, medically-led environment in the heart of Manchester. Led by qualified nurse prescriber Elena Davies.
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '1rem',
                                animation: 'fadeInUp 0.7s ease 0.45s forwards',
                                opacity: 0,
                            }}
                        >
                            <Link to="/booking" className="btn btn-gold">
                                Book Consultation
                            </Link>
                            <Link to="/treatments" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#ffffff' }}>
                                View Treatments <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Trust Bar ── */}
            <TrustBar />

            {/* ── Signature Treatments ── */}
            <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <span className="eyebrow">What We Do</span>
                        <h2>Our Signature Treatments</h2>
                        <p style={{ maxWidth: '560px', margin: '1rem auto 0', fontSize: '1.0625rem' }}>
                            Advanced aesthetic procedures designed to restore, enhance, and rejuvenate — delivered with clinical precision and an artistic eye.
                        </p>
                    </div>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: '2rem',
                        }}
                    >
                        {treatments.map((treatment) => (
                            <Link
                                key={treatment.slug}
                                to={`/treatments/${treatment.slug}`}
                                style={{
                                    display: 'block',
                                    borderRadius: 'var(--radius-lg)',
                                    overflow: 'hidden',
                                    backgroundColor: 'var(--color-white)',
                                    boxShadow: 'var(--shadow-card)',
                                    transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-4px)'
                                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)'
                                    e.currentTarget.style.boxShadow = 'var(--shadow-card)'
                                }}
                            >
                                <div style={{ overflow: 'hidden', height: '260px' }}>
                                    <img
                                        src={treatment.image}
                                        alt={treatment.name}
                                        loading="lazy"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease',
                                        }}
                                        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                                        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                                    />
                                </div>
                                <div style={{ padding: '1.75rem' }}>
                                    <h3 style={{ marginBottom: '0.5rem', fontSize: '1.375rem' }}>{treatment.name}</h3>
                                    <p style={{ fontSize: '0.9375rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>{treatment.description}</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-gold)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                                            Explore Treatment <ArrowRight size={13} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }} />
                                        </span>
                                        <span style={{ fontSize: '0.875rem', color: 'var(--color-stone-muted)' }}>{treatment.price}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Practitioner ── */}
            <section className="section" style={{ backgroundColor: 'var(--color-ivory)' }}>
                <div className="container">
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            gap: '3rem',
                            alignItems: 'center',
                        }}
                        className="practitioner-grid"
                    >
                        <div>
                            <span className="eyebrow">Your Practitioner</span>
                            <h2 style={{ marginBottom: '1.25rem' }}>Meet Elena Davies</h2>
                            <p style={{ fontSize: '1.0625rem', fontStyle: 'italic', color: 'var(--color-stone)', marginBottom: '1.25rem' }}>
                                Lead Medical Aesthetician & Independent Nurse Prescriber
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                I believe aesthetic treatments should empower you, not change who you are. My philosophy is rooted in subtle enhancements that celebrate your unique features — never obscure them.
                            </p>
                            <p style={{ marginBottom: '2rem' }}>
                                With over 8 years of clinical experience across the NHS and private sector, I bring a deep understanding of facial anatomy, meticulous technique, and a genuine commitment to your safety and satisfaction.
                            </p>

                            <div style={{ padding: '1.25rem', backgroundColor: 'var(--color-cream)', borderLeft: '3px solid var(--color-gold)', borderRadius: '0 var(--radius-md) var(--radius-md) 0', marginBottom: '2rem' }}>
                                <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '0.75rem' }}>Qualifications</h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                                    {[
                                        'Registered Nurse & Independent Nurse Prescriber (NMC)',
                                        'Level 7 Post-Graduate Diploma in Clinical Aesthetics',
                                        'Complications Management Certified',
                                        'Advanced Dermal Filler Techniques',
                                        '8+ Years Clinical Experience',
                                    ].map((q) => (
                                        <li key={q} style={{ fontSize: '0.875rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'var(--color-stone)' }}>
                                            <CheckCircle size={14} style={{ color: 'var(--color-gold)', marginTop: '3px', flexShrink: 0 }} />
                                            {q}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link to="/about" className="btn btn-secondary">
                                Read Full Biography <ArrowRight size={14} />
                            </Link>
                        </div>

                        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                            <img
                                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
                                alt="Elena Davies, Lead Practitioner"
                                loading="lazy"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>
                    </div>
                </div>

                <style>{`
          @media (min-width: 768px) {
            .practitioner-grid { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>
            </section>

            {/* ── Before & After ── */}
            <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <span className="eyebrow">Real Results</span>
                        <h2>Transformational Results</h2>
                        <p style={{ maxWidth: '560px', margin: '1rem auto 0', fontSize: '1.0625rem' }}>
                            Realistic, subtle, and natural aesthetic transformations. Drag the slider to compare before and after.
                        </p>
                    </div>
                    <BeforeAfterSlider />
                    <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                        <Link to="/gallery" className="btn btn-secondary">
                            View Full Gallery <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Testimonials ── */}
            <section className="section" style={{ backgroundColor: 'var(--color-ivory)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <span className="eyebrow">Client Stories</span>
                        <h2>What Our Clients Say</h2>
                        <p style={{ maxWidth: '560px', margin: '1rem auto 0', fontSize: '1.0625rem' }}>
                            Genuine feedback from real patients. No filters, no scripts — just honest experiences.
                        </p>
                    </div>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '1.5rem',
                        }}
                    >
                        {testimonials.slice(0, 3).map((t) => (
                            <div
                                key={t.name}
                                style={{
                                    backgroundColor: 'var(--color-white)',
                                    padding: '2rem',
                                    borderRadius: 'var(--radius-lg)',
                                    boxShadow: 'var(--shadow-card)',
                                }}
                            >
                                <div style={{ color: 'var(--color-gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '2px' }}>
                                    {'★'.repeat(t.rating)}
                                </div>
                                <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                                    "{t.text}"
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            backgroundColor: 'var(--color-ivory)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: '1.125rem',
                                            color: 'var(--color-stone)',
                                        }}
                                    >
                                        {t.initial}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-charcoal)' }}>{t.name}</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--color-stone-muted)' }}>{t.treatment} Patient</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Clinic Environment ── */}
            <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
                <div className="container">
                    <div
                        style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}
                        className="environment-grid"
                    >
                        <div>
                            <span className="eyebrow">Our Space</span>
                            <h2 style={{ marginBottom: '1.25rem' }}>A Sanctuary of Calm</h2>
                            <p style={{ marginBottom: '1rem' }}>
                                Designed with your comfort as the priority, Lumière offers a serene, private, and pristine clinical environment. From the moment you arrive, experience a standard of care that is both luxurious and impeccably safe.
                            </p>
                            <p>
                                We use state-of-the-art medical equipment and adhere to the strictest hygiene protocols. Every instrument is single-use, every surface is clinically cleaned, and every product we use is CE-marked, batch-tracked, and sourced from authorised UK distributors.
                            </p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <img
                                src="https://images.unsplash.com/photo-1519494140681-f009d7df0e01?auto=format&fit=crop&q=80&w=600"
                                alt="Luxury Clinic Interior"
                                loading="lazy"
                                style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', gridRow: 'span 2', objectFit: 'cover', height: '100%' }}
                            />
                            <img
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600"
                                alt="Treatment Room"
                                loading="lazy"
                                style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', objectFit: 'cover' }}
                            />
                            <img
                                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600"
                                alt="Treatment Detail"
                                loading="lazy"
                                style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>

                <style>{`
          @media (min-width: 768px) {
            .environment-grid { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>
            </section>

            {/* ── Location ── */}
            <section className="section" style={{ backgroundColor: 'var(--color-ivory)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <span className="eyebrow">Find Us</span>
                        <h2>Visit Our Clinic</h2>
                        <p style={{ maxWidth: '480px', margin: '1rem auto 0', fontSize: '1.0625rem' }}>
                            Conveniently located in the heart of Manchester, with excellent transport links and nearby parking.
                        </p>
                    </div>

                    <div
                        style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'start' }}
                        className="location-grid"
                    >
                        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37996.34966601!2d-2.2798254!3d53.483959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                                width="100%"
                                height="350"
                                style={{ border: 0, display: 'block' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lumière Aesthetics Clinic Location"
                            />
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Lumière Aesthetics</h3>
                                <address style={{ fontStyle: 'normal', color: 'var(--color-stone-light)', lineHeight: 1.8 }}>
                                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                                        <MapPin size={15} style={{ marginTop: '4px', flexShrink: 0 }} />
                                        <span>123 Deansgate<br />Manchester, M3 2AW</span>
                                    </div>
                                </address>
                            </div>

                            <div>
                                <h4 style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '0.75rem', fontFamily: 'var(--font-body)' }}>
                                    <Clock size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
                                    Opening Hours
                                </h4>
                                <div style={{ fontSize: '0.9rem', color: 'var(--color-stone-light)', lineHeight: 2 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem' }}><span>Monday – Friday</span><span style={{ fontWeight: 500 }}>9:00 – 19:00</span></div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem' }}><span>Saturday</span><span style={{ fontWeight: 500 }}>10:00 – 16:00</span></div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem' }}><span>Sunday</span><span style={{ fontWeight: 500 }}>Closed</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
          @media (min-width: 768px) {
            .location-grid { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>
            </section>

            {/* ── CTA Banner ── */}
            <section
                style={{
                    backgroundColor: 'var(--color-charcoal)',
                    padding: '5rem 0',
                    textAlign: 'center',
                }}
            >
                <div className="container">
                    <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>Begin Your Aesthetic Journey Today</h2>
                    <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '520px', margin: '0 auto 2.5rem', fontSize: '1.0625rem' }}>
                        Schedule a complimentary, no-obligation consultation. We'll discuss your goals and create a bespoke treatment plan tailored exclusively to you.
                    </p>
                    <Link to="/booking" className="btn btn-gold">
                        Book Your Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
