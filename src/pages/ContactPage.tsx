import { useState } from 'react'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import FadeIn from '@/components/animations/FadeIn'

export default function ContactPage() {
    const [focused, setFocused] = useState<string | null>(null)

    return (
        <div style={{ backgroundColor: 'var(--color-cream)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <SEOHead
                title="Contact Us | Lumière Aesthetics"
                description="Get in touch with Lumière Aesthetics Clinic in Manchester. Schedule your bespoke consultation today."
                canonical="/contact"
            />

            {/* ── Editorial Split Layout ── */}
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }} className="contact-main">

                {/* Left Side — Aesthetic Information Pane */}
                <div
                    className="contact-left"
                    style={{
                        backgroundColor: 'var(--color-charcoal)',
                        color: '#ffffff',
                        padding: '9rem 2rem 5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {/* Subtle warm glow background artifact */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(ellipse at top left, rgba(184,147,90,0.12) 0%, transparent 60%)', pointerEvents: 'none' }} />

                    <div style={{ maxWidth: '500px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
                        <FadeIn>
                            <span style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1.25rem' }}>
                                Inquiries
                            </span>
                            <h1 style={{ color: '#ffffff', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                                Let's Discuss Your <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>Vision.</em>
                            </h1>
                            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.0625rem', lineHeight: 1.6, marginBottom: '4rem' }}>
                                Whether you're ready to book or simply exploring your options, our clinic team is here to provide guidance tailored to your natural beauty.
                            </p>
                        </FadeIn>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                            <FadeIn delay={100}>
                                <div>
                                    <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1rem' }}>
                                        Visit the Clinic
                                    </h3>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                        <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(255,255,255,0.1)' }}>
                                            <MapPin size={14} style={{ color: 'var(--color-gold-light)' }} />
                                        </div>
                                        <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                                            123 Deansgate<br />
                                            Manchester, M3 2AW
                                        </p>
                                    </div>
                                    <p style={{ marginTop: '0.75rem', marginLeft: '3rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>
                                        *Secure underground parking available at NCP Deansgate. A 10-minute walk from Piccadilly station.
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={200}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '2rem' }}>
                                    {/* Contact Methods */}
                                    <div>
                                        <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1rem' }}>
                                            Get in Touch
                                        </h3>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                            <a href="tel:01610000000" style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', transition: 'color 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--color-gold-light)'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>
                                                <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                                                    <Phone size={14} />
                                                </div>
                                                0161 000 0000
                                            </a>
                                            <a href="mailto:hello@lumiereclinic.co.uk" style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', transition: 'color 0.2s ease', wordBreak: 'break-word' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--color-gold-light)'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>
                                                <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(255,255,255,0.1)' }}>
                                                    <Mail size={14} />
                                                </div>
                                                hello@lumiereclinic.co.uk
                                            </a>
                                        </div>
                                    </div>

                                    {/* Hours */}
                                    <div>
                                        <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1rem' }}>
                                            Hours
                                        </h3>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span style={{ color: 'rgba(255,255,255,0.5)' }}>Mon–Fri</span>
                                                <span>9am – 7pm</span>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span style={{ color: 'rgba(255,255,255,0.5)' }}>Saturday</span>
                                                <span>10am – 4pm</span>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span style={{ color: 'rgba(255,255,255,0.5)' }}>Sunday</span>
                                                <span style={{ color: 'var(--color-gold-light)' }}>Closed</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>


                {/* Right Side — Seamless Contact Form & Map */}
                <div
                    className="contact-right"
                    style={{
                        padding: '10rem 2rem 5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <div style={{ maxWidth: '480px', width: '100%', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        <FadeIn delay={150}>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                                <div style={{ position: 'relative' }}>
                                    <label htmlFor="name" style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', color: focused === 'name' ? 'var(--color-gold)' : 'var(--color-stone-muted)', textTransform: 'uppercase', marginBottom: '0.25rem', transition: 'color 0.2s ease' }}>
                                        Full Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Eleanor Davies"
                                        onFocus={() => setFocused('name')}
                                        onBlur={() => setFocused(null)}
                                        style={{
                                            width: '100%',
                                            background: 'transparent',
                                            border: 'none',
                                            borderBottom: `1.5px solid ${focused === 'name' ? 'var(--color-gold)' : 'rgba(26,22,20,0.15)'}`,
                                            padding: '0.5rem 0 0.4rem',
                                            fontSize: '1rem',
                                            color: 'var(--color-charcoal)',
                                            outline: 'none',
                                            transition: 'border-color 0.3s ease',
                                        }}
                                    />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <div style={{ position: 'relative' }}>
                                        <label htmlFor="email" style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', color: focused === 'email' ? 'var(--color-gold)' : 'var(--color-stone-muted)', textTransform: 'uppercase', marginBottom: '0.25rem', transition: 'color 0.2s ease' }}>
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="hello@example.com"
                                            onFocus={() => setFocused('email')}
                                            onBlur={() => setFocused(null)}
                                            style={{
                                                width: '100%',
                                                background: 'transparent',
                                                border: 'none',
                                                borderBottom: `1.5px solid ${focused === 'email' ? 'var(--color-gold)' : 'rgba(26,22,20,0.15)'}`,
                                                padding: '0.5rem 0 0.4rem',
                                                fontSize: '1rem',
                                                color: 'var(--color-charcoal)',
                                                outline: 'none',
                                                transition: 'border-color 0.3s ease',
                                            }}
                                        />
                                    </div>
                                    <div style={{ position: 'relative' }}>
                                        <label htmlFor="phone" style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', color: focused === 'phone' ? 'var(--color-gold)' : 'var(--color-stone-muted)', textTransform: 'uppercase', marginBottom: '0.25rem', transition: 'color 0.2s ease' }}>
                                            Phone Number
                                        </label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            placeholder="+44 7700 900000"
                                            onFocus={() => setFocused('phone')}
                                            onBlur={() => setFocused(null)}
                                            style={{
                                                width: '100%',
                                                background: 'transparent',
                                                border: 'none',
                                                borderBottom: `1.5px solid ${focused === 'phone' ? 'var(--color-gold)' : 'rgba(26,22,20,0.15)'}`,
                                                padding: '0.5rem 0 0.4rem',
                                                fontSize: '1rem',
                                                color: 'var(--color-charcoal)',
                                                outline: 'none',
                                                transition: 'border-color 0.3s ease',
                                            }}
                                        />
                                    </div>
                                </div>

                                <div style={{ position: 'relative', marginTop: '1rem' }}>
                                    <label htmlFor="message" style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', color: focused === 'message' ? 'var(--color-gold)' : 'var(--color-stone-muted)', textTransform: 'uppercase', marginBottom: '0.25rem', transition: 'color 0.2s ease' }}>
                                        How can we help?
                                    </label>
                                    <textarea
                                        id="message"
                                        placeholder="I'm interested in discussing options for..."
                                        onFocus={() => setFocused('message')}
                                        onBlur={() => setFocused(null)}
                                        rows={1}
                                        style={{
                                            width: '100%',
                                            background: 'transparent',
                                            border: 'none',
                                            borderBottom: `1.5px solid ${focused === 'message' ? 'var(--color-gold)' : 'rgba(26,22,20,0.15)'}`,
                                            padding: '0.5rem 0 0.4rem',
                                            fontSize: '1rem',
                                            color: 'var(--color-charcoal)',
                                            outline: 'none',
                                            resize: 'vertical',
                                            height: '41px',
                                            minHeight: '41px',
                                            maxHeight: '250px',
                                            transition: 'border-color 0.3s ease',
                                        }}
                                    />
                                </div>

                                <button
                                    type="button"
                                    className="btn btn-gold"
                                    style={{
                                        marginTop: '1.5rem',
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: '1.25rem',
                                        gap: '0.5rem',
                                        boxShadow: '0 8px 25px rgba(184,147,90,0.2)',
                                    }}
                                >
                                    Send Inquiry <ArrowRight size={16} />
                                </button>
                                <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--color-stone-light)', margin: 0 }}>
                                    We typically respond within 24 hours.
                                </p>
                            </form>
                        </FadeIn>

                        {/* Map Treatment */}
                        <FadeIn delay={300}>
                            <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 10px 40px rgba(26,22,20,0.06)', border: '4px solid #ffffff', height: '240px', position: 'relative' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37996.34966601!2d-2.2798254!3d53.483959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, display: 'block', filter: 'contrast(0.9) grayscale(0.2)' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Clinic Location"
                                />
                            </div>
                        </FadeIn>
                    </div>
                </div>

                <style>{`
                    @media (min-width: 1024px) {
                        .contact-main { flex-direction: row !important; }
                        .contact-left { width: 45%; padding: clamp(10rem, 15vh, 12rem) 4rem 5rem !important; }
                        .contact-right { width: 55%; padding: clamp(10rem, 15vh, 12rem) 4rem 5rem !important; justify-content: center; }
                    }
                    @media (max-width: 1023px) {
                        .contact-left { padding-top: 8rem !important; }
                        .contact-right { padding-top: 5rem !important; }
                    }
                `}</style>
            </main>
        </div>
    )
}
