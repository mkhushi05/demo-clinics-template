import { Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface TreatmentHeroProps {
    name: string
    description: string
    image: string
}

export default function TreatmentHero({ name, description, image }: TreatmentHeroProps) {
    return (
        /*
         * Layout matches the srgn reference exactly:
         *  - Left col (40%): text block top-aligned, generous but precise spacing
         *  - Right col (60%): landscape 4:3 image, top-aligned to content area
         *  - Animate: text arrives first, image slides in 0.35s later
         */
        <section className="w-full grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6 lg:gap-14 items-start mb-10 lg:mb-20">

            {/* ── Left: Text & CTA ── */}
            <div className="flex flex-col items-start text-left w-full order-2 lg:order-1 mt-4 lg:mt-8">

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                    style={{ fontFamily: 'var(--font-heading)', lineHeight: '1.12', letterSpacing: '-0.02em' }}
                    className="text-[2.75rem] sm:text-[3.25rem] lg:text-[3.6rem] font-normal text-[#1A1614] mb-6 lg:mb-8 w-full"
                >
                    {name.replace('-', '\u2011')}
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    style={{ fontFamily: 'var(--font-body)', lineHeight: '1.8' }}
                    className="text-[1rem] lg:text-[1.05rem] text-[#6B6B6B] mb-10 lg:mb-12 w-full max-w-[400px] font-light"
                >
                    {description}
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                >
                    <Link
                        to="/booking"
                        className="group inline-flex items-center gap-2.5 rounded-full text-[0.88rem] tracking-wide font-normal transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                        style={{
                            fontFamily: 'var(--font-body)',
                            backgroundColor: '#4A6741',
                            color: '#ffffff',
                            padding: '13px 26px'
                        }}
                    >
                        <Calendar size={14} strokeWidth={1.5} style={{ color: '#cfe0cd' }} className="flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-[1px]" />
                        <span style={{ color: '#ffffff' }}>Book an appointment</span>
                    </Link>
                </motion.div>
            </div>

            {/* ── Right: Hero Image ── landscape 4:3, top-aligned, page-loads after text */}
            <motion.div
                className="w-full overflow-hidden rounded-2xl bg-[#e8e2de] order-1 lg:order-2"
                style={{ aspectRatio: '4/3' }}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            >
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </motion.div>

        </section>
    )
}
