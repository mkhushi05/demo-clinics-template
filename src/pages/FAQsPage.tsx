import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '@/components/ui/SEOHead'
import PageHeader from '@/components/ui/PageHeader'
import { faqs } from '@/data/faqs'

export default function FAQsPage() {
    const categories = [...new Set(faqs.map((f) => f.category))]

    return (
        <>
            <SEOHead
                title="Aesthetic Treatment FAQs Manchester | Lumière Clinic"
                description="Honest answers about lip fillers, anti-wrinkle injections, safety, qualifications, and booking at Lumière in Manchester. Is it safe? Does it hurt? Will I look natural?"
                canonical="/faqs"
            />

            <PageHeader
                eyebrow="Questions? Good."
                title="Everything you want to know"
                subtitle="The honest answers to the questions you're actually Googling."
            />

            <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    {categories.map((cat) => (
                        <div key={cat} style={{ marginBottom: '3rem' }}>
                            <h2
                                style={{
                                    fontSize: '1.375rem',
                                    color: 'var(--color-gold-dark)',
                                    marginBottom: '1.25rem',
                                    paddingBottom: '0.5rem',
                                    borderBottom: '1px solid var(--color-cream-dark)',
                                }}
                            >
                                {cat}
                            </h2>
                            {faqs
                                .filter((f) => f.category === cat)
                                .map((faq) => (
                                    <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
                                ))}
                        </div>
                    ))}

                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <p style={{ marginBottom: '1.25rem', color: 'var(--color-stone-light)' }}>Still not sure? Message or book — no commitment needed.</p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="https://wa.me/440000000000" className="btn btn-secondary">WhatsApp Us</a>
                            <Link to="/booking" className="btn btn-primary">Book Free Consultation</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false)
    return (
        <div style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
            <button
                onClick={() => setOpen(!open)}
                style={{
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    padding: '1.125rem 0',
                    fontSize: '1.0625rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'var(--color-charcoal)',
                    fontFamily: 'var(--font-body)',
                    gap: '1rem',
                }}
            >
                <span>{question}</span>
                <span style={{ color: 'var(--color-gold)', fontSize: '1.5rem', transition: 'transform 0.3s', transform: open ? 'rotate(45deg)' : 'none', flexShrink: 0 }}>+</span>
            </button>
            <div style={{ maxHeight: open ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
                <p style={{ paddingBottom: '1.25rem', fontSize: '0.9375rem', lineHeight: 1.85, margin: 0 }}>{answer}</p>
            </div>
        </div>
    )
}
