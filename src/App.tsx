import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'

// Eagerly load the home page
import HomePage from '@/pages/HomePage'

// Lazy load all other pages
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const TreatmentsPage = lazy(() => import('@/pages/TreatmentsPage'))
const TreatmentDetailPage = lazy(() => import('@/pages/TreatmentDetailPage'))
const GalleryPage = lazy(() => import('@/pages/GalleryPage'))
const PricingPage = lazy(() => import('@/pages/PricingPage'))
const FAQsPage = lazy(() => import('@/pages/FAQsPage'))
const BookingPage = lazy(() => import('@/pages/BookingPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const PrivacyPage = lazy(() => import('@/pages/legal/PrivacyPage'))
const TermsPage = lazy(() => import('@/pages/legal/TermsPage'))
const DisclaimerPage = lazy(() => import('@/pages/legal/DisclaimerPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

function PageLoader() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-cream)' }}>
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', letterSpacing: '0.12em', color: 'var(--color-stone-muted)' }}>
        LUMIÈRE
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/treatments/:slug" element={<TreatmentDetailPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/legal/privacy" element={<PrivacyPage />} />
            <Route path="/legal/terms" element={<TermsPage />} />
            <Route path="/legal/disclaimer" element={<DisclaimerPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}
