
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEOHead from '@/components/ui/SEOHead';

import FadeIn from '@/components/animations/FadeIn';

export default function AboutPage() {
    return (
        <>
            <SEOHead
                title="About Us"
                description="Meet Elena Davies, founder of Lumière Aesthetics Clinic in Manchester. Learn about our medically-led approach, qualifications, and commitment to natural results."
                canonical="/about"
            />

            {/* Elevated Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-cream pt-24 pb-16">
                {/* Subtle background blur / gradient blob for organic feel */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-stone-muted/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="container relative z-10 w-full px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                        <div className="lg:col-span-6 xl:col-span-5 text-left w-full min-w-0">
                            <FadeIn>
                                <span className="inline-block font-body text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-gold mb-6">
                                    The Lumière Philosophy
                                </span>
                            </FadeIn>

                            <FadeIn delay={200}>
                                <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-light text-charcoal leading-[1.1] tracking-tight mb-8">
                                    Aesthetics that <span className="italic text-gold-dark">empower.</span>
                                </h1>
                            </FadeIn>

                            <FadeIn delay={400}>
                                <p className="font-body text-base sm:text-lg text-stone-light leading-relaxed mt-6">
                                    We believe in subtle enhancements that celebrate your unique beauty rather than obscure it.
                                    A sanctuary where medical precision meets artistic vision.
                                </p>
                            </FadeIn>
                        </div>

                        <div className="lg:col-span-6 xl:col-span-7 xl:col-start-6 w-full relative">
                            <FadeIn delay={300}>
                                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[16/10] shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1000"
                                        alt="Lumière Clinic interior"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-stone-light/5 mix-blend-overlay"></div>
                                </div>
                                {/* Decorative Element */}
                                <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-gold/30 rounded-full -z-10 hidden md:block" />
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Founder Section - Organic Asymmetrical Layout */}
            <section className="py-24 md:py-32 bg-white relative">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

                        {/* Image Left Side - spanning 5 columns */}
                        <div className="lg:col-span-5 relative">
                            <FadeIn>
                                <div className="relative rounded-t-full rounded-b-[4rem] overflow-hidden aspect-[3/4] shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
                                        alt="Elena Davies, Clinic Founder"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-stone-light/10 mix-blend-overlay"></div>
                                </div>
                                {/* Decorative Element */}
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/30 rounded-full -z-10 hidden md:block" />
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-ivory rounded-full -z-10" />
                            </FadeIn>
                        </div>

                        {/* Content Right Side - spanning 6 columns, with 1 col offset */}
                        <div className="lg:col-span-6 lg:col-start-7 text-left space-y-10">
                            <FadeIn>
                                <div>
                                    <h2 className="font-heading text-4xl md:text-5xl text-charcoal mb-4">Meet Elena Davies</h2>
                                    <p className="font-heading text-xl italic text-gold-dark">
                                        Founder & Lead Practitioner
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={150}>
                                <div className="space-y-6 text-stone-light text-lg leading-relaxed font-light">
                                    <p>
                                        I founded Lumière with a singular vision: to raise the standard of care in the aesthetics industry and provide a safe space where patients can achieve beautiful, undetectable results.
                                    </p>
                                    <p>
                                        With over 8 years of clinical experience across the NHS and private aesthetic sector, my approach is anchored in medical safety, detailed anatomical knowledge, and an artistic eye for facial proportions.
                                    </p>
                                    <p className="text-xl font-heading italic text-stone">
                                        &quot;My goal is never to change how you look, but to restore confidence and help you feel like the absolute best version of yourself.&quot;
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={300}>
                                <div className="pt-8 border-t border-gold/20">
                                    <h4 className="font-body text-xs font-semibold tracking-widest uppercase text-gold mb-6">
                                        Professional Qualifications
                                    </h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                        {[
                                            'Independent Nurse Prescriber — NMC Registered',
                                            'Level 7 PGDip in Clinical Aesthetics',
                                            'Complications Management Masterclass',
                                            'Advanced Dermal Filler Certification',
                                            '8+ Years Clinical Experience'
                                        ].map((q) => (
                                            <li key={q} className="flex items-start gap-3 text-sm text-stone-light">
                                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                                                <span className="leading-snug">{q}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Dive Philosophy / Core Values */}
            <section className="py-32 bg-charcoal relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

                <div className="container relative z-10">
                    <FadeIn>
                        <div className="text-center max-w-2xl mx-auto mb-20 space-y-6">
                            <span className="inline-block font-body text-xs font-semibold tracking-[0.2em] uppercase text-gold">
                                What Drives Us
                            </span>
                            <h2 className="font-heading text-4xl md:text-5xl font-light text-cream">
                                An unwavering commitment to <span className="italic text-gold-light">excellence</span>
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                        {[
                            {
                                num: '01',
                                title: 'Medical Integrity',
                                desc: "We promise absolute honesty. If a treatment isn't right for you, or won't yield the results you want safely, we won't perform it. Your health comes first, always."
                            },
                            {
                                num: '02',
                                title: 'Subtle Results',
                                desc: "We reject the over-filled look. Our technique is defined by precise, micro-adjustments that harmonise your natural features — not transform them."
                            },
                            {
                                num: '03',
                                title: 'Continual Education',
                                desc: "Aesthetics is constantly evolving. We commit to ongoing training and attend global masterclasses to bring the safest techniques to Manchester."
                            },
                        ].map(({ num, title, desc }, idx) => (
                            <FadeIn key={num} delay={idx * 200}>
                                <div className="flex flex-col space-y-6 group">
                                    <div className="font-heading text-5xl text-gold/30 font-light group-hover:text-gold transition-colors duration-500">
                                        {num}
                                    </div>
                                    <h3 className="font-heading text-2xl" style={{ color: 'var(--color-cream)' }}>{title}</h3>
                                    <p className="font-body text-base leading-relaxed font-light" style={{ color: 'rgba(255,255,255,0.85)' }}>
                                        {desc}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Strip */}
            <section className="py-24 bg-ivory text-center">
                <div className="container max-w-3xl">
                    <FadeIn>
                        <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-8">Ready to begin your journey?</h2>
                        <Link to="/booking" className="btn btn-primary inline-flex items-center gap-3 px-8 py-4 text-sm">
                            Book Your Consultation <ArrowRight size={16} />
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </>
    )
}
