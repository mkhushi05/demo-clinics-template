import SEOHead from '@/components/ui/SEOHead'
import PageHeader from '@/components/ui/PageHeader'

export default function PrivacyPage() {
    return (
        <>
            <SEOHead
                title="Privacy Policy"
                description="Lumière Aesthetics Clinic privacy policy. How we collect, use, and protect your personal data."
                canonical="/legal/privacy"
            />
            <PageHeader title="Privacy Policy" subtitle="Last updated: February 2026" />

            <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ lineHeight: 1.85, color: 'var(--color-stone-light)', fontSize: '0.9375rem' }}>
                        <h2 style={{ marginBottom: '1rem', marginTop: '0' }}>1. Who We Are</h2>
                        <p>Lumière Aesthetics Clinic ("we", "our", "us") is a medical aesthetics clinic located at 123 Deansgate, Manchester, M3 2AW. We are the data controller for all personal information collected through this website and during the course of providing our services.</p>

                        <h2 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>2. Information We Collect</h2>
                        <p>We collect information you provide directly when booking appointments, completing consultation forms, or contacting us. This includes your name, email address, phone number, date of birth, medical history (relevant to aesthetic treatments), and payment information. We also collect technical data such as IP address, browser type, and pages visited through cookies and analytics tools.</p>

                        <h2 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>3. How We Use Your Information</h2>
                        <p>We use your personal data to provide safe clinical care, manage appointments, process payments, send appointment reminders and aftercare instructions, and comply with our legal and regulatory obligations as a medical provider. We will never share your data with third parties for marketing purposes.</p>

                        <h2 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>4. Medical Records</h2>
                        <p>Clinical records, including photographs, treatment notes, and consent forms, are held securely and retained in accordance with NHS and regulatory guidelines. Medical data is treated with the highest level of confidentiality and stored in encrypted, access-controlled systems.</p>

                        <h2 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>5. Your Rights</h2>
                        <p>Under the UK General Data Protection Regulation (UK GDPR), you have the right to access, correct, or delete your personal data, restrict or object to processing, data portability, and withdraw consent. To exercise any of these rights, contact us at hello@lumiereclinic.co.uk.</p>

                        <h2 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>6. Cookies</h2>
                        <p>This website uses essential cookies required for functionality and optional analytics cookies to understand how visitors use the site. You can manage cookie preferences through your browser settings.</p>

                        <h2 style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>7. Contact</h2>
                        <p>If you have questions regarding this privacy policy, please contact us at hello@lumiereclinic.co.uk or call 0161 000 0000.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
