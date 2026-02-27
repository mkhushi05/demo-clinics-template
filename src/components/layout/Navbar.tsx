import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

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
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
                    {/* Logo */}
                    <Link
                        to="/"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.5rem',
                            fontWeight: 400,
                            letterSpacing: '0.12em',
                            color: isTransparent ? '#ffffff' : 'var(--color-charcoal)',
                            transition: 'color 0.35s ease',
                        }}
                    >
                        LUMIÈRE
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
                                    fontSize: '0.8125rem',
                                    fontWeight: 500,
                                    letterSpacing: '0.06em',
                                    textTransform: 'uppercase' as const,
                                    color: isTransparent
                                        ? isActive ? '#ffffff' : 'rgba(255,255,255,0.75)'
                                        : isActive ? 'var(--color-charcoal)' : 'var(--color-stone-light)',
                                    borderBottom: isActive ? `1.5px solid ${isTransparent ? '#ffffff' : 'var(--color-gold)'}` : '1.5px solid transparent',
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
                            className="btn btn-primary"
                            style={{
                                backgroundColor: isTransparent ? 'rgba(255,255,255,0.15)' : 'var(--color-charcoal)',
                                borderColor: isTransparent ? 'rgba(255,255,255,0.6)' : 'var(--color-charcoal)',
                                backdropFilter: isTransparent ? 'blur(4px)' : 'none',
                                fontSize: '0.75rem',
                                padding: '0.625rem 1.25rem',
                            }}
                            id="nav-book-btn"
                        >
                            Book Consultation
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
                        backgroundColor: 'var(--color-cream)',
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
                                    color: isActive ? 'var(--color-charcoal)' : 'var(--color-stone-muted)',
                                    padding: '0.75rem 0',
                                    borderBottom: '1px solid var(--color-cream-dark)',
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
        }
      `}</style>
        </>
    )
}
