import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Sparkles } from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import PageHeader from '@/components/ui/PageHeader'
import { treatments } from '@/data/treatments'

export default function TreatmentsPage() {
    return (
        <>
            <SEOHead
                title="Our Treatments"
                description="Explore our range of medically-led aesthetic treatments: lip fillers, anti-wrinkle injections, and Profhilo skin boosters. All delivered by qualified nurse prescriber Elena Davies."
                canonical="/treatments"
            />

            <PageHeader
                eyebrow="Our Treatments"
                title="Advanced Aesthetic Procedures"
                subtitle="Every treatment begins with a complimentary consultation. We take the time to understand your goals and create a bespoke plan."
            />

            <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {treatments.map((t, i) => (
                            <div
                                key={t.slug}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr',
                                    gap: '2.5rem',
                                    alignItems: 'center',
                                    backgroundColor: 'var(--color-white)',
                                    borderRadius: 'var(--radius-lg)',
                                    overflow: 'hidden',
                                    boxShadow: 'var(--shadow-card)',
                                }}
                                className="treatment-row"
                            >
                                <div style={{ overflow: 'hidden', height: '320px', order: i % 2 === 0 ? 0 : 1 }} className="treatment-img">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        loading="lazy"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div style={{ padding: '2rem' }}>
                                    <span className="eyebrow">{t.tagline}</span>
                                    <h2 style={{ marginBottom: '1rem', fontSize: '2rem' }}>{t.name}</h2>
                                    <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>{t.description}</p>

                                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', color: 'var(--color-stone)' }}>
                                            <Sparkles size={14} style={{ color: 'var(--color-gold)' }} />
                                            {t.price}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', color: 'var(--color-stone)' }}>
                                            <Clock size={14} style={{ color: 'var(--color-gold)' }} />
                                            {t.duration}
                                        </div>
                                    </div>

                                    <Link to={`/treatments/${t.slug}`} className="btn btn-primary" style={{ fontSize: '0.75rem' }}>
                                        Learn More <ArrowRight size={13} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <style>{`
          @media (min-width: 768px) {
            .treatment-row { grid-template-columns: 1fr 1fr !important; }
            .treatment-img { height: 100% !important; min-height: 380px; }
          }
        `}</style>
            </section>
        </>
    )
}
