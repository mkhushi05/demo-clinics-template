import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Mail } from 'lucide-react'

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/treatments', label: 'Treatments' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/faqs', label: 'FAQs' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()
    const isHome = location.pathname === '/'

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => setMenuOpen(false), [location.pathname])

    // Prevent body scroll when menu open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
    }, [menuOpen])

    const isTransparent = isHome && !scrolled

    return (
        <>
            <header
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    transition: 'background-color 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease',
                    backgroundColor: isTransparent ? 'transparent' : 'rgba(250, 248, 245, 0.96)',
                    backdropFilter: isTransparent ? 'none' : 'blur(12px)',
                    boxShadow: isTransparent ? 'none' : '0 1px 0 rgba(26, 22, 20, 0.08)',
                }}
            >
                <div
                    className="container"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        height: scrolled ? '76px' : '110px',
                        transition: 'height 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                >
                    {/* Logo */}
                    <Link
                        to="/"
                        style={{
                            color: isTransparent ? '#ffffff' : 'var(--color-espresso)',
                            transition: 'color 0.35s ease, font-size 0.4s ease',
                            fontSize: scrolled ? '1.5rem' : '1.75rem',
                            fontWeight: 500,
                            letterSpacing: '0.02em',
                        }}
                    >
                        lumière
                    </Link>

                    {/* Desktop nav */}
                    <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
                        {navLinks.map(({ to, label }) => (
                            <NavLink
                                key={to}
                                to={to}
                                end={to === '/'}
                                style={({ isActive }) => ({
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '0.9rem',
                                    fontWeight: 400,
                                    letterSpacing: '0.03em',
                                    color: isTransparent
                                        ? isActive ? '#ffffff' : 'rgba(255,255,255,0.75)'
                                        : isActive ? 'var(--color-espresso)' : 'var(--color-taupe)',
                                    borderBottom: isActive ? `1.5px solid ${isTransparent ? '#ffffff' : 'var(--color-blush)'}` : '1.5px solid transparent',
                                    paddingBottom: '2px',
                                    transition: 'color 0.25s ease, border-color 0.25s ease',
                                })}
                            >
                                {label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* CTA + hamburger */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Link
                            to="/booking"
                            className={`nav-cta-btn ${scrolled ? 'scrolled-nav-btn' : ''}`}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                backgroundColor: isTransparent ? 'rgba(255,255,255,0.15)' : '#2A2522',
                                border: `1px solid ${isTransparent ? 'rgba(255,255,255,0.6)' : '#2A2522'}`,
                                borderRadius: '9999px',
                                backdropFilter: isTransparent ? 'blur(4px)' : 'none',
                                fontSize: '0.85rem',
                                padding: '0.75rem 1.5rem',
                                color: '#ffffff',
                                fontFamily: 'var(--font-body)',
                                transition: 'all 0.2s ease',
                                textDecoration: 'none',
                            }}
                            id="nav-book-btn"
                        >
                            <Mail size={16} />
                            Speak with our experts
                        </Link>

                        {/* Hamburger — mobile only */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={menuOpen}
                            style={{
                                display: 'none',
                                background: 'none',
                                border: 'none',
                                padding: '0.25rem',
                                cursor: 'pointer',
                                color: isTransparent ? '#ffffff' : 'var(--color-charcoal)',
                            }}
                            className="hamburger-btn"
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile overlay menu */}
            {menuOpen && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 99,
                        backgroundColor: 'var(--color-porcelain)',
                        display: 'flex',
                        flexDirection: 'column',
                        paddingTop: '72px',
                    }}
                >
                    <nav style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        {navLinks.map(({ to, label }) => (
                            <NavLink
                                key={to}
                                to={to}
                                end={to === '/'}
                                style={({ isActive }) => ({
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '2rem',
                                    fontWeight: 300,
                                    color: isActive ? 'var(--color-espresso)' : 'var(--color-taupe)',
                                    padding: '0.75rem 0',
                                    borderBottom: '1px solid var(--color-linen)',
                                })}
                            >
                                {label}
                            </NavLink>
                        ))}
                        <Link
                            to="/booking"
                            className="btn btn-primary"
                            style={{ marginTop: '2rem', justifyContent: 'center', width: '100%' }}
                        >
                            Book Consultation
                        </Link>
                    </nav>

                    <div style={{ padding: '0 1.5rem 2rem', marginTop: 'auto', fontSize: '0.8125rem', color: 'var(--color-stone-muted)' }}>
                        <p>hello@lumiereclinic.co.uk</p>
                        <p>0161 000 0000</p>
                    </div>
                </div>
            )}

            <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .nav-cta-btn { display: none !important; }
        }
        
        .nav-cta-btn {
            position: relative;
            overflow: hidden;
        }
        .nav-cta-btn::after {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            border-radius: 9999px;
            box-shadow: 0 0 25px rgba(255, 255, 255, 0.3);
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .scrolled-nav-btn::after {
            box-shadow: 0 0 25px rgba(42, 37, 34, 0.5);
        }
        .nav-cta-btn:hover::after {
            opacity: 1;
        }
        .nav-cta-btn:hover {
            transform: translateY(-2px) scale(1.02);
            color: #ffffff !important;
        }
      `}</style>
        </>
    )
}
