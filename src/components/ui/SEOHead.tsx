import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
    title: string
    description: string
    canonical?: string
    schema?: object
    ogImage?: string
}

const SITE_NAME = 'Lumière Aesthetics Clinic'
const SITE_URL = 'https://lumiereclinic.co.uk'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: SITE_NAME,
    '@id': SITE_URL,
    url: SITE_URL,
    telephone: '+44 161 000 0000',
    email: 'hello@lumiereclinic.co.uk',
    image: `${SITE_URL}/og-image.jpg`,
    priceRange: '££',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Deansgate',
        addressLocality: 'Manchester',
        postalCode: 'M3 2AW',
        addressCountry: 'GB',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 53.484,
        longitude: -2.2426,
    },
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '19:00',
        },
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday'],
            opens: '10:00',
            closes: '16:00',
        },
    ],
    sameAs: ['https://instagram.com/lumiereclinic'],
    medicalSpecialty: 'Plastic surgery',
}

export default function SEOHead({ title, description, canonical, schema, ogImage }: SEOHeadProps) {
    const fullTitle = `${title} | ${SITE_NAME}`
    const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage ?? DEFAULT_OG_IMAGE} />
            <meta property="og:url" content={canonicalUrl} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage ?? DEFAULT_OG_IMAGE} />

            {/* Robots */}
            <meta name="robots" content="index, follow" />

            {/* Structured data */}
            <script type="application/ld+json">
                {JSON.stringify(schema ?? localBusinessSchema)}
            </script>
        </Helmet>
    )
}
