import { Link } from 'react-router-dom'
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
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-24 lg:mb-28">

            {/* Images Column: Always side-by-side, takes up 8/12 cols on desktop */}
            <div className="lg:col-span-8 grid grid-cols-2 gap-4 sm:gap-6">
                {/* Column 1: Before */}
                <div className="flex flex-col">
                    <p
                        className="text-[0.95rem] sm:text-[1rem] font-medium mb-3 sm:mb-4 text-[#2A2A2A]"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        Before
                    </p>
                    <div
                        className="w-full overflow-hidden rounded-xl bg-[#e8e2de]"
                        style={{ aspectRatio: '3/4' }}
                    >
                        <img
                            src={beforeImg}
                            alt={`${shortName} Before`}
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                </div>

                {/* Column 2: After */}
                <div className="flex flex-col">
                    <p
                        className="text-[0.95rem] sm:text-[1rem] font-medium mb-3 sm:mb-4 text-[#2A2A2A]"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        After
                    </p>
                    <div
                        className="w-full overflow-hidden rounded-xl bg-[#e8e2de]"
                        style={{ aspectRatio: '3/4' }}
                    >
                        <img
                            src={afterImg}
                            alt={`${shortName} After`}
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                </div>
            </div>

            {/* Column 3: At a Glance */}
            <div className="lg:col-span-4 flex flex-col pt-4 lg:pt-0">
                <p
                    className="text-[1.2rem] font-medium mb-6 text-[#2A2A2A]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    {shortName} at a glance
                </p>
                <div className="w-full h-[1.5px] bg-[#2A2A2A]" />

                <div className="flex flex-col w-full">
                    {glanceItems.map((item, i) => (
                        <div key={i} className="py-6 flex flex-col justify-center border-b border-[rgba(0,0,0,0.85)]">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="text-[#2A2A2A] flex-shrink-0 w-[22px] h-[22px]">
                                    {item.icon}
                                </div>
                                <p
                                    className="text-[1rem] font-medium text-[#2A2A2A]"
                                    style={{ fontFamily: 'var(--font-body)' }}
                                >
                                    {item.label}
                                </p>
                            </div>
                            <p
                                className="text-[1rem] font-light text-[#7a7a7a]"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="my-8 w-full">
                    <Link
                        to="/booking"
                        className="group flex items-center justify-center gap-3 bg-[#2A2522] text-[#F9F7F5] py-4 px-8 rounded-[2rem] text-[1rem] font-medium tracking-wide transition-all duration-300 hover:bg-[#1a1715] hover:scale-[1.02] shadow-sm w-full"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:scale-110"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                        Speak with our experts
                    </Link>
                </div>
            </div>

        </section>
    )
}
