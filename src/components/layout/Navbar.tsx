import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Mail, Phone, Calendar } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
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
                    boxShadow: !scrolled ? 'none' : '0 1px 0 rgba(26, 22, 20, 0.08)',
                }}
            >
                <div
                    className="w-full px-6 lg:px-12 xl:px-16 mx-auto"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        height: scrolled ? '76px' : '110px',
                        transition: 'height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        maxWidth: '1920px'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(2rem, 5vw, 4rem)' }}>
                        {/* Logo */}
                        <Link
                            to="/"
                            style={{
                                color: isTransparent ? '#ffffff' : 'var(--color-espresso)',
                                transition: 'color 0.35s ease, font-size 0.4s ease',
                                fontSize: scrolled ? '1.75rem' : '2.25rem',
                                fontWeight: 600,
                                letterSpacing: '-0.02em',
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

                        <a href="https://wa.me/441610000000" target="_blank" rel="noreferrer" className="nav-icon-link" aria-label="WhatsApp us">
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
                                gap: '0.75rem',
                                marginLeft: '0.5rem',
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
                                <div className="flex flex-col gap-6 lg:gap-8 justify-center">
                                    {navLinks.map(({ to, label }, i) => (
                                        <motion.div
                                            key={to}
                                            initial={{ opacity: 0, x: -30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -30 }}
                                            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
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
                                                className="hover:text-white hover:pl-4 lg:hover:pl-6"
                                            >
                                                {label}
                                            </NavLink>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Info / Contact Column */}
                                <motion.div
                                    className="flex flex-col gap-8 lg:w-[450px]"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 30 }}
                                    transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div className="p-8 lg:p-12 rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-md">
                                        <h3 className="text-white font-medium text-2xl lg:text-3xl mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                                            Ready to begin?
                                        </h3>
                                        <p className="text-white/60 text-sm lg:text-base mb-10 leading-relaxed font-light" style={{ fontFamily: 'var(--font-body)' }}>
                                            Schedule your bespoke consultation today and uncover the perfect treatment plan tailored to your natural beauty.
                                        </p>
                                        <Link
                                            to="/booking"
                                            className="inline-flex items-center justify-center w-full bg-white text-[var(--color-espresso)] hover:bg-[var(--color-gold-dark)] hover:text-white transition-colors duration-300 rounded-full py-4 px-8 text-[0.85rem] uppercase tracking-widest font-medium"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            Book Consultation
                                        </Link>
                                    </div>

                                    <div className="flex flex-col gap-3 text-white/50 text-sm tracking-wide px-4" style={{ fontFamily: 'var(--font-body)' }}>
                                        <a href="mailto:hello@lumiereclinic.co.uk" className="hover:text-[var(--color-gold-dark)] transition-colors inline-block w-fit">hello@lumiereclinic.co.uk</a>
                                        <a href="tel:01610000000" className="hover:text-[var(--color-gold-dark)] transition-colors inline-block w-fit">0161 000 0000</a>
                                        <p className="mt-8 opacity-40 text-xs">© {new Date().getFullYear()} Lumière Aesthetics.<br />All rights reserved.</p>
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
