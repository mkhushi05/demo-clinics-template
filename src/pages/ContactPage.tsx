import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import PageHeader from '@/components/ui/PageHeader'

export default function ContactPage() {
    return (
        <>
            <SEOHead
                title="Contact Us"
                description="Get in touch with Lumière Aesthetics Clinic in Manchester. Call, email, or visit us at 123 Deansgate, Manchester M3 2AW."
                canonical="/contact"
            />

            <PageHeader
                eyebrow="Get In Touch"
                title="Contact Us"
                subtitle="We'd love to hear from you. Reach out by phone, email, or visit us at the clinic."
            />

            <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="contact-grid">
                        <div>
                            <h2 style={{ marginBottom: '1.5rem' }}>Lumière Aesthetics Clinic</h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--color-stone)' }}>
                                    <MapPin size={18} style={{ color: 'var(--color-gold)', marginTop: '2px', flexShrink: 0 }} />
                                    <span>123 Deansgate<br />Manchester, M3 2AW</span>
                                </a>
                                <a href="tel:01610000000" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--color-stone)' }}>
                                    <Phone size={18} style={{ color: 'var(--color-gold)' }} />
                                    0161 000 0000
                                </a>
                                <a href="mailto:hello@lumiereclinic.co.uk" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--color-stone)' }}>
                                    <Mail size={18} style={{ color: 'var(--color-gold)' }} />
                                    hello@lumiereclinic.co.uk
                                </a>
                            </div>

                            <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>
                                <Clock size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem', color: 'var(--color-gold)' }} />
                                Opening Hours
                            </h3>
                            <div style={{ fontSize: '0.9375rem', color: 'var(--color-stone-light)', lineHeight: 2 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '300px' }}><span>Monday – Friday</span><span style={{ fontWeight: 500 }}>9:00 – 19:00</span></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '300px' }}><span>Saturday</span><span style={{ fontWeight: 500 }}>10:00 – 16:00</span></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '300px' }}><span>Sunday</span><span style={{ fontWeight: 500 }}>Closed</span></div>
                            </div>

                            <div style={{ marginTop: '2rem', padding: '1.25rem', backgroundColor: 'var(--color-ivory)', borderRadius: 'var(--radius-md)' }}>
                                <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Getting Here</h4>
                                <p style={{ fontSize: '0.8125rem', margin: 0 }}>
                                    Secure underground parking is available at NCP Deansgate. The clinic is a 10-minute walk from Manchester Piccadilly station and easily accessible by Metrolink tram.
                                </p>
                            </div>
                        </div>

                        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37996.34966601!2d-2.2798254!3d53.483959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                                width="100%"
                                height="400"
                                style={{ border: 0, display: 'block' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Clinic Location"
                            />
                        </div>
                    </div>
                </div>
                <style>{`
          @media (min-width: 768px) { .contact-grid { grid-template-columns: 1fr 1fr !important; } }
        `}</style>
            </section>
        </>
    )
}
