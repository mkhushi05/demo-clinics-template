import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { treatments } from '@/data/treatments'

export default function FeaturedTreatments() {
    const [activeTab, setActiveTab] = useState(0)
    const activeTreatment = treatments[activeTab]

    return (
        <section className="section" style={{ backgroundColor: 'var(--color-cream)', position: 'relative', overflow: 'hidden' }}>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>What We Do</span>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Signature Treatments</h2>
                    <p style={{ maxWidth: '560px', margin: '0 auto', fontSize: '1.0625rem', color: 'var(--color-stone)' }}>
                        Advanced aesthetic procedures designed to restore, enhance, and rejuvenate — delivered with clinical precision and an artistic eye.
                    </p>
                </div>

                {/* Treatment Tabs */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                    {treatments.map((t, idx) => (
                        <button
                            key={t.slug}
                            onClick={() => setActiveTab(idx)}
                            style={{
                                padding: '0.75rem 1.5rem',
                                borderRadius: '30px',
                                border: `1px solid ${activeTab === idx ? 'var(--color-gold)' : 'var(--color-stone-muted)'}`,
                                backgroundColor: activeTab === idx ? 'var(--color-gold)' : 'transparent',
                                color: activeTab === idx ? '#fff' : 'var(--color-stone)',
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                outline: 'none',
                            }}
                            onMouseEnter={e => {
                                if (activeTab !== idx) e.currentTarget.style.borderColor = 'var(--color-gold)'
                            }}
                            onMouseLeave={e => {
                                if (activeTab !== idx) e.currentTarget.style.borderColor = 'var(--color-stone-muted)'
                            }}
                        >
                            {t.shortName}
                        </button>
                    ))}
                </div>

                {/* Active Treatment Display */}
                <div
                    key={activeTreatment.slug}
                    style={{
                        display: 'grid',
                        gap: '3rem',
                        alignItems: 'center',
                        animation: 'fadeIn 0.5s ease forwards',
                    }}
                    className="treatment-showcase-grid"
                >
                    {/* Image Side */}
                    <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', position: 'relative' }}>
                        <div style={{ paddingTop: '120%' }}> {/* Aspect Ratio 5:6 */}
                            <img
                                src={activeTreatment.image}
                                alt={activeTreatment.name}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.7s ease',
                                }}
                            />
                        </div>
                    </div>

                    {/* Content Side */}
                    <div style={{ display: 'flex', flexDirection: 'column', padding: '2rem 0' }}>
                        <h3 style={{ fontSize: '2.25rem', marginBottom: '0.5rem', color: 'var(--color-charcoal)' }}>{activeTreatment.name}</h3>
                        <p style={{ fontSize: '1.25rem', color: 'var(--color-gold)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                            {activeTreatment.tagline}
                        </p>
                        <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--color-stone)', marginBottom: '2rem' }}>
                            {activeTreatment.description}
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '2.5rem' }}>
                            <div>
                                <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-stone-muted)', marginBottom: '0.25rem' }}>Price</span>
                                <span style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-charcoal)' }}>{activeTreatment.price}</span>
                            </div>
                            <div>
                                <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-stone-muted)', marginBottom: '0.25rem' }}>Duration</span>
                                <span style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-charcoal)' }}>{activeTreatment.duration}</span>
                            </div>
                            <div>
                                <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-stone-muted)', marginBottom: '0.25rem' }}>Downtime</span>
                                <span style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-charcoal)' }}>{activeTreatment.downtime}</span>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                            <Link to={`/treatments/${activeTreatment.slug}`} className="btn btn-secondary" style={{ backgroundColor: 'var(--color-white)' }}>
                                Explore Treatment <ArrowRight size={16} />
                            </Link>
                            <Link to="/booking" className="btn btn-gold" style={{ padding: '0.875rem 2rem' }}>
                                Book Consult
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (min-width: 900px) {
          .treatment-showcase-grid {
            grid-template-columns: 1fr 1fr;
            gap: 5rem;
          }
        }
      `}</style>
        </section>
    )
}
