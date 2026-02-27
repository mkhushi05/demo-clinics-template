import Navbar from './Navbar'
import Footer from './Footer'
import FloatingBookButton from './FloatingBookButton'
import ScrollToTop from './ScrollToTop'

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <FloatingBookButton />
        </>
    )
}
