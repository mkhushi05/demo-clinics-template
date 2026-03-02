import type { Treatment } from '@/types'

export const treatments: Treatment[] = [
    {
        slug: 'lip-fillers',
        name: 'Lip Fillers',
        shortName: 'Lip Fillers',
        tagline: 'More definition. More you. No trout pout.',
        description:
            'Natural-looking lip filler by a qualified nurse prescriber. More shape, more hydration, more confidence — nothing that screams "I\'ve had something done."',
        longDescription: `If you've been thinking about lip filler for a while but keep stopping yourself because you're scared of looking overdone — you're not alone. That's the number one thing we hear.

The short version: natural lip filler is possible. It happens every day. But it depends almost entirely on who's doing it and how they approach it.

At Lumière, Elena works in tiny increments, starting conservatively and building gradually based on your anatomy and what you actually want. She'll look at your whole face — not just your lips. She'll ask what you want to improve, and (just as importantly) what you never want to look like.

We use premium CE-marked hyaluronic acid filler with built-in numbing, so discomfort is minimal. And because hyaluronic acid is fully reversible, nothing is permanent — you're always in control.

Most of our first-time clients come in for 0.5ml — subtle definition, a little more hydration, and a bit of shape. No one at work will know. Your mum probably won't notice. But you will.`,
        image:
            'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=800',
        price: 'From £250',
        duration: '45–60 min',
        downtime: 'Minimal (24–48 hrs)',
        highlights: [
            'Free consultation — no obligation, no pressure',
            'Conservative approach: we always start subtle',
            'Premium filler with built-in numbing (less painful)',
            'Two-week review included — we adjust if needed',
            'Fully reversible if you ever change your mind',
        ],
        process: [
            {
                title: 'Your consultation',
                desc: 'Before we do anything, Elena sits with you and listens. You\'ll talk about your goals, your concerns, what you definitely don\'t want. She\'ll assess your lip anatomy and facial proportions, and tell you honestly what she thinks will work best. No pressure, no sales pitch.',
            },
            {
                title: 'Numbing',
                desc: 'A topical numbing cream is applied for 20–30 minutes before treatment. Most people rate the discomfort as 2–3/10. The filler itself also contains lidocaine, so you\'ll feel comfortable throughout.',
            },
            {
                title: 'Treatment',
                desc: 'Elena precisely places small amounts of filler using a fine needle or cannula. The whole thing takes 20–30 minutes. You\'ll see the result immediately, though some mild swelling is normal in the first 24-48 hours.',
            },
            {
                title: 'Two-week review',
                desc: 'Included with your treatment at no extra charge. By two weeks, any swelling has settled and the filler has fully integrated. If you want a tiny bit more, or anything adjusted, this is when we do it.',
            },
        ],
        faqs: [
            {
                q: 'Will my lips look obvious or overdone?',
                a: 'This is the question we get most often — and the honest answer is: it completely depends on the practitioner and how much filler is used. Our approach is conservative by default. Elena uses micro-amounts placed precisely to add shape and hydration. If she thinks a treatment would make you look "done", she won\'t do it. We\'d rather send you home without filler than send you home with too much.',
            },
            {
                q: 'I\'m scared of the "trout pout" look — is that a real risk?',
                a: 'Yes — if you go to the wrong place, or ask for too much volume. That\'s why who does it matters more than anything else. At Lumière, Elena won\'t overfill. She\'ll be honest if you\'re asking for something that will look unnatural on your face. The goal is always "nobody can tell but everyone says you look great."',
            },
            {
                q: 'Does lip filler hurt?',
                a: 'Less than most people expect. We use numbing cream beforehand, and the filler contains local anaesthetic. Most clients rate it 2–3 out of 10. If it\'s taking you from 0 to 10, something isn\'t right — that\'s not how it should feel.',
            },
            {
                q: 'What if I don\'t like the result?',
                a: 'Hyaluronic acid fillers are fully reversible using an enzyme called hyaluronidase. If you\'re ever unhappy — whether that\'s a week after treatment or a year later — we can dissolve the filler and return your lips to their natural state.',
            },
            {
                q: 'How long does lip filler last?',
                a: 'Typically 6–12 months. Your metabolism, lifestyle, and the amount placed all affect how quickly it breaks down. Vigorous exercise, heat, and sun exposure can speed this up. Your two-week review is a great time to ask about timelines specific to you.',
            },
            {
                q: 'Can I come in the day before an event?',
                a: 'We\'d recommend at least 10–14 days before an event. Initial swelling settles in 24–48 hours, but filler can look its absolute best at around 2 weeks when it\'s fully integrated. Plan ahead where you can.',
            },
        ],
    },
    {
        slug: 'anti-wrinkle',
        name: 'Anti-Wrinkle Injections',
        shortName: 'Anti-Wrinkle',
        tagline: 'Look rested. Not frozen.',
        description:
            'Prescription anti-wrinkle injections that smooth forehead lines, frown lines, and crow\'s feet — so you look refreshed, not "done". Conservative dosing, two-week review included.',
        longDescription: `You know what you don't want. You don't want to look like you can't move your face. You don't want that blank, surprised expression. You've seen it on people and it's exactly why you've been hesitant.

Here's the truth: the "frozen" look is a dosing problem. It happens when too many units are injected into the wrong areas. It doesn't have to be that way.

Elena's approach is deliberately conservative. She doses lighter to begin with, assesses you at two weeks when the full effect has settled, and only tops up if you both agree it needs it. That way, movement and expression are preserved — the lines just soften.

Anti-wrinkle injections work on the three most common areas: forehead lines, the "11s" between your brows, and crow's feet at the corners of your eyes. We also offer brow lift, lip flip, bunny lines, and gummy smile correction.

No downtime. Most people go straight back to work. Results start showing in 3–5 days, and are fully visible by 10–14 days — which is exactly when your complimentary review is booked.`,
        image:
            'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800',
        price: 'From £190',
        duration: '30–45 min',
        downtime: 'None',
        highlights: [
            'Prescription-only product — only a qualified prescriber can do this legally',
            'Conservative dosing — you won\'t look frozen',
            'Complimentary two-week review and top-up included',
            'No downtime — back to work the same day',
            'Results visible in 3–10 days, lasting 3–4 months',
        ],
        process: [
            {
                title: 'Consultation',
                desc: 'Elena assesses how your muscles move, where your lines form, and what results are realistic for your anatomy. She\'ll explain what she\'s doing and why — no jargon, just honesty.',
            },
            {
                title: 'Treatment',
                desc: 'Ultra-fine needle, a few quick injections, done in under 20 minutes. Most people compare it to a light pinch. You can drive home and go back to your normal day straight after.',
            },
            {
                title: 'Two-week review',
                desc: 'Included at no extra cost. By two weeks, the product has fully settled. You\'ll come back so Elena can assess the result and add any top-up needed. First-timers especially benefit from this — it takes the pressure off getting it perfect first time.',
            },
        ],
        faqs: [
            {
                q: 'Will I look frozen or expressionless?',
                a: 'Not with our approach. The frozen look comes from over-treatment. Elena doses conservatively, reviews you at two weeks, and tops up only if both of you agree it\'s needed. Expression and movement are preserved — the lines just soften.',
            },
            {
                q: 'How is this different from a Botox clinic or a cheap salon?',
                a: 'Botulinum toxin is a prescription-only medication in the UK. That means legally, only a qualified prescriber (doctor, dentist, nurse prescriber, or pharmacist prescriber) can carry out this treatment. Elena is an Independent Nurse Prescriber with a Level 7 postgraduate qualification in aesthetics. She has full medical training and emergency protocols in place. Cheap clinics often cut these corners — it\'s not worth the risk.',
            },
            {
                q: 'Does it hurt?',
                a: 'It\'s a quick, light sting — most people rate it 2–3/10. The injections themselves take seconds per area. No numbing needed.',
            },
            {
                q: 'When will I see results?',
                a: 'Effects start to show within 3–5 days and are fully visible at 10–14 days. Your complimentary review is booked for exactly this point.',
            },
            {
                q: 'Can I go back to work after?',
                a: 'Yes — there\'s no downtime. A few tiny injection points fade within hours. You can go straight back to work, but avoid intense exercise, lying flat, or rubbing the area for the rest of the day.',
            },
            {
                q: 'I\'m worried about looking different at work. Will anyone notice?',
                a: 'That\'s the point — they shouldn\'t. Done well, anti-wrinkle treatment makes you look refreshed and well-rested, not noticeably "changed". Colleagues might say you look well, or ask if you\'ve been on holiday. That\'s the goal.',
            },
        ],
    },
    {
        slug: 'skin-boosters',
        name: 'Skin Boosters',
        shortName: 'Skin Boosters',
        tagline: 'Your skin, but properly hydrated. From the inside.',
        description:
            'Injectable skin hydration that improves texture, elasticity, and glow from within. Not a filler — a skin health treatment. Profhilo is the UK\'s top-selling injectable for a reason.',
        longDescription: `If you've ever noticed that your makeup doesn't sit right, your skin looks dull even when you're not tired, or that your skin just doesn't look as good as it used to — skin boosters might be exactly what you need.

Profhilo is not a dermal filler. It doesn't add volume or change your structure. Instead, it delivers a high concentration of hyaluronic acid deep into the skin, where it acts as a biological scaffold — attracting moisture, stimulating your own collagen and elastin, and improving how your skin looks and feels from within.

The results are skin that looks "lit from within". Smoother texture. Makeup that sits better. Skin that feels more resilient and plumper.

Treatment is fast — 10 injection points across each cheek using the BAP (Bio-Aesthetic Points) technique, taking around 20 minutes. A course of two sessions four weeks apart gives the best results, then a single maintenance session every six months keeps things looking good.

This is the treatment for anyone who wants better skin quality without wanting to "look different."`,
        image:
            'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
        price: 'From £300',
        duration: '30 min',
        downtime: 'Minimal (24 hrs)',
        highlights: [
            'Profhilo — the UK\'s bestselling injectable skin treatment',
            'Improves skin quality, not structure — more glow, not more volume',
            'Fast treatment: 10 points, 20 minutes',
            'Course of two recommended (4 weeks apart)',
            'Results last up to 6 months',
        ],
        process: [
            {
                title: 'Consultation',
                desc: 'We assess your skin condition, talk through what you\'ve noticed and what you want to improve. Skin boosters suit almost everyone — this is a skin health treatment, not a correction.',
            },
            {
                title: 'Session one',
                desc: 'Using the BAP technique, Profhilo is injected at 10 precise points across your face. 20 minutes. Mild swelling at injection sites resolves within 24 hours.',
            },
            {
                title: 'Session two (4 weeks later)',
                desc: 'The second session reinforces results and triggers further collagen stimulation. This is when you\'ll really start to notice the difference in skin quality and glow.',
            },
            {
                title: 'Maintenance',
                desc: 'A single session every 6 months keeps results consistent. Many patients notice cumulative improvement over time — skin that looks better at 12 months than it did at 3.',
            },
        ],
        faqs: [
            {
                q: 'What\'s the difference between skin boosters and filler?',
                a: 'Filler adds volume and changes structure. Skin boosters (like Profhilo) don\'t add volume — they hydrate from within and stimulate your own collagen. You won\'t look "different" — you\'ll just look like a healthier, more glowing version of yourself.',
            },
            {
                q: 'Will I look noticeably swollen after?',
                a: 'You may have 10 small bumps at the injection sites which typically resolve within 24 hours. Most people come in on a Friday and look completely normal by the weekend. Avoid saunas, heavy exercise, and alcohol for 24 hours after.',
            },
            {
                q: 'When will I see a difference?',
                a: 'Skin feels more hydrated quite quickly — within a week or two. But the real improvement in skin quality, texture, and glow develops over 4–6 weeks as collagen stimulation kicks in. Your skin at 8 weeks will look noticably better than at 2 weeks.',
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
        tagline: 'Stop looking tired when you\'re not.',
        description: 'Under-eye filler to reduce hollowing, dark shadows, and that permanent "tired" look — using specialist product and cannula technique for maximum safety.',
        longDescription: `"I just look tired." That's what we hear most often from people who come in asking about this treatment.

The under-eye area is one of the first places to show signs of stress, poor sleep, and ageing. As volume is lost, the skin can hollow slightly, which casts a shadow — creating the appearance of deep dark circles that no amount of concealer can fully fix.

Tear trough filler is an advanced, specialist treatment that restores that lost volume, lifts the skin, and reflects light better — making the eyes look brighter and better rested.

We use Teoxane Redensity II, a product specifically formulated for the delicate under-eye area. Instead of a needle, Elena uses a micro-cannula — which means less bruising, less risk, and a more precise, even result.

This is a complex area that requires a practitioner with genuine anatomical knowledge. Elena performs a thorough assessment first to confirm suitability — not all under-eye shadows are caused by volume loss, and treating the wrong cause won't get the result you want.`,
        image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800&sat=-100',
        price: 'From £350',
        duration: '45 min',
        downtime: 'Up to 3 days',
        highlights: [
            'Specialist Teoxane Redensity II filler (designed for under-eye)',
            'Cannula technique — less bruising, safer than needle',
            'Addresses hollowing and shadowing that concealer can\'t fix',
            'Thorough pre-assessment to confirm suitability',
            'Results last 12–18 months in most patients',
        ],
        process: [
            { title: 'Assessment', desc: 'A detailed evaluation of your under-eye area to understand the cause of your dark circles. Not all under-eye concerns are caused by volume loss — we\'ll confirm the right approach for you before treatment.' },
            { title: 'Treatment', desc: 'Using a blunt micro-cannula for safety, Teoxane Redensity II is carefully placed across the tear trough. The result is immediate lightening of the shadows and a more lifted, rested appearance.' },
            { title: 'Review', desc: 'A 3-week review appointment to assess how the product has settled and whether any minor top-up is needed.' }
        ],
        faqs: [
            { q: 'Will it bruise?', a: 'Because we use a blunt micro-cannula rather than a needle, the risk of bruising is significantly lower than with other techniques. Some mild swelling for a few days is normal. We\'d suggest planning this away from any major events — a long weekend is ideal.' },
            { q: 'I\'ve heard this area is risky — should I be worried?', a: 'The tear trough is a more complex area to treat, which is exactly why you shouldn\'t go to just anyone. Elena is trained in advanced techniques and vascular safety, and uses a cannula specifically to reduce risk. The assessment process is thorough — if you\'re not a suitable candidate, we\'ll tell you.' },
            { q: 'How long does it last?', a: 'Tear trough filler typically lasts 12–18 months — longer than most areas because there\'s very little movement in this area.' }
        ]
    },
    {
        slug: 'rhinoplasty',
        name: 'Non-Surgical Rhinoplasty',
        shortName: 'Liquid Nose Job',
        tagline: 'Change how your nose looks. No surgery. No recovery.',
        description: 'Dermal filler placed strategically to camouflage bumps, lift the tip, and create better balance — without going under the knife. Immediate results, no general anaesthetic.',
        longDescription: `Surgery feels like a big step. Recovery time, general anaesthetic, the cost, the permanence of it. Non-surgical rhinoplasty offers a way to significantly change how your nose looks without any of that.

By placing small amounts of dense dermal filler in precise locations, Elena can camouflage a dorsal bump to make the nose appear straighter, lift a drooping tip, and correct mild asymmetries. Counterintuitively — even though we're adding product — noses often look smaller after treatment because the proportions become more harmonious.

Results are immediate. Recovery is minimal. And while the result isn't permanent in the way surgery is, most patients find they can maintain results with periodic top-ups.

Safety is the absolute priority in this area. The nose has a complex blood supply — which is why this treatment must only be performed by an experienced practitioner with advanced training in vascular anatomy. Elena holds advanced complications management training and follows strict safety protocols for every treatment.`,
        image: 'https://images.unsplash.com/photo-1505322747495-6afdd3b70760?auto=format&fit=crop&q=80&w=800&sat=-100',
        price: 'From £395',
        duration: '45 min',
        downtime: 'Minimal (24 hrs)',
        highlights: [
            'Immediate results — visible straight after treatment',
            'No general anaesthetic, no surgery, no recovery week',
            'Camouflage bumps, lift the tip, improve symmetry',
            'Advanced vascular safety protocols in place',
            'Lasts 12–18 months with top-up to maintain'
        ],
        process: [
            { title: 'Consultation', desc: 'Elena assesses your nasal anatomy from multiple angles to understand what\'s bothering you and what filler can realistically achieve. Important: she\'ll be honest if surgery is likely to give a better outcome for your specific concern.' },
            { title: 'Treatment', desc: 'Tiny, precise amounts of dense structural filler are placed at specific points along the bridge and tip using a fine needle. The procedure takes around 20 minutes.' },
            { title: 'Review', desc: 'A strict two-week review to assess how the filler has integrated and confirm your safety and satisfaction.' }
        ],
        faqs: [
            { q: 'Can filler make my nose look smaller?', a: 'It can appear smaller, yes. By straightening the bridge and improving proportions, the nose sits more harmoniously in your face — which has the visual effect of making it look less prominent, even though we\'re technically adding volume.' },
            { q: 'Is it painful?', a: 'We use numbing cream beforehand. The nose can be more sensitive than other areas, but most clients find it completely tolerable — a 3–4/10 at most.' },
            { q: 'Is it safe?', a: 'In the right hands, yes. The nose area requires advanced anatomical knowledge due to its blood supply. Elena is trained in advanced vascular safety and complications management. This is an area where experience really matters — please don\'t choose solely on price.' }
        ]
    },
    {
        slug: 'cheek-enhancement',
        name: 'Cheek Enhancement',
        shortName: 'Cheek Fillers',
        tagline: 'Restore the lift you had five years ago.',
        description: 'Structural cheek filler to restore lost mid-face volume, lift the lower face, and bring back the contour you\'ve noticed disappearing — without looking overdone.',
        longDescription: `Have you noticed your face looking flatter? Your cheekbones less defined? More lines appearing around your mouth and nose? That's not just your imagination — and it's not just ageing. It's volume loss.

As we get older, we lose bone density and the fat pads in our cheeks begin to descend. The effect is a flattening of the mid-face, which makes smile lines deeper and the lower face heavier.

Cheek enhancement restores that lost volume by placing structural dermal filler along and above the cheekbone. This doesn't just restore the cheeks — it also acts as a support for the entire lower face, which can indirectly soften the smile lines and early jowling around the mouth.

Done well, cheek filler looks completely natural — like your face from five years ago. Done badly, it creates the puffy, overfilled look. The difference is in technique and product placement — deep, structural placement gives a natural lift; superficial placement gives puffiness.

Elena's approach focuses on structural restoration, not volume inflation.`,
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800&sat=-100',
        price: 'From £350',
        duration: '45 min',
        downtime: 'Minimal (24-48 hrs)',
        highlights: [
            'Restores mid-face volume lost through ageing',
            'Lifts and supports the entire lower face',
            'Softens smile lines indirectly — without filler in that area',
            'Structural placement — natural lift, not puffiness',
            'Bespoke to your bone structure and degree of volume loss'
        ],
        process: [
            { title: 'Consultation', desc: 'A full facial assessment to understand how your mid-face has changed over time and what restoration would look natural for your anatomy.' },
            { title: 'Treatment', desc: 'Structural filler is placed using a needle or cannula along and above the cheekbone. You may look slightly swollen for 24-48 hours — this resolves to reveal the final result.' },
            { title: 'Review', desc: 'A two-week review to assess the lift, integration, and final appearance.' }
        ],
        faqs: [
            { q: 'Will I look puffy or overfilled?', a: 'Not with our approach. The filler is placed deeply on the bone — this provides natural structural lift. Superficial filler placed in the soft tissue of the cheek is what creates puffiness. We don\'t do that.' },
            { q: 'How much filler will I need?', a: 'This varies entirely based on your degree of volume loss. Most patients need 1–2ml across both cheeks for a noticeable but natural result. Elena will discuss her recommendation during consultation.' },
            { q: 'Will it make my face look too wide?', a: 'No — for female patients, filler is placed to restore the apex of the cheek and provide lift, not to widen the face laterally. The result should look like more definition and structure, not a broader face.' }
        ]
    },
    {
        slug: 'chin-profiling',
        name: 'Chin Profiling',
        shortName: 'Chin Fillers',
        tagline: 'Better side profile. Better facial balance.',
        description: 'Filler placed precisely on the chin to bring your side profile into balance — making the nose appear smaller, the face more defined, and the jawline sharper.',
        longDescription: `Your chin plays a bigger role in your face than most people realise. A recessed chin makes the nose appear larger. It makes the lips look like they protrude more. It can make the face look heavier from the side. And it can contribute to the appearance of a double chin.

Chin profiling uses dense, structural dermal filler to project the chin forward, elongate the face, and create better harmony between your nose, lips, and jawline.

The improvement in side profile is one of the most dramatic results in non-surgical aesthetics — often clients are amazed at how different photographs look after this treatment.

For women, Elena creates a refined, elegant projection that creates a cleaner jawline without masculinising the face. For male clients, we can create a broader, stronger chin that suits a more defined lower face.

No surgery. No recovery. The difference is immediate.`,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800&sat=-100',
        price: 'From £300',
        duration: '45 min',
        downtime: 'Minimal (24-48 hrs)',
        highlights: [
            'Dramatically improves side profile balance',
            'Makes the nose appear smaller without touching it',
            'Reduces the appearance of a double chin',
            'Tailored separately for female (refined) and male (strong) aesthetics',
            'Often combined with jawline filler for full lower-face definition'
        ],
        process: [
            { title: 'Profile analysis', desc: 'Elena assesses your facial proportions from multiple angles — especially side-on. She\'ll show you what she\'s aiming to achieve before any treatment.' },
            { title: 'Treatment', desc: 'Dense filler placed directly on the chin bone for projection and shape. 20–30 minutes. Some mild bruising or swelling in this area is possible for a couple of days.' },
            { title: 'Review', desc: 'Two-week review to confirm symmetry, projection, and your satisfaction.' }
        ],
        faqs: [
            { q: 'Can this help with my double chin?', a: 'Yes. By projecting the chin forward, the skin and tissue beneath the chin tightens, which visually reduces the appearance of a double chin — often dramatically.' },
            { q: 'Will it feel hard or unnatural?', a: 'Because the filler is placed deeply on the bone itself, it integrates with your existing tissue and feels just like your natural chin within a few weeks.' },
            { q: 'Can I combine this with jawline treatment?', a: 'Absolutely — it\'s one of the most common combinations. Chin projection and jaw definition work together to create a complete lower-face transformation. Elena will advise on what combination is right for your goals and anatomy.' }
        ]
    },
    {
        slug: 'jawline-sculpting',
        name: 'Jawline Sculpting',
        shortName: 'Jawline Fillers',
        tagline: 'Definition. Less jowl. A sharper you.',
        description: 'Structural dermal filler placed along the jawline to create definition, camouflage early jowling, and sharpen the face-to-neck transition.',
        longDescription: `A defined jawline is one of the clearest visual signals of a youthful face. As we age — or simply as genetics play out — the jawline softens, jowls form, and the crisp separation between face and neck starts to blur.

Jawline sculpting places high-density structural filler systematically along the jaw. This reinforces the corner of the jaw, straightens the jaw edge, and fills the slight hollow that forms just in front of the jowl — which has the effect of camouflaging early jowling without lifting or pulling the skin.

The result: a sharper, more defined lower face. A cleaner separation between your face and your neck. Something that looks like improved bone structure — because in effect, that's what it is.

For women, the focus is on elegance and definition — a clean jawline without adding masculine width. For men, we can create a broader, angular, more defined jaw and angle.

This is one of our most requested treatments by clients in their 30s and 40s who want to address early jowling or loss of definition without surgery.`,
        image: 'https://images.unsplash.com/photo-1542385317-5674c0c1b017?auto=format&fit=crop&q=80&w=800&sat=-100',
        price: 'From £500',
        duration: '60 min',
        downtime: 'Mild swelling (2-3 days)',
        highlights: [
            'Creates a defined lower-face frame and neck separation',
            'Camouflages early jowling without surgery',
            'Bespoke for your anatomy — we don\'t masculinise female faces',
            'Often combined with chin profiling',
            'Volume required varies — Elena will advise based on your anatomy'
        ],
        process: [
            { title: 'Consultation', desc: 'A detailed look at your jaw width, jowl severity, how much definition you have (or want), and whether combining with chin projection would give a better result.' },
            { title: 'Treatment', desc: 'Using a cannula for safety and comfort, high-density filler is placed along the jawbone. Treatment takes around 45–60 minutes. Mild swelling for 2–3 days is common.' },
            { title: 'Review', desc: 'Three-week review once any initial swelling has fully resolved — so we can assess the true result and make any adjustments.' }
        ],
        faqs: [
            { q: 'Will it make my face look wider?', a: 'For female patients, we work to sharpen and define the jaw rather than widen it. The goal is a cleaner, sharper separation between face and neck — not a broader face.' },
            { q: 'How much filler does this take?', a: 'The jawline is a large area and requires a meaningful amount of product to create a visible improvement. Most patients need 2–4ml across the jaw and chin combined. Elena will give you an honest recommendation during consultation.' },
            { q: 'Can this fix my jowls properly?', a: 'It can significantly improve the appearance of early jowling. For more advanced jowling, a combination of treatments may be required — Elena will advise honestly about what\'s achievable non-surgically and when surgery might be a better option.' }
        ]
    },
    {
        slug: 'microneedling',
        name: 'Medical Microneedling',
        shortName: 'Microneedling',
        tagline: 'Better skin texture. Fewer scars. More confidence.',
        description: 'Medical-grade microneedling that stimulates your own collagen to improve acne scarring, enlarged pores, fine lines, and uneven texture — visible results over 4–6 weeks.',
        longDescription: `If your skin concern is texture rather than volume — acne scarring, enlarged pores, rough or uneven skin, fine lines — microneedling is one of the most effective treatments available.

Medical microneedling (or collagen induction therapy) uses a medical-grade device to create thousands of controlled micro-injuries in the skin. This sounds alarming — but the controlled trauma triggers your skin's own wound-healing process, producing new collagen and elastin in the treated area.

The result over several weeks is a genuine restructuring of the skin surface. Acne scars flatten. Pores look smaller. Skin feels firmer and healthier. Fine lines soften.

We use a medical-grade SkinPen device and finish every treatment with a cooling hyaluronic acid mask to soothe and hydrate the skin immediately after.

This is not the same as a salon "micro-needling facial" — the depth, needle size, and technique matter enormously for both safety and results. Medical-grade treatment delivers results that spa treatments can't.`,
        image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800&sat=-100',
        price: 'From £180',
        duration: '45 min',
        downtime: 'Redness (24-48 hrs)',
        highlights: [
            'Medical-grade SkinPen device — not a salon treatment',
            'Effective for acne scarring, enlarged pores, fine lines, and texture',
            'Safe for all skin types and tones',
            'Stimulates your own collagen — no injectables needed',
            'Course of 3–6 typically recommended for acne scarring'
        ],
        process: [
            { title: 'Preparation', desc: 'Skin is thoroughly cleansed and a topical numbing cream applied for 20 minutes. This makes the treatment comfortable throughout.' },
            { title: 'Treatment', desc: 'The SkinPen device is passed over the skin with a hyaluronic acid glide. You\'ll feel a vibrating sensation. Treatment takes 30–40 minutes. Your skin will look pink/red immediately after — like a mild sunburn.' },
            { title: 'Aftercare', desc: 'A soothing hyaluronic acid mask is applied immediately after. Redness typically resolves within 24–48 hours. No heavy makeup or active skincare for 24 hours. You\'ll receive a full aftercare guide to follow.' }
        ],
        faqs: [
            { q: 'Does it hurt?', a: 'With numbing cream, most clients describe it as a vibrating or warm scratching sensation — uncomfortable in places but not painful. We\'d say 3–4/10 on average.' },
            { q: 'Will there be bleeding?', a: 'Pinpoint bleeding at medical depths is a normal part of the treatment — it\'s the controlled "injury" that triggers collagen production. It stops immediately and is cleaned before you leave. Your skin looks rough for 24–48 hours, then settles.' },
            { q: 'How many sessions will I need?', a: 'For general skin texture and fine lines, 2–3 sessions spaced 4–6 weeks apart can make a significant difference. For deeper acne scarring, a course of 4–6 sessions may be needed. Elena will give you an honest assessment at consultation.' },
            { q: 'When will I see results?', a: 'Skin often looks fresher after a week. But new collagen takes 4–6 weeks to form, so the real results develop over months. Sessions build on each other — your skin at session 3 will look noticeably better than after session 1.' }
        ]
    }
]

export const getTreatmentBySlug = (slug: string): Treatment | undefined =>
    treatments.find((t) => t.slug === slug)
