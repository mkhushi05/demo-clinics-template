// ── Treatment Types ──────────────────────────────────
export interface Treatment {
    slug: string
    name: string
    shortName: string
    tagline: string
    description: string
    longDescription: string
    image: string
    price: string
    duration: string
    downtime: string
    highlights: string[]
    process: { title: string; desc: string }[]
    faqs: { q: string; a: string }[]
}

// ── FAQ Types ──────────────────────────────────────
export interface FAQ {
    question: string
    answer: string
    category: string
}

// ── Testimonial Types ───────────────────────────────
export interface Testimonial {
    name: string
    initial: string
    treatment: string
    text: string
    rating: number
    date?: string
}

// ── Pricing Types ───────────────────────────────────
export interface PriceItem {
    name: string
    note?: string
    price: string
}

export interface PriceCategory {
    name: string
    items: PriceItem[]
}

// ── Booking Types ───────────────────────────────────
export interface BookingService {
    id: string
    name: string
    description: string
    duration: string
    price: string | null
    depositRequired: boolean
}

export interface BookingState {
    service: BookingService | null
    date: string | null
    time: string | null
    firstName: string
    lastName: string
    email: string
    phone: string
    notes: string
    termsAccepted: boolean
}
