import { Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

interface TreatmentHeroProps {
    name: string
    description: string
    image: string
}

export default function TreatmentHero({ name, description, image }: TreatmentHeroProps) {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-center mb-14 lg:mb-16 min-h-[85vh] lg:min-h-[90vh]">
            {/* Left: Text & CTA — appears first in DOM so mobile stacks text before image */}
            <div className="flex flex-col items-start text-left w-full pr-0 lg:pr-10 lg:pl-4">
                <h1
                    style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em', lineHeight: '1.1' }}
                    className="text-[3.2rem] sm:text-[4rem] lg:text-[4.5rem] font-medium text-[#2A2624] mb-6 w-full"
                >
                    {name}
                </h1>
                <p
                    style={{ fontFamily: 'var(--font-body)', lineHeight: '1.7' }}
                    className="text-[1.05rem] lg:text-[1.125rem] text-[#7A7A7A] mb-16 w-full max-w-[460px] font-light"
                >
                    {description}
                </p>
                <Link
                    to="/booking"
                    className="group inline-flex items-center gap-2.5 bg-[#6b7565] hover:bg-[#5a6355] text-[#F9F7F5] py-4 px-8 rounded-full text-[1rem] font-medium tracking-wide transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(107,117,101,0.5)] hover:-translate-y-1"
                    style={{ fontFamily: 'var(--font-body)' }}
                >
                    <Calendar size={19} strokeWidth={2} className="transition-transform duration-300 group-hover:scale-110" />
                    Book an appointment
                </Link>
            </div>

            {/* Right: Hero Image */}
            <div className="w-full overflow-hidden rounded-[1.5rem] shadow-sm bg-[#e8e2de]" style={{ aspectRatio: '1.25/1', minHeight: '500px' }}>
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    )
}
