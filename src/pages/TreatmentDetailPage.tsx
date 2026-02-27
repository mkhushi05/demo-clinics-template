import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowRight, Clock, Activity, CheckCircle } from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import { getTreatmentBySlug } from '@/data/treatments'
import { useState } from 'react'

export default function TreatmentDetailPage() {
    const { slug } = useParams<{ slug: string }>()
    const treatment = slug ? getTreatmentBySlug(slug) : undefined

    if (!treatment) return <Navigate to="/treatments" replace />

    return (
        <>
            <SEOHead
                title={treatment.name}
                description={treatment.description}
                canonical={`/treatments/${treatment.slug}`}
            />

            {/* Hero */}
            <section
                style={{
                    position: 'relative',
                    paddingTop: '8rem',
                    paddingBottom: '4rem',
                    backgroundColor: 'var(--color-charcoal)',
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url(${treatment.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.25,
                    }}
                />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <span className="eyebrow" style={{ color: 'var(--color-gold-light)' }}>{treatment.tagline}</span>
                    <h1 style={{ color: '#ffffff', marginBottom: '1rem' }}>{treatment.name}</h1>
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                            <Activity size={14} style={{ color: 'var(--color-gold-light)' }} />{treatment.price}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                            <Clock size={14} style={{ color: 'var(--color-gold-light)' }} />{treatment.duration}
                        </span>
                    </div>
                    <Link to="/booking" className="btn btn-gold">Book This Treatment</Link>
                </div>
            </section>

            {/* Content */}
            <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ whiteSpace: 'pre-line', lineHeight: 1.85, fontSize: '1.0125rem', color: 'var(--color-stone-light)' }}>
                        {treatment.longDescription}
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="section" style={{ backgroundColor: 'var(--color-ivory)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>What's Included</h2>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {treatment.highlights.map((h) => (
                            <li key={h} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '1rem', color: 'var(--color-stone)' }}>
                                <CheckCircle size={18} style={{ color: 'var(--color-gold)', marginTop: '3px', flexShrink: 0 }} />
                                {h}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Process */}
            <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ marginBottom: '2rem' }}>Your Journey</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {treatment.process.map((step, i) => (
                            <div key={step.title} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                                <div
                                    style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '50%',
                                        backgroundColor: 'var(--color-gold)',
                                        color: '#ffffff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 600,
                                        fontSize: '0.875rem',
                                        flexShrink: 0,
                                    }}
                                >
                                    {i + 1}
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '0.25rem', fontFamily: 'var(--font-body)', fontWeight: 600 }}>{step.title}</h4>
                                    <p style={{ fontSize: '0.9375rem', margin: 0 }}>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section" style={{ backgroundColor: 'var(--color-ivory)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ marginBottom: '2rem' }}>Common Questions</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                        {treatment.faqs.map((faq) => (
                            <AccordionItem key={faq.q} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ backgroundColor: 'var(--color-charcoal)', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>Ready to Get Started?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '480px', margin: '0 auto 2rem' }}>
                        Book a complimentary consultation to discuss {treatment.name.toLowerCase()} and create your bespoke treatment plan.
                    </p>
                    <Link to="/booking" className="btn btn-gold">Book Consultation</Link>
                </div>
            </section>
        </>
    )
}

function AccordionItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false)
    return (
        <div style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
            <button
                onClick={() => setOpen(!open)}
                style={{
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    padding: '1.25rem 0',
                    fontSize: '1.0625rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'var(--color-charcoal)',
                    fontFamily: 'var(--font-body)',
                }}
            >
                {question}
                <span style={{ color: 'var(--color-gold)', fontSize: '1.5rem', transition: 'transform 0.3s', transform: open ? 'rotate(45deg)' : 'none' }}>+</span>
            </button>
            <div
                style={{
                    maxHeight: open ? '300px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease',
                }}
            >
                <p style={{ paddingBottom: '1.25rem', fontSize: '0.9375rem', lineHeight: 1.8, margin: 0 }}>{answer}</p>
            </div>
        </div>
    )
}
