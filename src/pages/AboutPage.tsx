import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import PageHeader from '@/components/ui/PageHeader'

export default function AboutPage() {
    return (
        <>
            <SEOHead
                title="About Us"
                description="Meet Elena Davies, founder of Lumière Aesthetics Clinic in Manchester. Learn about our medically-led approach, qualifications, and commitment to natural results."
                canonical="/about"
            />

            <PageHeader
                eyebrow="Our Story"
                title="The Lumière Philosophy"
                subtitle="We believe in aesthetics that empower. Subtle enhancements that celebrate your unique beauty rather than obscure it."
            />

            <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="about-grid">
                        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                            <img
                                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
                                alt="Elena Davies, Clinic Founder"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>
                        <div>
                            <h2 style={{ marginBottom: '1.25rem' }}>Meet Elena Davies</h2>
                            <p style={{ fontSize: '1.0625rem', fontStyle: 'italic', color: 'var(--color-stone)', marginBottom: '1.25rem' }}>
                                Founder & Lead Practitioner
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                I founded Lumière with a singular vision: to raise the standard of care in the aesthetics industry and provide a safe space where patients can achieve beautiful, undetectable results.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                With over 8 years of clinical experience across the NHS and private aesthetic sector, my approach is anchored in medical safety, detailed anatomical knowledge, and an artistic eye for facial proportions.
                            </p>
                            <p style={{ marginBottom: '2rem' }}>
                                My goal is never to change how you look, but to restore confidence and help you feel like the best version of yourself.
                            </p>

                            <div style={{ padding: '1.25rem', backgroundColor: 'var(--color-ivory)', borderLeft: '3px solid var(--color-gold)', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
                                <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '0.75rem' }}>
                                    Professional Qualifications
                                </h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                                    {[
                                        'Independent Nurse Prescriber (INP) — NMC Registered',
                                        'Level 7 Post-Graduate Diploma in Clinical Aesthetics',
                                        'Complications Management Masterclass',
                                        'Advanced Dermal Filler Techniques Certification',
                                        '8+ Years Clinical Experience (NHS & Private Sector)',
                                    ].map((q) => (
                                        <li key={q} style={{ fontSize: '0.875rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'var(--color-stone)' }}>
                                            <CheckCircle size={14} style={{ color: 'var(--color-gold)', marginTop: '3px', flexShrink: 0 }} />
                                            {q}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <style>{`
          @media (min-width: 768px) { .about-grid { grid-template-columns: 1fr 1fr !important; } }
        `}</style>
            </section>

            {/* Values */}
            <section className="section" style={{ backgroundColor: 'var(--color-ivory)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span className="eyebrow">What Drives Us</span>
                        <h2>Our Core Values</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { title: 'Medical Integrity', desc: 'We promise absolute honesty. If a treatment isn\'t right for you, or won\'t yield the results you want safely, we won\'t perform it. Your health comes first, always.' },
                            { title: 'Subtle Results', desc: 'We reject the over-filled look. Our technique is defined by precise, micro-adjustments that harmonise your natural features — not transform them beyond recognition.' },
                            { title: 'Continual Education', desc: 'Aesthetics is constantly evolving. We commit to ongoing training and attend global masterclasses to bring the safest, most advanced techniques to Manchester.' },
                        ].map(({ title, desc }) => (
                            <div key={title} style={{ backgroundColor: 'var(--color-white)', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-card)', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-gold-dark)' }}>{title}</h3>
                                <p style={{ fontSize: '0.9375rem' }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ textAlign: 'center', padding: '3rem 0 4rem', backgroundColor: 'var(--color-cream)' }}>
                <div className="container">
                    <Link to="/booking" className="btn btn-primary">
                        Book Consultation <ArrowRight size={14} />
                    </Link>
                </div>
            </section>
        </>
    )
}
