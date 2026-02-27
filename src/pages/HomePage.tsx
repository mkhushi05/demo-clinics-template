import { Link } from 'react-router-dom'
import { ArrowRight, Clock, CheckCircle, MapPin, Phone } from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'
import TrustBar from '@/components/ui/TrustBar'
import { treatments } from '@/data/treatments'
import { testimonials } from '@/data/testimonials'
import BeforeAfterSlider from '@/components/home/BeforeAfterSlider'
import FadeIn from '@/components/animations/FadeIn'

export default function HomePage() {
    return (
        <>
            <SEOHead
                title="Luxury Medical Aesthetics Manchester"
                description="Manchester's premier medically-led aesthetics clinic. Natural lip fillers, anti-wrinkle injections, and skin boosters by qualified nurse prescriber Elena Davies."
                canonical="/"
            />

            {/* ── Hero ── */}
            <section
                style={{
                    position: 'relative',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'url(https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, rgba(26,22,20,0.75) 0%, rgba(26,22,20,0.45) 50%, rgba(26,22,20,0.6) 100%)',
                    }}
                />
                <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '6rem', paddingBottom: '4rem' }}>
                    <div style={{ maxWidth: '640px' }}>
                        <span
                            className="eyebrow"
                            style={{ color: 'var(--color-gold-light)', marginBottom: '1.5rem', display: 'block', animation: 'fadeInUp 0.7s ease forwards', opacity: 0 }}
                        >
                            Luxury Medical Aesthetics
                        </span>
                        <h1
                            style={{
                                color: '#ffffff',
                                marginBottom: '1.5rem',
                                animation: 'fadeInUp 0.7s ease 0.15s forwards',
                                opacity: 0,
                            }}
                        >
                            Enhancing Natural Beauty with Medical Precision
                        </h1>
                        <p
                            style={{
                                fontSize: '1.125rem',
                                lineHeight: 1.8,
                                color: 'rgba(255,255,255,0.8)',
                                marginBottom: '2.5rem',
                                maxWidth: '520px',
                                animation: 'fadeInUp 0.7s ease 0.3s forwards',
                                opacity: 0,
                            }}
                        >
                            Subtle, confidence-boosting results in a safe, medically-led environment in the heart of Manchester. Led by qualified nurse prescriber Elena Davies.
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '1rem',
                                animation: 'fadeInUp 0.7s ease 0.45s forwards',
                                opacity: 0,
                            }}
                        >
                            <Link to="/booking" className="btn btn-gold">
                                Book Consultation
                            </Link>
                            <Link to="/treatments" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#ffffff' }}>
                                View Treatments <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Trust Bar ── */}
            <TrustBar />

            {/* ── Signature Treatments (Bespoke Layout) ── */}
            <section className="section bg-cream relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-stone-muted/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="container relative z-10">
                    <FadeIn>
                        <div className="text-center md:text-left mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                            <div className="flex-1 max-w-2xl text-left">
                                <span className="inline-block font-body text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
                                    Curated Expertise
                                </span>
                                <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl text-charcoal font-light leading-tight">
                                    Our Signature <span className="italic text-gold-dark">Treatments</span>
                                </h2>
                            </div>
                            <p className="flex-1 font-body text-stone-light text-base md:text-lg max-w-md md:text-right leading-relaxed mb-2 text-left">
                                Advanced aesthetic procedures designed to restore, enhance, and rejuvenate — delivered with clinical precision and an artistic eye.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="flex flex-col gap-24 md:gap-32 w-full">
                        {treatments.map((treatment: any, index: number) => {
                            const isEven = index % 2 === 0;
                            return (
                                <FadeIn key={treatment.slug} delay={200}>
                                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 group`}>

                                        {/* Image Side */}
                                        <div className={`relative ${isEven ? 'order-1' : 'order-1 md:order-2'}`}>
                                            <div className={`relative overflow-hidden shadow-2xl ${isEven ? 'rounded-tr-[4rem] rounded-bl-[4rem]' : 'rounded-tl-[4rem] rounded-br-[4rem]'} aspect-[4/5] md:aspect-[3/4]`}>
                                                <img
                                                    src={treatment.image}
                                                    alt={treatment.name}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-charcoal/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
                                            </div>
                                            {/* Decorative Number */}
                                            <div className={`absolute -z-10 font-heading text-[8rem] md:text-[12rem] lg:text-[16rem] leading-none text-stone-muted/10 bottom-[-5%] ${isEven ? 'left-[-10%]' : 'right-[-10%]'}`}>
                                                0{index + 1}
                                            </div>
                                        </div>

                                        {/* Content Side */}
                                        <div className={`flex flex-col justify-center px-4 md:px-0 text-left ${isEven ? 'order-2' : 'order-2 md:order-1'}`}>
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-8 h-px bg-gold/50" />
                                                <span className="font-body text-sm font-medium tracking-widest uppercase text-stone-muted">
                                                    {treatment.price}
                                                </span>
                                            </div>

                                            <h3 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
                                                {treatment.name}
                                            </h3>

                                            <p className="font-body text-base md:text-lg text-stone-light leading-relaxed mb-10">
                                                {treatment.description}
                                            </p>

                                            <div>
                                                <Link
                                                    to={`/treatments/${treatment.slug}`}
                                                    className="group/btn inline-flex items-center gap-3 font-body text-sm font-semibold tracking-[0.15em] uppercase text-charcoal hover:text-gold transition-colors duration-300"
                                                >
                                                    <span className="relative overflow-hidden pb-1">
                                                        Explore Treatment
                                                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-charcoal transform origin-left transition-transform duration-300 group-hover/btn:scale-x-0" />
                                                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold transform origin-left scale-x-0 transition-transform duration-300 group-hover/btn:scale-x-100" />
                                                    </span>
                                                    <ArrowRight size={16} className="transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Your Practitioner (Immersive Layout) ── */}
            <section className="section bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <div className="absolute left-0 bottom-0 w-1/3 h-[500px] bg-gold/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                        {/* Image Side */}
                        <div className="relative">
                            <FadeIn>
                                <div className="relative mx-auto max-w-md lg:max-w-full">
                                    <div className="absolute -inset-4 md:-inset-8 border border-gold/20 rounded-t-full rounded-b-[4rem] transform -rotate-3 transition-transform duration-700 hover:rotate-0" />
                                    <div className="absolute top-8 -right-8 w-32 h-32 border border-charcoal/10 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gold absolute -top-0.5" />
                                    </div>
                                    <div className="relative rounded-t-full rounded-b-[4rem] overflow-hidden shadow-2xl aspect-[3/4]">
                                        <img
                                            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1470&auto=format&fit=crop"
                                            alt="Elena Davies - Lead Medical Aesthetician"
                                            loading="lazy"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Content Side */}
                        <div className="flex flex-col justify-center px-4 md:px-0 text-left">
                            <FadeIn delay={200}>
                                <span className="inline-block font-body text-xs font-semibold tracking-[0.2em] uppercase text-stone-muted mb-4">
                                    Your Practitioner
                                </span>
                                <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl text-charcoal font-light mb-4">
                                    Meet Elena Davies
                                </h2>
                                <p className="font-heading italic text-xl text-gold mb-10">
                                    Lead Medical Aesthetician
                                </p>

                                <div className="space-y-6 font-body text-stone-light text-base md:text-lg leading-relaxed">
                                    <p>
                                        Aesthetics is more than just treatments; it is an intimate experience built on trust and a deep understanding of your unique beauty.
                                    </p>
                                    <p>
                                        I am Elena Davies, an Independent Nurse Prescriber with over a decade of clinical and aesthetic experience. My approach combines the rigorous safety standards of medical practice with the finessed artistry required to achieve completely natural, undetectable results.
                                    </p>
                                </div>

                                <blockquote className="my-10 pl-6 border-l-2 border-gold font-heading text-xl md:text-2xl italic text-charcoal/80 leading-relaxed">
                                    "My dedication is to your safety, your confidence, and ensuring you leave feeling empowered."
                                </blockquote>

                                {/* Mini stats/features */}
                                <div className="flex flex-col sm:flex-row gap-8 w-full pt-8 border-t border-charcoal/10 mb-10">
                                    <div className="flex-1">
                                        <h4 className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-charcoal mb-4">
                                            Credentials
                                        </h4>
                                        <ul className="space-y-2 text-sm text-stone-light">
                                            <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gold/50" /> NMC Registered prescriber</li>
                                            <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gold/50" /> Level 7 PGDip in Aesthetics</li>
                                            <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gold/50" /> Advanced facial anatomy</li>
                                        </ul>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-charcoal mb-4">
                                            Why Trust Us
                                        </h4>
                                        <ul className="space-y-2 text-sm text-stone-light">
                                            <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gold/50" /> Patient-first ethos</li>
                                            <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gold/50" /> Complications trained</li>
                                            <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gold/50" /> Premium CE-marked products</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <Link to="/booking" className="btn btn-primary bg-charcoal text-white hover:bg-stone transition-all duration-300 inline-block">
                                        Schedule Private Consultation
                                    </Link>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Before & After Gallery ── */}
            <section className="py-24 md:py-32 bg-charcoal text-white relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="container relative z-10 w-full">
                    <FadeIn>
                        <div className="text-center w-full mx-auto mb-16 md:mb-24 max-w-2xl">
                            <span className="inline-block font-body text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
                                Real Results
                            </span>
                            <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl font-light mb-6">
                                The Art of <span className="italic text-gold-light">Subtlety</span>
                            </h2>
                            <p className="font-body text-white/60 text-base md:text-lg leading-relaxed">
                                Realistic, natural transformations that celebrate your unique geometry. Drag the slider to compare, or explore our curated patient gallery.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={200}>
                        <div className="w-full mx-auto mb-16 rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-white/5 bg-white/5 backdrop-blur-sm max-w-5xl">
                            <BeforeAfterSlider />
                        </div>
                    </FadeIn>

                    <FadeIn delay={400}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full mx-auto mb-16 max-w-7xl">
                            {[
                                "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6ece?q=80&w=1587&auto=format&fit=crop",
                                "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1470&auto=format&fit=crop",
                                "https://images.unsplash.com/photo-1614859324967-bdf31ae1874b?q=80&w=1470&auto=format&fit=crop",
                                "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1470&auto=format&fit=crop"
                            ].map((img, i) => (
                                <div key={i} className={`relative rounded-2xl overflow-hidden aspect-square group ${i === 1 || i === 3 ? 'md:translate-y-8' : ''}`}>
                                    <img src={img} alt="Before and After Example" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" />
                                    <div className="absolute inset-0 bg-charcoal/20 transition-opacity duration-300 group-hover:opacity-0" />
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-24">
                            <Link to="/gallery" className="btn btn-secondary border-white/20 text-white hover:bg-white hover:text-charcoal transition-colors">
                                View Full Portfolio
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ── Client Stories ── */}
            <section className="section bg-cream relative overflow-hidden">
                <div className="absolute left-0 bottom-0 w-1/4 h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="container relative z-10 w-full">
                    <FadeIn>
                        <div className="text-center w-full mx-auto mb-16 md:mb-24">
                            <span className="inline-block font-body text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
                                Testimonials
                            </span>
                            <h2 className="font-heading text-4xl md:text-5xl text-charcoal font-light">
                                What Our <span className="italic text-gold-dark">Clients Say</span>
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        {testimonials.slice(0, 3).map((t: any, idx: number) => (
                            <FadeIn key={t.name} delay={idx * 150}>
                                <div className="bg-white p-10 md:p-12 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-500 h-full flex flex-col border border-stone-muted/10 group relative overflow-hidden text-left">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                                    <div className="text-gold mb-6 font-heading text-6xl leading-none opacity-20">
                                        "
                                    </div>
                                    <p className="font-body text-stone text-base md:text-[1.0625rem] leading-relaxed mb-8 flex-grow">
                                        {t.text}
                                    </p>
                                    <div className="pt-6 border-t border-stone-muted/10">
                                        <p className="font-heading text-charcoal text-lg font-medium">{t.name}</p>
                                        <p className="font-body text-xs font-semibold tracking-wider text-stone-muted uppercase mt-1">{t.treatment}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── The Lumiere Journey ── */}
            <section className="py-24 md:py-32 bg-stone text-white relative bg-fixed bg-center overflow-hidden" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop")', backgroundSize: 'cover' }}>
                <div className="absolute inset-0 bg-stone/95 mix-blend-multiply" />

                <div className="container relative z-10 w-full">
                    <FadeIn>
                        <div className="text-center w-full mx-auto mb-20 max-w-3xl">
                            <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl text-white font-light mb-6">
                                Your <span className="italic text-gold-light">Journey</span>
                            </h2>
                            <p className="font-body text-white/70 text-base md:text-lg leading-relaxed">
                                A bespoke pathway tailored entirely to your needs, ensuring safety, comfort, and exceptional results from the moment you step through our doors.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 w-full mx-auto max-w-5xl">
                        {[
                            { step: "01", title: "Consultation", desc: "An in-depth assessment of your anatomy, goals, and medical history to craft a personalized treatment plan." },
                            { step: "02", title: "Treatment", desc: "Performed in our clinical, serene environment using premium products and advanced, safe techniques." },
                            { step: "03", title: "Aftercare", desc: "Comprehensive follow-up and guidance to ensure optimal healing, longevity, and total satisfaction." }
                        ].map((item, idx) => (
                            <FadeIn key={item.step} delay={idx * 200}>
                                <div className="text-center w-full">
                                    <div className="w-16 h-16 mx-auto rounded-full border border-gold/30 flex items-center justify-center font-heading text-xl text-gold-light mb-8 relative after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:w-px after:h-8 after:bg-gold/20 md:after:hidden">
                                        {item.step}
                                    </div>
                                    <h3 className="font-heading text-2xl text-white mb-4">{item.title}</h3>
                                    <p className="font-body text-white/60 text-sm md:text-base leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Visit Us ── */}
            <section className="section bg-ivory relative overflow-hidden">
                <div className="container relative z-10 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full">

                        <div className="flex flex-col justify-center lg:order-1 px-4 md:px-0 text-left">
                            <FadeIn>
                                <span className="inline-block font-body text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
                                    Visit Us
                                </span>
                                <h2 className="font-heading text-4xl md:text-4xl text-charcoal font-light mb-8">
                                    A Sanctuary of <span className="italic text-gold-dark">Refinement</span>
                                </h2>
                                <p className="font-body text-stone-light text-base md:text-lg leading-relaxed mb-10">
                                    Discreetly located in the heart of Manchester, our clinic provides a serene, private environment where your comfort and safety are paramount.
                                </p>

                                <ul className="space-y-6 mb-12 font-body text-charcoal">
                                    <li className="flex items-start gap-4">
                                        <MapPin className="text-gold mt-1 flex-shrink-0" size={20} />
                                        <div>
                                            <strong className="block font-medium mb-1">Clinic Address</strong>
                                            <span className="text-stone-light">123 Deansgate<br />Manchester, M3 2AW</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <Clock className="text-gold mt-1 flex-shrink-0" size={20} />
                                        <div>
                                            <strong className="block font-medium mb-1">Opening Hours</strong>
                                            <span className="text-stone-light">Mon-Fri: 9am - 7pm<br />Sat: 10am - 4pm</span>
                                        </div>
                                    </li>
                                </ul>

                                <div>
                                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary bg-charcoal text-white hover:bg-stone inline-block">
                                        Get Directions
                                    </a>
                                </div>
                            </FadeIn>
                        </div>

                        <div className="relative lg:order-2">
                            <FadeIn delay={200}>
                                <div className="relative rounded-t-full rounded-b-[4rem] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square">
                                    <img
                                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1468&auto=format&fit=crop"
                                        alt="Lumiere Clinic Interior"
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-charcoal/5 pointer-events-none" />
                                </div>
                            </FadeIn>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Final Call to Action ── */}
            <section className="relative py-32 md:py-48 bg-charcoal text-white overflow-hidden">
                <div className="absolute inset-0 bg-charcoal/80" /> {/* Darker overlay for text contrast */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="container relative z-10 w-full">
                    <FadeIn>
                        <div className="text-center w-full mx-auto max-w-4xl">
                            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
                                <span>Ready to Feel </span>
                                <span className="italic text-gold-light">Confident Again?</span>
                            </h2>
                            <p className="font-body text-white/80 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
                                Book your private consultation with Elena Davies today and take the first step towards subtle, expert enhancements.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
                                <Link to="/booking" className="btn bg-gold text-white hover:bg-white hover:text-charcoal px-10 py-5 text-sm tracking-[0.15em] shadow-[0_0_40px_rgba(184,147,90,0.3)] transition-all duration-500 inline-block">
                                    BOOK CONSULTATION
                                </Link>
                                <a href="https://wa.me/440000000000" className="group font-body text-sm font-semibold tracking-[0.1em] uppercase text-white hover:text-white flex items-center justify-center gap-2 transition-colors duration-300">
                                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                                        <Phone size={14} />
                                    </div>
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    )
}
