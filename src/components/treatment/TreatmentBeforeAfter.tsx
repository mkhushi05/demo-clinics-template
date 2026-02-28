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
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-6 lg:gap-8 mb-24 lg:mb-28">

            {/* Column 1: Before */}
            <div className="flex flex-col">
                <p
                    className="text-[1rem] font-medium mb-4 text-[#2A2A2A]"
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
                    className="text-[1rem] font-medium mb-4 text-[#2A2A2A]"
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

            {/* Column 3: At a Glance */}
            <div className="flex flex-col pt-0 lg:pt-0 pl-0 lg:pl-6">
                <p
                    className="text-[1.1rem] font-medium mb-4 text-[#2A2A2A]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    {shortName} at a glance
                </p>
                <div className="w-full h-[1.5px] bg-[#2A2A2A]" />

                <div className="flex flex-col w-full divide-y divide-[rgba(0,0,0,0.15)]">
                    {glanceItems.map((item, i) => (
                        <div key={i} className="py-5 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-1.5">
                                <div className="text-[#2A2A2A] flex-shrink-0 w-[18px] h-[18px]">
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
                                className="text-[0.9rem] font-light text-[#6b6260] pl-[30px]"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-6">
                    <Link
                        to="/pricing"
                        className="inline-flex items-center justify-center border border-[#5a6454] text-[#5a6454] hover:bg-[#5a6454] hover:text-white px-6 py-2.5 rounded-full text-[0.85rem] font-medium transition-colors"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        View price list
                    </Link>
                </div>
            </div>

        </section>
    )
}
