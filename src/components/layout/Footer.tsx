import { Link } from 'react-router-dom'
import { Instagram, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer
            style={{
                backgroundColor: 'var(--color-espresso)',
                color: 'rgba(255, 255, 255, 0.7)',
                paddingTop: '5rem',
                paddingBottom: '3rem',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Soft decorative glow */}
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '1200px', height: '1px', background: 'linear-gradient(to right, transparent, rgba(217, 140, 140, 0.2), transparent)' }} />
            <div className="container">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '3rem',
                        paddingBottom: '3rem',
                        borderBottom: '1px solid rgba(255,255,255,0.1)',
                    }}
                >
                    {/* Brand */}
                    <div>
                        <Link
                            to="/"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1.75rem',
                                fontWeight: 400,
                                letterSpacing: '0.12em',
                                color: '#ffffff',
                                display: 'block',
                                marginBottom: '1rem',
                            }}
                        >
                            LUMIÈRE
                        </Link>
                        <p style={{ fontSize: '0.875rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', marginBottom: '1.5rem' }}>
                            Manchester's premier medically-led aesthetics clinic. Natural results delivered with clinical precision.
                        </p>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontSize: '0.8125rem',
                                color: 'rgba(255,255,255,0.55)',
                                transition: 'color 0.25s ease',
                                marginBottom: '1.5rem',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                        >
                            <Instagram size={16} />
                            @lumiereclinic
                        </a>

                        <a
                            href="https://wa.me/441610000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                width: 'fit-content',
                                backgroundColor: '#25D366',
                                color: '#ffffff',
                                padding: '0.75rem 1.25rem',
                                borderRadius: '1rem',
                                fontSize: '0.8125rem',
                                fontWeight: 600,
                                textDecoration: 'none',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                boxShadow: '0 4px 15px rgba(37, 211, 102, 0.2)',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.3)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.2)';
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.412c-2.135 0-4.215-.575-6.04-1.662l-.433-.252-4.482 1.176 1.2-4.366-.277-.44c-1.196-1.896-1.828-4.1-1.828-6.381 0-6.619 5.381-12 12-12s12 5.381 12 12-5.381 12-12 12m0-24c-7.732 0-14 6.268-14 14 0 2.441.624 4.733 1.72 6.74l-1.832 6.66 6.814-1.788c1.93 1.045 4.12 1.597 6.4 1.597 7.732 0 14-6.268 14-14 0-7.732-6.268-14-14-14" />
                            </svg>
                            WhatsApp Us
                        </a>
                    </div>

                    {/* Treatments */}
                    <div>
                        <h4
                            style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.6875rem',
                                fontWeight: 600,
                                letterSpacing: '0.16em',
                                textTransform: 'uppercase',
                                color: 'var(--color-gold)',
                                marginBottom: '1.25rem',
                            }}
                        >
                            Treatments
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                            {[
                                { to: '/treatments/lip-fillers', label: 'Lip Fillers' },
                                { to: '/treatments/anti-wrinkle', label: 'Anti-Wrinkle Injections' },
                                { to: '/treatments/skin-boosters', label: 'Skin Boosters' },
                                { to: '/pricing', label: 'View Pricing' },
                            ].map(({ to, label }) => (
                                <Link
                                    key={to}
                                    to={to}
                                    style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', transition: 'color 0.25s ease' }}
                                    onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Clinic */}
                    <div>
                        <h4
                            style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.6875rem',
                                fontWeight: 600,
                                letterSpacing: '0.16em',
                                textTransform: 'uppercase',
                                color: 'var(--color-gold)',
                                marginBottom: '1.25rem',
                            }}
                        >
                            Clinic
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                            {[
                                { to: '/about', label: 'About Us' },
                                { to: '/gallery', label: 'Before & After' },
                                { to: '/faqs', label: 'FAQs' },
                                { to: '/contact', label: 'Contact' },
                            ].map(({ to, label }) => (
                                <Link
                                    key={to}
                                    to={to}
                                    style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', transition: 'color 0.25s ease' }}
                                    onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4
                            style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.6875rem',
                                fontWeight: 600,
                                letterSpacing: '0.16em',
                                textTransform: 'uppercase',
                                color: 'var(--color-gold)',
                                marginBottom: '1.25rem',
                            }}
                        >
                            Get In Touch
                        </h4>
                        <address style={{ fontStyle: 'normal', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start', fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', transition: 'color 0.25s ease' }}
                                onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                            >
                                <MapPin size={15} style={{ flexShrink: 0, marginTop: '2px' }} />
                                <span>123 Deansgate<br />Manchester, M3 2AW</span>
                            </a>
                            <a
                                href="tel:01610000000"
                                style={{ display: 'flex', gap: '0.625rem', alignItems: 'center', fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', transition: 'color 0.25s ease' }}
                                onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                            >
                                <Phone size={15} />
                                0161 000 0000
                            </a>
                            <a
                                href="mailto:hello@lumiereclinic.co.uk"
                                style={{ display: 'flex', gap: '0.625rem', alignItems: 'center', fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', transition: 'color 0.25s ease' }}
                                onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                            >
                                <Mail size={15} />
                                hello@lumiereclinic.co.uk
                            </a>
                        </address>

                        <div style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
                            <strong style={{ color: 'rgba(255,255,255,0.6)' }}>Opening Hours</strong><br />
                            Mon–Fri: 9:00–19:00<br />
                            Sat: 10:00–16:00<br />
                            Sun: Closed
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        paddingTop: '1.5rem',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '1rem',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '0.8rem',
                        color: 'rgba(255,255,255,0.35)',
                    }}
                >
                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.35)' }}>
                        © {year} Lumière Aesthetics Clinic. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                        {[
                            { to: '/legal/privacy', label: 'Privacy Policy' },
                            { to: '/legal/terms', label: 'Terms & Conditions' },
                            { to: '/legal/disclaimer', label: 'Medical Disclaimer' },
                        ].map(({ to, label }) => (
                            <Link
                                key={to}
                                to={to}
                                style={{ color: 'rgba(255,255,255,0.35)', transition: 'color 0.25s ease' }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
