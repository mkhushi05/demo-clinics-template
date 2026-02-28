import { MapPin, Clock, Phone, ArrowRight } from 'lucide-react'

export default function EnhancedLocation() {
    return (
        <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
            <div className="container">
                <div
                    className="location-enhanced-grid"
                    style={{
                        display: 'grid',
                        gap: '4rem',
                        alignItems: 'center',
                        gridTemplateColumns: '1fr',
                    }}
                >
                    {/* Content Side */}
                    <div>
                        <span className="eyebrow">Visit Us</span>
                        <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>An Oasis in the Heart of Manchester</h2>
                        <p style={{ fontSize: '1.125rem', color: 'var(--color-stone)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '520px' }}>
                            Step out of the city's rush and into a sanctuary of calm. Our clinic is designed to provide luxury, privacy, and impeccable clinical standards from the moment you arrive.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="contact-details-grid">
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', flexShrink: 0 }}>
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-charcoal)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Location</h4>
                                    <address style={{ fontStyle: 'normal', color: 'var(--color-stone)', lineHeight: 1.7, fontSize: '0.9375rem' }}>
                                        Lumière Aesthetics Clinic<br />
                                        123 Deansgate<br />
                                        Manchester, M3 2AW
                                    </address>
                                    <a href="#map" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem', color: 'var(--color-gold)', marginTop: '0.5rem', fontWeight: 500, borderBottom: '1px solid currentColor', paddingBottom: '0.125rem' }}>
                                        Get Directions <ArrowRight size={14} />
                                    </a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', flexShrink: 0 }}>
                                    <Clock size={18} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-charcoal)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Hours</h4>
                                    <div style={{ fontSize: '0.9375rem', color: 'var(--color-stone)', lineHeight: 1.7 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem' }}><span>Mon – Fri</span><span style={{ fontWeight: 500, color: 'var(--color-charcoal)' }}>9:00 – 19:00</span></div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem' }}><span>Saturday</span><span style={{ fontWeight: 500, color: 'var(--color-charcoal)' }}>10:00 – 16:00</span></div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem' }}><span>Sunday</span><span style={{ fontWeight: 500, color: 'var(--color-charcoal)' }}>Closed</span></div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', flexShrink: 0 }}>
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-charcoal)', marginBottom: '0.25rem', fontFamily: 'var(--font-heading)' }}>Contact</h4>
                                    <div style={{ fontSize: '0.9375rem', color: 'var(--color-stone)', lineHeight: 1.7 }}>
                                        <a href="tel:01611234567" style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>0161 123 4567</a>
                                        <a href="mailto:hello@lumiereclinic.co.uk" style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>hello@lumiereclinic.co.uk</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image / Map Side */}
                    <div style={{ position: 'relative' }}>
                        {/* Decorative Frame */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '-20px',
                                right: '-20px',
                                bottom: '20px',
                                left: '20px',
                                border: '1px solid var(--color-gold-light)',
                                borderRadius: 'var(--radius-lg)',
                                zIndex: 0,
                                display: 'none',
                            }}
                            className="location-frame"
                        />
                        <div
                            style={{
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                boxShadow: 'var(--shadow-xl)',
                                position: 'relative',
                                zIndex: 1,
                                backgroundColor: 'var(--color-ivory)',
                            }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1519494140681-f009d7df0e01?auto=format&fit=crop&q=80&w=800"
                                alt="Clinic Exterior / Reception"
                                style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
                            />
                            {/* Embedded Map overlaying bottom half */}
                            <iframe
                                id="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75992.68411033095!2d-2.3164998375624794!3d53.483959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                                style={{ width: '100%', height: '250px', border: 0, display: 'block' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lumière Aesthetics Clinic Location Map"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (min-width: 768px) {
                    .contact-details-grid {
                        grid-template-columns: 1fr 1fr;
                    }
                }
                @media (min-width: 1024px) {
                    .location-enhanced-grid {
                        grid-template-columns: 1fr 1fr !important;
                        gap: 5rem !important;
                    }
                    .contact-details-grid {
                        grid-template-columns: 1fr;
                    }
                    .location-frame {
                        display: block !important;
                    }
                }
            `}</style>
        </section>
    )
}
