import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Mail, Phone, Calendar } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
    { to: '/about', label: 'About' },
    { to: '/treatments', label: 'Treatments' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()
    const isHome = location.pathname === '/'

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        // Re-read immediately — needed because window.scrollTo() in ScrollToTop
        // does NOT fire a scroll event, so scrolled state can get stuck.
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [location.pathname])

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
                    display: 'flex',
                    alignItems: 'center',
                    height: scrolled ? '76px' : '110px',
                    transition: 'background-color 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease, height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    backgroundColor: isTransparent ? 'transparent' : 'rgba(250, 248, 245, 0.96)',
                    backdropFilter: isTransparent ? 'none' : 'blur(12px)',
                    boxShadow: !scrolled ? 'none' : '0 1px 0 rgba(26, 22, 20, 0.08)',
                }}
            >
                <div
                    className="w-full px-6 lg:px-12 xl:px-16 mx-auto"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        maxWidth: '1920px'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', alignSelf: 'center', gap: 'clamp(2rem, 5vw, 4rem)' }}>
                        {/* Logo */}
                        <Link
                            to="/"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                color: isTransparent ? '#ffffff' : 'var(--color-espresso)',
                                transition: 'color 0.35s ease, font-size 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                fontSize: scrolled ? '1.75rem' : '2.25rem',
                                fontWeight: 600,
                                letterSpacing: '-0.02em',
                                lineHeight: '1',
                                textDecoration: 'none',
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
                    </div>

                    {/* Right side icons & CTA */}
                    <div className="right-icons-container">

                        <a href="tel:01610000000" className="nav-icon-link" aria-label="Call us">
                            <Phone size={24} strokeWidth={1.5} />
                        </a>

                        <a href="https://wa.me/441610000000" target="_blank" rel="noreferrer" className="nav-icon-link whatsapp-link" aria-label="WhatsApp us">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a5 5 0 0 1 -5 -5z" />
                            </svg>
                        </a>

                        {/* Mobile only Calendar icon */}
                        <Link to="/booking" className="nav-icon-link mobile-only" aria-label="Book appointment">
                            <Calendar size={24} strokeWidth={1.5} />
                        </Link>

                        {/* Desktop only CTA */}
                        <Link
                            to="/booking"
                            className={`nav-cta-btn desktop-only ${scrolled ? 'scrolled-nav-btn' : ''}`}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                backgroundColor: isTransparent ? 'rgba(255,255,255,0.12)' : '#1A1614',
                                border: `1px solid ${isTransparent ? 'rgba(255,255,255,0.4)' : '#1A1614'}`,
                                borderRadius: '9999px',
                                backdropFilter: isTransparent ? 'blur(8px)' : 'none',
                                fontSize: '0.9rem',
                                padding: '0.8rem 1.75rem',
                                color: '#ffffff',
                                fontFamily: 'var(--font-body)',
                                transition: 'all 0.3s ease',
                                textDecoration: 'none',
                                marginLeft: '0.5rem',
                            }}
                            id="nav-book-btn"
                        >
                            <Mail size={18} strokeWidth={1.5} />
                            Speak with our experts
                        </Link>

                        {/* Hamburger menu - visible on both, but styled differently */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={menuOpen}
                            style={{
                                background: 'none',
                                border: 'none',
                                padding: '0',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.75rem',
                                marginLeft: '0.5rem',
                                lineHeight: '1',
                            }}
                            className="hamburger-btn"
                        >
                            <div style={{ color: isTransparent ? '#ffffff' : 'var(--color-charcoal)' }} className="hamburger-icon-wrapper">
                                {menuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={30} strokeWidth={1.5} />}
                            </div>
                            {!menuOpen && (
                                <span
                                    className="desktop-only uppercase text-[0.85rem] tracking-widest"
                                    style={{
                                        fontFamily: 'var(--font-body)',
                                        fontWeight: 400,
                                        color: isTransparent ? '#ffffff' : 'var(--color-charcoal)',
                                        marginTop: '1px'
                                    }}
                                >
                                    Menu
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Premium Mobile/Desktop overlay menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 99,
                            backgroundColor: 'rgba(26, 22, 20, 0.98)',
                            backdropFilter: 'blur(24px)',
                            display: 'flex',
                            flexDirection: 'column',
                            paddingTop: scrolled ? '76px' : '110px',
                        }}
                    >
                        <div className="w-full h-full max-w-[1920px] px-6 lg:px-12 xl:px-16 mx-auto overflow-y-auto custom-scrollbar">
                            <nav className="flex flex-col lg:flex-row flex-1 lg:items-center justify-between gap-12 lg:gap-20 pb-20 mt-10 lg:mt-0 min-h-full">

                                {/* Links Column */}
                                <div className="flex flex-col gap-6 lg:gap-8 justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-auto">
                                    {navLinks.map(({ to, label }, i) => (
                                        <motion.div
                                            key={to}
                                            initial={{ opacity: 0, x: -30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -30 }}
                                            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                            className="w-full"
                                        >
                                            <NavLink
                                                to={to}
                                                end={to === '/'}
                                                onClick={() => setMenuOpen(false)}
                                                style={({ isActive }) => ({
                                                    fontFamily: 'var(--font-heading)',
                                                    fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                                                    fontWeight: 300,
                                                    letterSpacing: '-0.02em',
                                                    lineHeight: 1.1,
                                                    color: isActive ? '#ffffff' : 'rgba(255,255,255,0.4)',
                                                    transition: 'color 0.3s ease, padding-left 0.3s ease',
                                                    display: 'block'
                                                })}
                                                className="hover:text-white lg:hover:pl-6 w-full text-center lg:text-left"
                                            >
                                                {label}
                                            </NavLink>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Info / Contact Column */}
                                <motion.div
                                    className="info-column"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 30 }}
                                    transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    style={{ display: 'flex', flexDirection: 'column', gap: '2rem', flex: 1, justifyContent: 'center' }}
                                >
                                    <div style={{
                                        padding: '2.5rem 2rem',
                                        borderRadius: '1.5rem',
                                        border: '1px solid rgba(212,170,114,0.2)',
                                        backgroundColor: 'rgba(212,170,114,0.06)',
                                        textAlign: 'center',
                                    }}>
                                        <h3 style={{
                                            color: '#ffffff',
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: '1.75rem',
                                            fontWeight: 400,
                                            marginBottom: '1rem',
                                        }}>
                                            Ready to <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>begin?</em>
                                        </h3>
                                        <p style={{
                                            color: 'rgba(255,255,255,0.7)',
                                            fontFamily: 'var(--font-body)',
                                            fontSize: '0.9375rem',
                                            lineHeight: 1.6,
                                            marginBottom: '2rem',
                                        }}>
                                            Schedule your bespoke consultation today and uncover the perfect treatment plan tailored to your natural beauty.
                                        </p>
                                        <Link
                                            to="/booking"
                                            onClick={() => setMenuOpen(false)}
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '100%',
                                                backgroundColor: 'var(--color-gold)',
                                                color: '#ffffff',
                                                borderRadius: '9999px',
                                                padding: '1.125rem',
                                                fontFamily: 'var(--font-body)',
                                                fontSize: '0.8125rem',
                                                fontWeight: 600,
                                                letterSpacing: '0.08em',
                                                textTransform: 'uppercase',
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease',
                                                boxShadow: '0 8px 25px rgba(184,147,90,0.25)',
                                            }}
                                        >
                                            Book Consultation
                                        </Link>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'center' }}>
                                        <a href="mailto:hello@lumiereclinic.co.uk" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', textDecoration: 'none' }}>
                                            hello@lumiereclinic.co.uk
                                        </a>
                                        <a href="tel:01610000000" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', textDecoration: 'none' }}>
                                            0161 000 0000
                                        </a>
                                        <p style={{ marginTop: '1.5rem', color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem', fontFamily: 'var(--font-body)' }}>
                                            © {new Date().getFullYear()} Lumière Aesthetics. All rights reserved.
                                        </p>
                                    </div>
                                </motion.div>

                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        .right-icons-container {
            display: flex;
            align-items: center;
            align-self: center;
            gap: 2.25rem;
        }

        .desktop-only { display: flex; }
        .mobile-only { display: none !important; }
        
        .nav-icon-link {
            color: ${isTransparent ? '#ffffff' : 'var(--color-charcoal)'};
            transition: color 0.3s ease, transform 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .nav-icon-link:hover {
            color: var(--color-gold-dark);
            transform: scale(1.05);
        }
        .whatsapp-link:hover {
            color: #25D366 !important;
        }

        .hamburger-icon-wrapper {
            transition: color 0.3s ease;
        }
        .hamburger-btn:hover .hamburger-icon-wrapper {
            color: var(--color-gold-dark) !important;
        }

        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .desktop-only { display: none !important; }
          .mobile-only { display: flex !important; }
          .right-icons-container { gap: 1.5rem; }
        }
        @media (max-width: 480px) {
          .right-icons-container { gap: 1.25rem; }
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
            box-shadow: 0 0 25px rgba(26, 22, 20, 0.5);
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
