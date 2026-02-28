import { useParams, Navigate } from 'react-router-dom'
import { ChevronDown, CheckCircle, Clock, TrendingUp } from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import { getTreatmentBySlug } from '@/data/treatments'
import { useState } from 'react'
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

                <TreatmentBeforeAfter
                    shortName={treatment.shortName}
                    beforeImg={beforeImg}
                    afterImg={afterImg}
                    glanceItems={glanceItems}
                />

                {/* Lower sections container */}
                <div className="w-full max-w-[768px] mx-auto">
                    {/* Secondary Image */}
                    <div className="w-full aspect-[4/3] md:aspect-[16/9] rounded-[1.5rem] overflow-hidden mb-16 shadow-sm">
                        <img
                            src={secondaryImg}
                            alt="Treatment Area"
                            className="w-full h-full object-cover scale-105"
                        />
                    </div>

                    {/* Detailed Content */}
                    <div className="mb-16 w-full">
                        <h2 className="text-[2.25rem] lg:text-[2.75rem] font-normal mb-8 text-[var(--color-charcoal)] leading-[1.15] w-full">
                            The Revolutionary Alternative to Surgery
                        </h2>

                        <div className="text-[1.1rem] leading-[1.85] text-[var(--color-taupe)] font-light w-full">
                            {treatment.longDescription.split(/\n+/).map((paragraph: string, i: number) => {
                                if (!paragraph.trim()) return null;
                                return <p key={i} className="mb-6 w-full">{paragraph}</p>;
                            })}
                        </div>

                        {/* What is it section */}
                        <div className="mt-14 w-full">
                            <h2 className="text-[2rem] font-normal mb-8 text-[var(--color-charcoal)] w-full">
                                What is {treatment.shortName}?
                            </h2>
                            <ul className="flex flex-col gap-5 w-full">
                                {treatment.highlights.map((h: string, i: number) => (
                                    <li key={i} className="flex gap-4 items-start text-[1.05rem] text-[var(--color-charcoal)] font-normal w-full">
                                        <CheckCircle size={22} className="text-[var(--color-gold-dark)] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                                        <span className="flex-1">{h}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Journey */}
                    <div className="mb-20 w-full">
                        <h2 className="text-[2rem] font-normal mb-10 text-[var(--color-charcoal)] w-full">
                            Your Journey
                        </h2>
                        <div className="flex flex-col gap-10 w-full">
                            {treatment.process.map((step: { title: string; desc: string }, i: number) => (
                                <div key={i} className="flex gap-6 items-start w-full">
                                    <div className="w-10 h-10 rounded-full border border-[var(--color-taupe)] text-[var(--color-charcoal)] flex items-center justify-center font-medium flex-shrink-0 mt-1">
                                        {i + 1}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-[1.15rem] text-[var(--color-charcoal)] mb-2 tracking-wide">{step.title}</h4>
                                        <p className="text-[var(--color-taupe)] text-[1.05rem] leading-relaxed font-light">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FAQs */}
                    <div className="mb-12 w-full">
                        <h2 className="text-[2rem] font-normal mb-8 text-[var(--color-charcoal)] w-full">
                            Frequently Asked Questions
                        </h2>
                        <div className="border-t border-[rgba(0,0,0,0.1)] w-full">
                            {treatment.faqs.map((faq: { q: string; a: string }) => (
                                <AccordionItem key={faq.q} question={faq.q} answer={faq.a} />
                            ))}
                        </div>
                    </div>
                </div>

            </main>

        </div>
    )
}

function AccordionItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false)
    return (
        <div className="border-b border-[rgba(0,0,0,0.1)]">
            <button
                onClick={() => setOpen(!open)}
                className="w-full text-left bg-transparent border-none py-6 text-[1.15rem] font-medium cursor-pointer flex justify-between items-center text-[var(--color-charcoal)]"
            >
                {question}
                <ChevronDown size={24} className={`transform transition-transform duration-300 text-[var(--color-taupe)] ${open ? 'rotate-180' : ''}`} strokeWidth={1.5} />
            </button>
            <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: open ? '500px' : '0', opacity: open ? 1 : 0 }}
            >
                <p className="pb-6 text-[1.05rem] leading-relaxed text-[var(--color-taupe)] m-0">{answer}</p>
            </div>
        </div>
    )
}

