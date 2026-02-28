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
    {
        slug: 'tear-trough',
        name: 'Tear Trough Fillers',
        shortName: 'Tear Trough',
        tagline: 'Brighten tired eyes. Restore lost volume.',
        description: 'Advanced under-eye filler to reduce the appearance of dark circles, hollows, and bags.',
        longDescription: `The delicate under-eye area is often the first to show signs of ageing, stress, and fatigue. Tear trough filler is a highly advanced, specialist treatment designed to restore lost volume in this area, effectively reducing the appearance of dark circles and hollows.\n\nAt Lumière, we use Teoxane Redensity II, specifically formulated and FDA-approved for the under-eye area. Using a micro-cannula technique, the product is placed deeply to provide structural support, lifting the tissue and reflecting light to brighten the eyes.\n\nThis is a complex area requiring expert anatomical knowledge. Elena performs a thorough assessment to ensure suitability, as not all dark circles are caused by volume loss.`,
        image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800&sat=-100',
        price: 'From £350',
        duration: '45 min',
        downtime: 'Up to 3 days',
        category: 'Lip',
        highlights: [
            'Premium Teoxane Redensity II filler',
            'Cannula technique for maximum safety',
            'Reduces hollows and shadowing',
            'Instantly brighter, rested appearance',
        ],
        process: [
            { title: 'Assessment', desc: 'Detailed evaluation of your under-eye area to confirm suitability.' },
            { title: 'Treatment', desc: 'Using a blunt micro-cannula, filler is placed deeply across the tear trough ligament.' },
            { title: 'Review', desc: 'A 3-week review to assess settling and top-up if necessary.' }
        ],
        faqs: [
            { q: 'Will it bruise?', a: 'Because we use a cannula rather than a needle, the risk of bruising is significantly reduced, though mild swelling is normal for a few days.' },
            { q: 'How long does it last?', a: 'Tear trough filler typically lasts longer than other areas, often 12-18 months, as there is little movement in this area.' }
        ]
    },
    {
        slug: 'rhinoplasty',
        name: 'Non-Surgical Rhinoplasty',
        shortName: 'Liquid Nose Job',
        tagline: 'Straighten and refine without surgery.',
        description: 'Strategic placement of dense dermal filler to camouflage dorsal humps, lift the tip, and correct asymmetry.',
        longDescription: `Non-surgical rhinoplasty is a transformative procedure that alters the shape of the nose using dermal fillers, without the risks, cost, or downtime of surgery.\n\nBy strategically placing small volumes of dense, structural hyaluronic acid filler, we can camouflage a dorsal hump (making the nose appear straighter), lift a drooping tip, and correct mild asymmetries. Paradoxically, by adding product, the nose often appears smaller because it is more harmoniously proportioned with the rest of the face.\n\nSafety is our paramount concern. This is a high-risk anatomical area, and Elena's advanced training ensures the procedure is performed with the utmost precision and care, prioritising vascular safety above all.`,
        image: 'https://images.unsplash.com/photo-1505322747495-6afdd3b70760?auto=format&fit=crop&q=80&w=800&sat=-100',
        price: 'From £395',
        duration: '45 min',
        downtime: 'Minimal (24 hrs)',
        category: 'Lip',
        highlights: [
            'Immediate transformative results',
            'No general anaesthetic or surgery required',
            'Camouflage humps and lift the tip',
            'Advanced vascular safety protocols'
        ],
        process: [
            { title: 'Consultation', desc: 'Detailed assessment of nasal anatomy and aesthetic goals.' },
            { title: 'Treatment', desc: 'Tiny boluses of dense filler are placed strategically along the bridge and tip.' },
            { title: 'Review', desc: 'A strict 2-week review to ensure optimal integration and safety.' }
        ],
        faqs: [
            { q: 'Is it painful?', a: 'The nose can be sensitive, but we use numbing cream and fillers containing lidocaine. Most find it entirely tolerable.' },
            { q: 'Can it make my nose smaller?', a: 'While we are physically adding volume, straightening the bridge often creates an optical illusion that the nose is smaller and more refined.' }
        ]
    },
    {
        slug: 'cheek-enhancement',
        name: 'Cheek Enhancement',
        shortName: 'Cheek Fillers',
        tagline: 'Restore mid-face volume and contour.',
        description: 'Structural dermal fillers to lift the mid-face, restore lost volume, and define the cheekbones.',
        longDescription: `The cheeks are the scaffolding of the face. As we age, we lose bone density and the fat pads in our mid-face descend, leading to a flattening of the cheeks and the formation of nasolabial folds (smile lines) and jowls.\n\nCheek enhancement aims to combat this by placing structural, high-G-prime dermal fillers along the zygomatic arch (cheekbone) and within the anterior mid-face. This not only restores a youthful, apple-cheeked volume but also acts to lift the lower face, indirectly softening the lines around the mouth.\n\nWe focus on subtle, elegant restoration rather than over-inflation, ensuring your contours look naturally supported.`,
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800&sat=-100',
        price: 'From £350',
        duration: '45 min',
        downtime: 'Minimal (24-48 hrs)',
        category: 'Lip',
        highlights: [
            'Lifts and supports the entire mid-to-lower face',
            'Restores youthful Ogee curve',
            'Softens nasolabial folds indirectly',
            'Bespoke contouring tailored to your bone structure'
        ],
        process: [
            { title: 'Consultation', desc: 'Full facial assessment to understand how mid-face volume loss is affecting your overall profile.' },
            { title: 'Treatment', desc: 'Strategic injections using a needle or cannula to build structure along the cheekbone.' },
            { title: 'Review', desc: 'A 2-week follow-up to assess the lift and integration.' }
        ],
        faqs: [
            { q: 'Will I look "puffy"?', a: 'No. We use structural fillers placed deeply on the bone to provide lift, not superficial soft fillers that cause puffiness.' },
            { q: 'How many syringes will I need?', a: 'This varies entirely on the degree of volume loss. Typically, patients require 1-2ml for noticeable but natural restoration.' }
        ]
    },
    {
        slug: 'chin-profiling',
        name: 'Chin Profiling',
        shortName: 'Chin Fillers',
        tagline: 'Balance your profile. Define your jawline.',
        description: 'Precise filler placement to project a recessed chin, creating harmony with the nose and lips.',
        longDescription: `The chin plays a critical role in facial harmony and attractiveness, yet it is often overlooked. A recessed or 'weak' chin can make the nose appear larger than it is, the lips protrude, and contribute to the appearance of a double chin.\n\nChin profiling uses dense dermal fillers to elongate the face, project the chin forward, and define the transition between the jawline and the neck. By bringing the chin into alignment with the 'Ricketts line' (the ideal line connecting the tip of the nose to the chin), we can dramatically improve your side profile.\n\nFor male patients, we can widen the chin to create a stronger, more masculine lower face. For female patients, we focus on a refined, V-shape taper.`,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800&sat=-100',
        price: 'From £300',
        duration: '45 min',
        downtime: 'Minimal (24-48 hrs)',
        category: 'Lip',
        highlights: [
            'Dramatically improves side profile balance',
            'Can make the nose appear smaller',
            'Helps tighten the appearance of the submental (under chin) area',
            'Tailored to male (square) or female (tapered) aesthetics'
        ],
        process: [
            { title: 'Profile Analysis', desc: 'We assess your facial proportions from multiple angles, particularly the side profile.' },
            { title: 'Treatment', desc: 'Dense filler is placed deeply onto the chin bone to provide forward projection and length.' },
            { title: 'Review', desc: 'A follow-up at 2 weeks to ensure perfect symmetry and integration.' }
        ],
        faqs: [
            { q: 'Can this help with my double chin?', a: 'Yes. By projecting the chin forward, the skin beneath the chin is pulled tighter, which can significantly reduce the appearance of a double chin.' },
            { q: 'Does it feel hard?', a: 'Because the filler is placed deeply on the bone, it integrates with your own tissue and feels like your natural chin.' }
        ]
    },
    {
        slug: 'jawline-sculpting',
        name: 'Jawline Sculpting',
        shortName: 'Jawline Fillers',
        tagline: 'Sharp, elegant definition. Reduced jowls.',
        description: 'Creating a crisp, defined separation between the face and neck using structural dermal fillers.',
        longDescription: `A sharp, defined jawline is a universal sign of youth and vitality. Over time, gravity, bone resorption, and skin laxity cause the jawline to soften and jowls to form, blurring the separation between the face and neck.\n\nJawline sculpting involves systematically placing high-density filler along the mandibular angle and body. This process strengthens the corner of the jaw, straightens the jawline itself, and camouflages early jowling by filling the pre-jowl sulcus.\n\nThis treatment is highly bespoke. We can create a sharp, chiselled look for men, or a soft, elegant definition for women that lifts the lower face without adding unwanted bulk.`,
        image: 'https://images.unsplash.com/photo-1542385317-5674c0c1b017?auto=format&fit=crop&q=80&w=800&sat=-100',
        price: 'From £500',
        duration: '60 min',
        downtime: 'Mild swelling (2-3 days)',
        category: 'Lip',
        highlights: [
            'Creates a sharp facial frame and neck separation',
            'Camouflages early signs of jowling',
            'Strengthens the mandibular angle',
            'Often combined with chin profiling for maximum impact'
        ],
        process: [
            { title: 'Consultation', desc: 'We evaluate jaw width, jowl severity, and neck laxity to determine the correct approach.' },
            { title: 'Treatment', desc: 'Using a cannula for safety and comfort, thick structural filler is laid down along the jawbone.' },
            { title: 'Review', desc: 'A thorough review at 2-3 weeks once any initial swelling has subsided.' }
        ],
        faqs: [
            { q: 'Will it make my face look too wide?', a: 'If you are female, we use techniques that pull the tissue back and sharpen the angle without adding lateral width, avoiding a masculinising effect.' },
            { q: 'How much filler is needed?', a: 'The jawline requires a significant amount of product to create a visible change. Most patients require anywhere from 2ml to 4ml across the jaw and chin.' }
        ]
    },
    {
        slug: 'microneedling',
        name: 'Medical Microneedling',
        shortName: 'Microneedling',
        tagline: 'Collagen induction therapy for flawless texture.',
        description: 'Advanced skin needling to treat acne scarring, pigmentation, large pores, and fine lines.',
        longDescription: `Medical microneedling (also known as collagen induction therapy) is a powerhouse treatment for overall skin rejuvenation. Using a medical-grade device (such as SkinPen), we create thousands of controlled micro-injuries in the dermis.\n\nThis process triggers the body's natural wound-healing cascade, stimulating the production of new collagen and elastin in a highly controlled manner. The result is a total restructuring of the skin's surface.\n\nIt is highly effective for reducing the appearance of acne scars, shrinking enlarged pores, smoothing fine lines, and breaking up stubborn hyperpigmentation. We finish the treatment with a cooling, hydrating hyaluronic acid mask to soothe the skin and accelerate healing.`,
        image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800&sat=-100',
        price: 'From £180',
        duration: '45 min',
        downtime: 'Redness (24-48 hrs)',
        category: 'Skin',
        highlights: [
            'Gold standard for acne scarring and textural issues',
            'Safe for all skin types and colours',
            'Stimulates your own natural collagen production',
            'Course of 3-6 recommended for severe scarring'
        ],
        process: [
            { title: 'Preparation', desc: 'The skin is thoroughly cleansed, and a topical numbing cream is applied for 20 minutes.' },
            { title: 'Treatment', desc: 'The microneedling device is passed over the skin with a hyaluronic acid glide. You will feel a vibrating sensation.' },
            { title: 'Aftercare', desc: 'A soothing mask is applied. Your skin will look and feel like it has a mild sunburn for 1-2 days.' }
        ],
        faqs: [
            { q: 'Does it bleed?', a: 'Pinpoint bleeding is a normal and necessary part of medical-depth microneedling. It stops immediately and is cleaned before you leave.' },
            { q: 'When will I see results?', a: 'Your skin will look fresher after one week, but new collagen production takes 4-6 weeks, with results continuing to improve for months.' }
        ]
    }
]

export const getTreatmentBySlug = (slug: string): Treatment | undefined =>
    treatments.find((t) => t.slug === slug)
