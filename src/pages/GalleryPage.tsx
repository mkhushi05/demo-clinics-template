import { Link } from 'react-router-dom'
import SEOHead from '@/components/ui/SEOHead'
import PageHeader from '@/components/ui/PageHeader'
import BeforeAfterSlider from '@/components/home/BeforeAfterSlider'

export default function GalleryPage() {
    return (
        <>
            <SEOHead
                title="Before & After Gallery"
                description="See real before and after results from Lumière Aesthetics Clinic. Natural lip filler, anti-wrinkle, and skin booster transformations."
                canonical="/gallery"
            />

            <PageHeader
                eyebrow="Real Results"
                title="Before & After Gallery"
                subtitle="Every image shown here represents a real patient result. We never retouch or manipulate our clinical photography."
            />

            <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '0.5rem' }}>Lip Enhancement</h3>
                        <p style={{ color: 'var(--color-stone-muted)', fontSize: '0.9375rem' }}>0.5ml dermal filler — subtle hydration and border definition</p>
                    </div>
                    <BeforeAfterSlider />

                    <div style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '0.5rem' }}>Anti-Wrinkle Treatment</h3>
                        <p style={{ color: 'var(--color-stone-muted)', fontSize: '0.9375rem' }}>3 areas — forehead, frown lines, crow's feet</p>
                    </div>
                    <BeforeAfterSlider />

                    <div style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '0.5rem' }}>Profhilo Skin Booster</h3>
                        <p style={{ color: 'var(--color-stone-muted)', fontSize: '0.9375rem' }}>Course of 2 sessions — skin quality transformation</p>
                    </div>
                    <BeforeAfterSlider />
                </div>
            </section>

            <section style={{ backgroundColor: 'var(--color-charcoal)', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>Love What You See?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '480px', margin: '0 auto 2rem' }}>
                        Book a complimentary consultation to discuss achieving similar results for your unique features.
                    </p>
                    <Link to="/booking" className="btn btn-gold">Book Consultation</Link>
                </div>
            </section>
        </>
    )
}
