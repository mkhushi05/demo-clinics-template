import SEOHead from '@/components/ui/SEOHead'
import PageHeader from '@/components/ui/PageHeader'

export default function TermsPage() {
    return (
        <>
            <SEOHead
                title="Terms & Conditions"
                description="Terms and conditions for booking treatments at Lumière Aesthetics Clinic Manchester."
                canonical="/legal/terms"
            />
            <PageHeader title="Terms & Conditions" subtitle="Last updated: February 2026" />

            <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ lineHeight: 1.85, color: 'var(--color-stone-light)', fontSize: '0.9375rem' }}>
                        <h2 style={{ marginBottom: '1rem', marginTop: '0' }}>1. Bookings & Deposits</h2>
                        <p>A £50 booking deposit is required to secure all treatment appointments. This deposit is fully redeemable against the cost of your treatment or refunded in full if you cancel with more than 48 hours' notice. Cancellations made within 48 hours of the appointment will forfeit the deposit.</p>

                        <h2 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>2. Consultations</h2>
                        <p>An in-person consultation is mandatory before any injectable treatment. Consultations are complimentary and carry no obligation to proceed with treatment. We reserve the right to decline treatment at any stage if we believe it is not in the patient's best interest.</p>

                        <h2 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>3. Age Policy</h2>
                        <p>We do not treat patients under the age of 18 under any circumstances. A valid photographic ID may be requested if you appear to be under the age of 25 (Challenge 25 policy).</p>

                        <h2 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>4. Consent</h2>
                        <p>Written informed consent is required before every treatment. You will be provided with detailed information about the procedure, expected outcomes, potential risks and side effects, and aftercare instructions. Consent may be withdrawn at any time.</p>

                        <h2 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>5. Aftercare</h2>
                        <p>Following your treatment, you will receive written aftercare instructions. A complimentary review appointment will be scheduled where applicable (typically two weeks post-treatment). It is your responsibility to follow aftercare advice and contact the clinic if you have any concerns.</p>

                        <h2 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>6. Complaints</h2>
                        <p>If you are dissatisfied with any aspect of our service, please contact us at hello@lumiereclinic.co.uk. We take all feedback seriously and aim to resolve concerns promptly.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
