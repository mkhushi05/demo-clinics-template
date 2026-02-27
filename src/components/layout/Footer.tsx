import { Link } from 'react-router-dom'
import { Instagram, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer
            style={{
                backgroundColor: 'var(--color-charcoal)',
                color: 'rgba(255, 255, 255, 0.7)',
                paddingTop: '4rem',
                paddingBottom: '2rem',
            }}
        >
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
                            }}
                            onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                        >
                            <Instagram size={16} />
                            @lumiereclinic
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
