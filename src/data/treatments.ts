import type { Treatment } from '@/types'

export const treatments: Treatment[] = [
    {
        slug: 'lip-fillers',
        name: 'Lip Fillers',
        shortName: 'Lip Fillers',
        tagline: 'Natural volume. Defined shape. Your features, refined.',
        description:
            'Precise dermal filler placement to enhance volume, define the border, and improve symmetry — tailored to your facial structure.',
        longDescription: `Lip filler is one of the most requested aesthetic treatments, and also one of the most misunderstood. At Lumière, we approach it medically: your lips are a feature within a face, not a product to be inflated.

Before we ever pick up a syringe, Elena will assess your facial proportions, lip anatomy, natural borders, and — most importantly — what you actually want. We believe in enhancement, not transformation.

Using only premium, CE-marked hyaluronic acid fillers with built-in lidocaine for comfort, we work in micro-increments. The result? A look so natural that you won't be identifiable as having 'had something done' — unless you choose to share it.

Whether you're looking for subtle hydration and definition, or more noticeable volume, your treatment plan is entirely bespoke.`,
        image:
            'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=800',
        price: 'From £250',
        duration: '45–60 min',
        downtime: 'Minimal (24–48 hrs)',
        highlights: [
            'Complimentary consultation included',
            'Premium hyaluronic acid fillers with lidocaine',
            'Micro-increment technique for natural results',
            'Two-week review appointment included',
            'Fully reversible — dissolvable with hyaluronidase',
        ],
        process: [
            {
                title: 'Consultation',
                desc: 'We assess your facial anatomy, discuss your goals honestly, and agree a treatment plan. No pressure, ever. Consultations are complimentary.',
            },
            {
                title: 'Preparation',
                desc: 'Topical numbing cream is applied for 20–30 minutes before treatment, ensuring you\'re as comfortable as possible.',
            },
            {
                title: 'Treatment',
                desc: 'Using a fine needle or cannula, Elena precisely places small amounts of filler in targeted areas. The procedure takes 20–30 minutes.',
            },
            {
                title: 'Review',
                desc: 'You\'ll be booked for a complimentary two-week review to assess the final result and make any micro-adjustments if needed.',
            },
        ],
        faqs: [
            {
                q: 'Will my lips look unnatural or overdone?',
                a: 'Our entire technique is built around natural results. We use micro-amounts of filler placed precisely to enhance what\'s already there. If a treatment would make you look "done", we won\'t perform it.',
            },
            {
                q: 'How long do lip fillers last?',
                a: 'Typically 6–12 months, depending on your metabolism, lifestyle, and the amount used. Sun exposure and vigorous exercise can break down filler faster.',
            },
            {
                q: 'What if I don\'t like the result?',
                a: 'Hyaluronic acid fillers are fully reversible. We can dissolve the product using hyaluronidase at any point, returning your lips to their natural state.',
            },
        ],
    },
    {
        slug: 'anti-wrinkle',
        name: 'Anti-Wrinkle Injections',
        shortName: 'Anti-Wrinkle',
        tagline: 'Relaxed. Refreshed. Unmistakably you.',
        description:
            'Precisely dosed muscle relaxant injections that smooth expression lines and prevent new ones forming — without the frozen look.',
        longDescription: `Anti-wrinkle injections (using prescription-only botulinum toxin type A) remain one of the most effective, most studied, and most requested treatments in aesthetic medicine. When administered correctly, the results are subtly transformative: you look rested, refreshed, and like a younger version of yourself — not like you've had anything done.

The difference is in the dosing and placement. Over-treating leads to the frozen, surprised look that gives this treatment a bad reputation. Elena's approach is to treat conservatively, assess at two weeks, and top up if needed. This means first-time patients often start with a lighter dose that can be adjusted — rather than over-treating and waiting months for movement to return.

Treatments target the three classic expressive areas: forehead lines, glabellar lines (the '11s' between your brows), and crow's feet. We also offer brow lift, bunny lines, lip flip, and gummy smile correction.`,
        image:
            'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800',
        price: 'From £190',
        duration: '30–45 min',
        downtime: 'None',
        highlights: [
            'Prescription-only product, administered by qualified prescriber',
            'Conservative dosing methodology — avoid frozen results',
            'Complimentary two-week review and top-up included',
            'No downtime — return to normal activities same day',
            'Results visible within 3–10 days, lasting 3–4 months',
        ],
        process: [
            {
                title: 'Consultation',
                desc: 'Elena assesses your facial movement, discusses your concerns, and explains realistic outcomes for your specific anatomy.',
            },
            {
                title: 'Treatment',
                desc: 'Using an ultra-fine needle, precise units of botulinum toxin are injected into targeted muscles. Most patients describe a light pinching sensation.',
            },
            {
                title: 'Two-week review',
                desc: 'Included complimentary. We assess the result at the point of full effect and administer any top-up needed at no extra charge.',
            },
        ],
        faqs: [
            {
                q: 'Will I look frozen or expressionless?',
                a: 'Not with our approach. We dose conservatively, assess at two weeks, and top up if needed. Movement and expression are preserved — we simply soften the lines.',
            },
            {
                q: 'Does it hurt?',
                a: 'The injections are administered with an ultra-fine needle and take seconds per area. Most patients rate the discomfort as 2–3 out of 10. No numbing cream is usually required.',
            },
            {
                q: 'When will I see results?',
                a: 'The effects begin to appear within 3–5 days and are fully visible at 10–14 days. This is exactly when your complimentary review is scheduled.',
            },
        ],
    },
    {
        slug: 'skin-boosters',
        name: 'Skin Boosters',
        shortName: 'Skin Boosters',
        tagline: 'Deep hydration. Bio-remodelling. A glow that lasts months.',
        description:
            'Injectable hyaluronic acid-based treatments that work below the surface to improve skin quality, elasticity, and radiance from within.',
        longDescription: `Skin boosters are a category of injectable treatment that differ fundamentally from dermal fillers. Rather than adding volume, they work by delivering highly concentrated hyaluronic acid (HA) into the dermis, where it behaves as a biological scaffold — attracting moisture, stimulating collagen production, and improving overall skin architecture.

The result isn't a structural change; it's a quality change. Patients frequently describe their skin as looking 'lit from within', firmer to the touch, and noticeably smoother in texture. Makeup sits better. Skin feels plumper and more resilient.

At Lumière, we offer Profhilo — the gold standard bio-remodelling treatment and the UK's bestselling injectable treatment. Profhilo is injected at five specific anatomical points on each cheek (called the BAP technique), making treatment fast, comfortable, and remarkably effective. A recommended course of two sessions, four weeks apart, delivers optimal results lasting up to six months.`,
        image:
            'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
        price: 'From £300',
        duration: '30 min',
        downtime: 'Minimal (24 hrs)',
        highlights: [
            'Profhilo — the UK\'s leading bio-remodelling treatment',
            'BAP technique: fast, precise, minimal discomfort',
            'Improves skin quality, not structure — the "skin health" treatment',
            'Course of two recommended (4 weeks apart)',
            'Results last up to 6 months',
        ],
        process: [
            {
                title: 'Consultation',
                desc: 'We assess your skin condition, discuss realistic expectations, and confirm suitability. Skin boosters are suitable for most adults — they\'re about skin health, not correction.',
            },
            {
                title: 'Treatment',
                desc: 'Using the BAP (Bio-Aesthetic Points) technique, Profhilo is injected at ten precise points across your face. The procedure takes around 20 minutes.',
            },
            {
                title: 'Session 2',
                desc: 'Four weeks after your first session, a second treatment reinforces the results and triggers further collagen and elastin stimulation.',
            },
            {
                title: 'Maintenance',
                desc: 'A single maintenance session every 6 months keeps results consistent. Many patients notice a visible cumulative improvement over time.',
            },
        ],
        faqs: [
            {
                q: 'Am I a good candidate for Profhilo?',
                a: 'Almost anyone concerned with skin quality rather than volume is a good candidate. Particularly popular with patients in their 30s–50s who want to improve skin texture, hydration, and early signs of laxity.',
            },
            {
                q: 'Is there any downtime?',
                a: 'Some mild swelling and small bumps at injection sites, resolving within 24 hours. Most patients return to work the same day. Avoid saunas, intense exercise, and alcohol for 24 hours.',
            },
            {
                q: 'How many sessions do I need?',
                a: 'A course of two sessions (four weeks apart) is recommended for optimal results. After that, a single maintenance session every 6 months maintains the effect.',
            },
        ],
    },
]

export const getTreatmentBySlug = (slug: string): Treatment | undefined =>
    treatments.find((t) => t.slug === slug)
