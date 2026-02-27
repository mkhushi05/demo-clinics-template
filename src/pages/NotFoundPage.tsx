import { Link } from 'react-router-dom'
import SEOHead from '@/components/ui/SEOHead'

export default function NotFoundPage() {
    return (
        <>
            <SEOHead title="Page Not Found" description="The page you are looking for does not exist." />

            <section
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    backgroundColor: 'var(--color-cream)',
                    paddingTop: '6rem',
                }}
            >
                <div className="container">
                    <p style={{ fontFamily: 'var(--font-heading)', fontSize: '6rem', fontWeight: 300, color: 'var(--color-cream-dark)', marginBottom: '0.5rem', lineHeight: 1 }}>
                        404
                    </p>
                    <h1 style={{ marginBottom: '1rem', fontSize: '2rem' }}>Page Not Found</h1>
                    <p style={{ maxWidth: '400px', margin: '0 auto 2rem', color: 'var(--color-stone-muted)' }}>
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    <Link to="/" className="btn btn-primary">Return to Homepage</Link>
                </div>
            </section>
        </>
    )
}
