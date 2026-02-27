import SEOHead from '@/components/ui/SEOHead'
import PageHeader from '@/components/ui/PageHeader'

export default function DisclaimerPage() {
    return (
        <>
            <SEOHead
                title="Medical Disclaimer"
                description="Important medical information and disclaimers for Lumière Aesthetics Clinic treatments."
                canonical="/legal/disclaimer"
            />
            <PageHeader title="Medical Disclaimer" subtitle="Last updated: February 2026" />

            <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ lineHeight: 1.85, color: 'var(--color-stone-light)', fontSize: '0.9375rem' }}>
                        <h2 style={{ marginBottom: '1rem', marginTop: '0' }}>General Information</h2>
                        <p>The information provided on this website is for general informational purposes only and does not constitute medical advice. It is not intended to replace a professional medical consultation. All aesthetic treatments carry potential risks and side effects, and outcomes vary between individuals.</p>

                        <h2 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>Before & After Images</h2>
                        <p>Before and after photographs shown on this website are genuine, unretouched patient results. Individual results may vary. These images are provided for illustrative purposes only and should not be used as a guarantee of outcome. All patients have provided written consent for their images to be displayed.</p>

                        <h2 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>Treatment Risks</h2>
                        <p>All injectable aesthetic treatments carry inherent risks, including but not limited to bruising, swelling, asymmetry, infection, allergic reaction, and vascular compromise. These risks will be discussed in full during your mandatory consultation. You must disclose your full medical history, including medications and previous treatments.</p>

                        <h2 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>Regulatory Status</h2>
                        <p>Dermal fillers are classified as medical devices in the UK. Botulinum toxin (commonly referred to as "anti-wrinkle injections") is a prescription-only medication (POM) and can only be prescribed and administered by qualified medical prescribers. All treatments at Lumière Aesthetics are performed by a qualified independent nurse prescriber.</p>

                        <h2 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>Emergency Contact</h2>
                        <p>If you experience any concerning symptoms following a treatment, contact the clinic immediately on 0161 000 0000. Outside of clinic hours, an emergency contact number will be provided in your aftercare documentation.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
