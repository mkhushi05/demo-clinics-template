import type { PriceCategory } from '@/types'

export const pricingData: PriceCategory[] = [
    {
        name: 'Consultations',
        items: [
            {
                name: 'Initial Medical Consultation',
                note: 'Required for all new patients. Includes bespoke treatment plan discussion.',
                price: 'Complimentary',
            },
        ],
    },
    {
        name: 'Lip Fillers',
        items: [
            {
                name: 'Signature Lip Enhancement — 0.5ml',
                note: 'Subtle hydration, softened border definition.',
                price: '£250',
            },
            {
                name: 'Signature Lip Enhancement — 1.0ml',
                note: 'Noticeable volume enhancement with contouring.',
                price: '£300',
            },
            {
                name: 'Lip Dissolving (Hyaluronidase)',
                note: 'Elective filler removal. Patch test required 24 hrs prior.',
                price: 'From £150',
            },
        ],
    },
    {
        name: 'Anti-Wrinkle Injections',
        items: [
            {
                name: '1 Area',
                note: 'Crow\'s feet or glabellar lines (\'11s\').',
                price: '£190',
            },
            {
                name: '2 Areas',
                note: 'Frown lines and forehead.',
                price: '£240',
            },
            {
                name: '3 Areas',
                note: 'Forehead, frown lines, and crow\'s feet — our most popular.',
                price: '£280',
            },
            {
                name: 'Brow Lift / Lip Flip / Bunny Lines',
                note: 'Advanced placement techniques priced individually.',
                price: 'From £100',
            },
        ],
    },
    {
        name: 'Skin Boosters',
        items: [
            {
                name: 'Profhilo — Single Session',
                note: 'Deep bio-remodelling and hydration.',
                price: '£300',
            },
            {
                name: 'Profhilo — Course of 2 Sessions',
                note: 'Recommended protocol, 4 weeks apart. Save £50.',
                price: '£550',
            },
        ],
    },
]

export const depositNote =
    'A £50 booking deposit is required to confirm your appointment. This is fully redeemable against your treatment cost, or refunded in full with 48 hours\' notice of cancellation.'
