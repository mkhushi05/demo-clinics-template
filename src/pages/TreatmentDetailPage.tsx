import { useParams, Navigate, Link } from 'react-router-dom'
import { ChevronDown, CheckCircle, Clock, TrendingUp } from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import { getTreatmentBySlug } from '@/data/treatments'
import { useState } from 'react'
import { motion } from 'framer-motion'
import TreatmentHero from '@/components/treatment/TreatmentHero'
import TreatmentBeforeAfter, { type GlanceItem } from '@/components/treatment/TreatmentBeforeAfter'

export default function TreatmentDetailPage() {
    const { slug } = useParams<{ slug: string }>()
    const treatment = slug ? getTreatmentBySlug(slug) : undefined

    if (!treatment) return <Navigate to="/treatments" replace />

    // Consistent professional portrait pairs for Before/After
    const beforeImg = "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800&h=1000"
    const afterImg = "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=800&h=1000"
    const secondaryImg = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1200"

    const glanceItems: GlanceItem[] = [
        {
            icon: <Clock size={16} strokeWidth={1.5} />,
            label: 'Time',
            value: treatment.duration
        },
        {
            icon: <TrendingUp size={16} strokeWidth={1.5} />,
            label: 'Results',
            value: 'Immediate results'
        },
        {
            icon: <CheckCircle size={16} strokeWidth={1.5} />,
            label: 'Downtime',
            value: treatment.downtime || 'Varies by treatment'
        }
    ];

    return (
        <div className="bg-[var(--color-cream)] min-h-screen relative pb-32">
            <SEOHead
                title={treatment.name}
                description={treatment.description}
                canonical={`/treatments/${treatment.slug}`}
            />

            {/* Desktop spacer for fixed header (96px) + small gap */}
            <div className="pt-[100px] lg:pt-[130px]"></div>

            <main className="container mx-auto px-5 lg:px-12 max-w-[1200px]">

                <TreatmentHero
                    name={treatment.name}
                    description={treatment.description}
                    image={treatment.image}
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <TreatmentBeforeAfter
                        shortName={treatment.shortName}
                        beforeImg={beforeImg}
                        afterImg={afterImg}
                        glanceItems={glanceItems}
                    />
                </motion.div>

                {/* Alternating Blocks Container */}
                <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-24 lg:gap-32 pb-16">

                    {/* Block 1: Image Left, Text Right (Desktop) | Image Top, Text Bottom (Mobile) */}
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Image Container */}
                        <div className="w-full order-1 lg:order-1 relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(42,37,34,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 rounded-[1.5rem]" />
                            <div className="w-full aspect-[4/3] lg:aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-md">
                                <img
                                    src={secondaryImg}
                                    alt={`${treatment.name} Treatment Area`}
                                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[2s] ease-out"
                                />
                            </div>
                        </div>

                        {/* Text Container */}
                        <div className="w-full flex flex-col order-2 lg:order-2">
                            <h2 className="text-[2.25rem] lg:text-[2.75rem] font-normal mb-8 text-[var(--color-charcoal)] leading-[1.15] w-full"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                The Revolutionary Alternative to Surgery
                            </h2>

                            <div className="text-[1.1rem] leading-[1.85] text-[var(--color-taupe)] font-light w-full mb-10"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                {treatment.longDescription.split(/\n+/).map((paragraph: string, i: number) => {
                                    if (!paragraph.trim()) return null;
                                    return <p key={i} className="mb-6 w-full">{paragraph}</p>;
                                })}
                            </div>

                            {/* What is it section */}
                            <div className="w-full">
                                <h3 className="text-[1.75rem] font-normal mb-6 text-[var(--color-charcoal)] w-full"
                                    style={{ fontFamily: 'var(--font-heading)' }}
                                >
                                    What is {treatment.shortName}?
                                </h3>
                                <ul className="flex flex-col gap-4 w-full">
                                    {treatment.highlights.map((h: string, i: number) => (
                                        <li key={i} className="flex gap-4 items-start text-[1.05rem] text-[var(--color-taupe)] font-light w-full">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-dark)] mt-2.5 flex-shrink-0" />
                                            <span className="flex-1 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Block 2: Text Left, Image Right (Desktop) | Image Top, Text Bottom (Mobile) */}
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start w-full relative"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Subtle background glow for text section on desktop */}
                        <div className="absolute top-0 left-[-10%] w-[60%] h-full bg-gradient-to-r from-[rgba(255,255,255,0.4)] to-transparent rounded-full blur-3xl -z-10 hidden lg:block" />

                        {/* Text Container (Journey) */}
                        <div className="w-full flex flex-col order-2 lg:order-1 pt-4 lg:pt-12">
                            <h2 className="text-[2.25rem] lg:text-[2.75rem] font-normal mb-12 text-[var(--color-charcoal)] w-full relative inline-block"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                Your Journey
                                <span className="absolute -bottom-4 left-0 w-12 h-[2px] bg-[var(--color-gold-dark)]"></span>
                            </h2>
                            <div className="flex flex-col gap-12 w-full relative mt-4">
                                {/* Vertical connecting line */}
                                <div className="absolute left-[19px] top-4 bottom-10 w-[1px] bg-gradient-to-b from-[var(--color-gold)] via-[rgba(0,0,0,0.1)] to-transparent hidden sm:block"></div>

                                {treatment.process.map((step: { title: string; desc: string }, i: number) => (
                                    <motion.div
                                        key={i}
                                        className="flex gap-6 items-start w-full relative group"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-[var(--color-cream)] border border-[var(--color-gold)] text-[var(--color-charcoal)] flex items-center justify-center font-medium flex-shrink-0 mt-1 relative z-10 transition-all duration-300 group-hover:bg-[var(--color-gold-light)] group-hover:scale-110 shadow-sm">
                                            {i + 1}
                                        </div>
                                        <div className="flex-1 pt-1.5">
                                            <h4 className="font-medium text-[1.25rem] text-[var(--color-charcoal)] mb-3 tracking-wide"
                                                style={{ fontFamily: 'var(--font-heading)' }}
                                            >{step.title}</h4>
                                            <p className="text-[var(--color-taupe)] text-[1.05rem] leading-[1.7] font-light"
                                                style={{ fontFamily: 'var(--font-body)' }}
                                            >{step.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Image Container */}
                        <div className="w-full order-1 lg:order-2 lg:sticky lg:top-32 group">
                            <div className="w-full aspect-[4/3] lg:aspect-[3/4] rounded-[1.5rem] overflow-hidden shadow-md relative">
                                <div className="absolute inset-0 bg-[rgba(42,37,34,0.02)] group-hover:bg-transparent transition-colors duration-700 z-10" />
                                <img
                                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1200"
                                    alt="Clinical Expertise"
                                    className="w-full h-full object-cover scale-[1.02] group-hover:scale-[1.05] transition-transform duration-[2s] ease-out"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* FAQs */}
                    <div className="mb-12 w-full pt-16">
                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                            <div className="lg:w-1/3">
                                <h2 className="text-[2.25rem] font-normal mb-4 text-[var(--color-charcoal)]"
                                    style={{ fontFamily: 'var(--font-heading)' }}
                                >
                                    FAQs
                                </h2>
                                <p className="text-[1.05rem] text-[var(--color-taupe)] font-light leading-relaxed mb-8"
                                    style={{ fontFamily: 'var(--font-body)' }}
                                >
                                    Everything you need to know about the {treatment.shortName} treatment. Can't find the answer you're looking for? Please get in touch.
                                </p>
                            </div>
                            <div className="lg:w-2/3 w-full border-t border-[rgba(0,0,0,0.85)]">
                                {treatment.faqs.map((faq: { q: string; a: string }) => (
                                    <AccordionItem key={faq.q} question={faq.q} answer={faq.a} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA block */}
                <div className="mt-20 sm:mt-24 mb-10 w-full flex flex-col items-center text-center px-4">
                    <h2
                        className="text-[2rem] sm:text-[2.5rem] font-medium mb-5 text-[var(--color-charcoal)]"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        Ready to transform?
                    </h2>
                    <p
                        className="text-[1.05rem] sm:text-[1.125rem] text-[var(--color-taupe)] mb-8 font-light max-w-[500px] leading-[1.7]"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        Book a consultation with our experts to discuss your bespoke treatment plan.
                    </p>
                    <Link
                        to="/booking"
                        className="group inline-flex items-center justify-center gap-2.5 bg-[#2A2522] text-[#F9F7F5] py-4 px-10 rounded-full text-[1rem] font-medium tracking-wide transition-all duration-300 hover:bg-[#1a1715] hover:scale-[1.02] active:scale-[0.98] shadow-sm"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-y-[1px]"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                        Book your consultation
                    </Link>
                </div>

            </main>

        </div>
    )
}

function AccordionItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false)
    return (
        <div className="border-b border-[rgba(0,0,0,0.15)] group">
            <button
                onClick={() => setOpen(!open)}
                className="w-full text-left bg-transparent border-none py-6 text-[1.15rem] sm:text-[1.25rem] font-medium cursor-pointer flex justify-between items-center text-[var(--color-charcoal)] transition-colors duration-300 group-hover:text-[var(--color-gold-dark)]"
                style={{ fontFamily: 'var(--font-heading)' }}
            >
                {question}
                <ChevronDown size={22} className={`transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] text-[var(--color-charcoal)] group-hover:text-[var(--color-gold-dark)] ${open ? 'rotate-180' : ''}`} strokeWidth={1.5} />
            </button>
            <div
                className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ maxHeight: open ? '500px' : '0', opacity: open ? 1 : 0 }}
            >
                <div className="pb-8 pt-2">
                    <p className="text-[1.05rem] leading-[1.8] text-[var(--color-taupe)] font-light m-0"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    )
}

