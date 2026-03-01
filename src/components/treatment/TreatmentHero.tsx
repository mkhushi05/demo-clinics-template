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
            {/* Left: Text & CTA — ordered second on mobile, first on desktop */}
            <div className="flex flex-col items-start text-left w-full pr-0 lg:pr-10 lg:pl-4 order-2 lg:order-1">
                <h1
                    style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em', lineHeight: '1.1' }}
                    className="text-[3.2rem] sm:text-[4rem] lg:text-[4.5rem] font-medium text-[#2A2624] mb-6 w-full"
                >
                    {name}
                </h1>
                <p
                    style={{ fontFamily: 'var(--font-body)', lineHeight: '1.7' }}
                    className="text-[1.05rem] lg:text-[1.125rem] text-[#7A7A7A] mb-12 lg:mb-16 w-full max-w-[460px] font-light"
                >
                    {description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link
                        to="/booking"
                        className="group inline-flex items-center justify-center gap-3 bg-[#6b7565] text-[#F9F7F5] py-4 px-9 rounded-full text-[0.95rem] font-medium tracking-wide transition-all duration-300 hover:bg-[#5a6355] hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        <Calendar size={18} strokeWidth={2} className="transition-transform duration-300 group-hover:-translate-y-[1px]" />
                        Book an appointment
                    </Link>
                </div>
            </div>

            {/* Right: Hero Image - ordered first on mobile, second on desktop */}
            <div className="w-full overflow-hidden rounded-[1.5rem] bg-[#e8e2de] order-1 lg:order-2 aspect-[4/3] sm:aspect-[1.25/1] min-h-[350px] lg:min-h-[500px]">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    )
}
