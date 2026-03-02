import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export interface GlanceItem {
    icon: ReactNode
    label: string
    value: string
}

interface TreatmentBeforeAfterProps {
    shortName: string
    beforeImg: string
    afterImg: string
    glanceItems: GlanceItem[]
}

export default function TreatmentBeforeAfter({ shortName, beforeImg, afterImg, glanceItems }: TreatmentBeforeAfterProps) {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-0 lg:gap-14 mb-24 lg:mb-28 items-start">

            {/* LEFT: Before / After Images */}
            <div>
                {/* Before / After labels row */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-3 sm:mb-4">
                    {/* Before label */}
                    <motion.p
                        className="text-[1rem] sm:text-[1.1rem] font-normal text-[#2A2A2A]"
                        style={{ fontFamily: 'var(--font-heading)' }}
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.55, ease: 'easeOut' }}
                    >
                        Before
                    </motion.p>
                    {/* After label */}
                    <motion.p
                        className="text-[1rem] sm:text-[1.1rem] font-normal text-[#2A2A2A]"
                        style={{ fontFamily: 'var(--font-heading)' }}
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
                    >
                        After
                    </motion.p>
                </div>

                {/* Before / After images row */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    {/* Before image */}
                    <motion.div
                        className="w-full overflow-hidden rounded-xl bg-[#e8e2de]"
                        style={{ aspectRatio: '2/3' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    >
                        <img
                            src={beforeImg}
                            alt={`${shortName} Before`}
                            className="w-full h-full object-cover object-top"
                        />
                    </motion.div>

                    {/* After image */}
                    <motion.div
                        className="w-full overflow-hidden rounded-xl bg-[#e8e2de]"
                        style={{ aspectRatio: '2/3' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
                    >
                        <img
                            src={afterImg}
                            alt={`${shortName} After`}
                            className="w-full h-full object-cover object-top"
                        />
                    </motion.div>
                </div>
            </div>

            {/* RIGHT: At a Glance */}
            <div className="flex flex-col pt-8 lg:pt-0">
                {/* Heading — always visible, not animated out */}
                <p
                    className="text-[1.15rem] sm:text-[1.25rem] font-normal text-[#2A2A2A] mb-5"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    {shortName} at a glance
                </p>
                <div className="w-full h-[1px] bg-[#2A2A2A] mb-0" />

                <div className="flex flex-col w-full">
                    {glanceItems.map((item, i) => (
                        <motion.div
                            key={i}
                            className="py-5 flex flex-col justify-center border-b border-[rgba(0,0,0,0.12)]"
                            initial={{ opacity: 0, y: -14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.12 }}
                        >
                            <div className="flex items-center gap-3.5 mb-1.5">
                                <div className="text-[#2A2A2A] flex-shrink-0 w-[20px] h-[20px]">
                                    {item.icon}
                                </div>
                                <p
                                    className="text-[0.95rem] font-medium text-[#2A2A2A]"
                                    style={{ fontFamily: 'var(--font-body)' }}
                                >
                                    {item.label}
                                </p>
                            </div>
                            <p
                                className="text-[0.95rem] font-light text-[#7a7a7a] pl-8"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                {item.value}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-7 w-full"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.55, ease: 'easeOut', delay: glanceItems.length * 0.12 }}
                >
                    <Link
                        to="/booking"
                        className="group flex items-center justify-center gap-3 bg-[#2A2522] text-[#F9F7F5] py-3.5 px-7 rounded-full text-[0.9rem] font-light tracking-wide transition-all duration-300 hover:bg-[#1a1715] hover:scale-[1.02] active:scale-[0.98] shadow-sm w-full"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        View price list
                    </Link>
                </motion.div>
            </div>

        </section>
    )
}
