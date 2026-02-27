import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Lock, CreditCard } from 'lucide-react'
import SEOHead from '@/components/ui/SEOHead'

interface BookingService {
    id: string
    name: string
    description: string
    price: string
}

const services: BookingService[] = [
    { id: 'consultation', name: 'Initial Consultation', description: 'Comprehensive facial assessment and tailored treatment plan.', price: 'Complimentary' },
    { id: 'lip-fillers', name: 'Signature Lip Enhancement', description: 'Natural volume, hydration, and definition using premium dermal fillers.', price: 'From £250' },
    { id: 'anti-wrinkle', name: 'Anti-Wrinkle Injections', description: 'Targeting forehead lines, frown lines, and crow\'s feet.', price: 'From £190' },
    { id: 'skin-boosters', name: 'Skin Boosters (Profhilo)', description: 'Deep hydration and bio-remodelling for luminous skin.', price: 'From £300' },
]

const timeSlots = ['09:30', '10:15', '11:00', '13:30', '14:45', '16:00', '17:30']

export default function BookingPage() {
    const [step, setStep] = useState(1)
    const [selectedService, setSelectedService] = useState<BookingService | null>(null)
    const [selectedDate, setSelectedDate] = useState<number | null>(null)
    const [selectedTime, setSelectedTime] = useState<string | null>(null)
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', notes: '', terms: false })

    const canProceed = () => {
        if (step === 1) return selectedService !== null
        if (step === 2) return selectedDate !== null && selectedTime !== null
        if (step === 3) return form.firstName.trim() && form.email.trim() && form.phone.trim() && form.terms
        if (step === 4) return true
        return false
    }

    const handleNext = () => {
        if (step < 5 && canProceed()) setStep(step + 1)
    }
    const handleBack = () => {
        if (step > 1) setStep(step - 1)
    }

    // Generate calendar days for the current month
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const offset = firstDay === 0 ? 6 : firstDay - 1 // Mon = 0
    const monthName = today.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })

    return (
        <>
            <SEOHead
                title="Book Consultation"
                description="Book your complimentary consultation or treatment appointment at Lumière Aesthetics Clinic Manchester. Simple, secure online booking."
                canonical="/booking"
            />

            <section style={{ paddingTop: '6rem', paddingBottom: '4rem', backgroundColor: 'var(--color-cream)', minHeight: '100vh' }}>
                <div className="container" style={{ maxWidth: '700px' }}>

                    {/* Progress */}
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
                            {step < 5 ? 'Secure Your Appointment' : 'Booking Confirmed!'}
                        </h1>
                        {step < 5 && (
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem' }}>
                                {[1, 2, 3, 4].map((s) => (
                                    <div
                                        key={s}
                                        style={{
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '0.8125rem',
                                            fontWeight: 600,
                                            backgroundColor: s <= step ? 'var(--color-charcoal)' : 'var(--color-cream-dark)',
                                            color: s <= step ? '#ffffff' : 'var(--color-stone-muted)',
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        {s < step ? <CheckCircle size={16} /> : s}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div style={{ backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-md)' }}>

                        {/* Step 1: Select Treatment */}
                        {step === 1 && (
                            <div>
                                <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Select a Treatment</h2>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {services.map((s) => (
                                        <button
                                            key={s.id}
                                            onClick={() => setSelectedService(s)}
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                padding: '1.25rem',
                                                borderRadius: 'var(--radius-md)',
                                                border: selectedService?.id === s.id ? '2px solid var(--color-gold)' : '1.5px solid var(--color-cream-dark)',
                                                backgroundColor: selectedService?.id === s.id ? 'var(--color-ivory)' : 'var(--color-white)',
                                                cursor: 'pointer',
                                                textAlign: 'left',
                                                transition: 'all 0.2s ease',
                                                fontFamily: 'var(--font-body)',
                                            }}
                                        >
                                            <div>
                                                <h3 style={{ fontSize: '1rem', margin: 0, fontFamily: 'var(--font-body)', fontWeight: 600 }}>{s.name}</h3>
                                                <p style={{ fontSize: '0.8125rem', color: 'var(--color-stone-muted)', margin: '0.25rem 0 0' }}>{s.description}</p>
                                            </div>
                                            <span style={{ fontWeight: 600, color: 'var(--color-gold-dark)', whiteSpace: 'nowrap', marginLeft: '1rem', fontSize: '0.875rem' }}>
                                                {s.price}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Step 2: Date & Time */}
                        {step === 2 && (
                            <div>
                                <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Choose Date & Time</h2>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="date-time-grid">
                                    <div>
                                        <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem' }}>{monthName}</h4>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', textAlign: 'center' }}>
                                            {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((d) => (
                                                <div key={d} style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-stone-muted)', padding: '0.375rem' }}>{d}</div>
                                            ))}
                                            {Array.from({ length: offset }).map((_, i) => (
                                                <div key={`e-${i}`} />
                                            ))}
                                            {Array.from({ length: daysInMonth }).map((_, i) => {
                                                const day = i + 1
                                                const isPast = day < today.getDate()
                                                const isSunday = new Date(year, month, day).getDay() === 0
                                                const disabled = isPast || isSunday
                                                return (
                                                    <button
                                                        key={day}
                                                        onClick={() => !disabled && setSelectedDate(day)}
                                                        disabled={disabled}
                                                        style={{
                                                            padding: '0.5rem',
                                                            border: 'none',
                                                            borderRadius: 'var(--radius-sm)',
                                                            cursor: disabled ? 'default' : 'pointer',
                                                            backgroundColor: selectedDate === day ? 'var(--color-charcoal)' : 'transparent',
                                                            color: disabled ? 'var(--color-cream-dark)' : selectedDate === day ? '#ffffff' : 'var(--color-charcoal)',
                                                            fontWeight: selectedDate === day ? 600 : 400,
                                                            fontSize: '0.875rem',
                                                            fontFamily: 'var(--font-body)',
                                                            transition: 'all 0.15s ease',
                                                        }}
                                                    >
                                                        {day}
                                                    </button>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem' }}>Available Times</h4>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))', gap: '0.5rem' }}>
                                            {timeSlots.map((t) => (
                                                <button
                                                    key={t}
                                                    onClick={() => setSelectedTime(t)}
                                                    style={{
                                                        padding: '0.625rem',
                                                        border: selectedTime === t ? '2px solid var(--color-gold)' : '1.5px solid var(--color-cream-dark)',
                                                        borderRadius: 'var(--radius-md)',
                                                        backgroundColor: selectedTime === t ? 'var(--color-ivory)' : 'var(--color-white)',
                                                        cursor: 'pointer',
                                                        fontSize: '0.875rem',
                                                        fontWeight: selectedTime === t ? 600 : 400,
                                                        fontFamily: 'var(--font-body)',
                                                        color: 'var(--color-charcoal)',
                                                        transition: 'all 0.15s ease',
                                                    }}
                                                >
                                                    {t}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <style>{`
                  @media (min-width: 640px) { .date-time-grid { grid-template-columns: 1fr 1fr !important; } }
                `}</style>
                            </div>
                        )}

                        {/* Step 3: Details */}
                        {step === 3 && (
                            <div>
                                <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Your Details</h2>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div style={{ gridColumn: '1' }}>
                                        <label style={labelStyle}>First Name *</label>
                                        <input style={inputStyle} value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Last Name</label>
                                        <input style={inputStyle} value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
                                    </div>
                                </div>
                                <div style={{ marginTop: '1rem' }}>
                                    <label style={labelStyle}>Email Address *</label>
                                    <input type="email" style={inputStyle} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                                </div>
                                <div style={{ marginTop: '1rem' }}>
                                    <label style={labelStyle}>Phone Number *</label>
                                    <input type="tel" style={inputStyle} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                                </div>
                                <div style={{ marginTop: '1rem' }}>
                                    <label style={labelStyle}>Medical Notes / Questions (Optional)</label>
                                    <textarea style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
                                </div>
                                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.8125rem', color: 'var(--color-stone-muted)' }}>
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        checked={form.terms}
                                        onChange={(e) => setForm({ ...form, terms: e.target.checked })}
                                        style={{ marginTop: '3px' }}
                                    />
                                    <label htmlFor="terms">
                                        I agree to the <Link to="/legal/terms" style={{ textDecoration: 'underline' }}>Terms & Conditions</Link> and <Link to="/legal/disclaimer" style={{ textDecoration: 'underline' }}>Medical Disclaimer</Link>.
                                    </label>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Payment */}
                        {step === 4 && (
                            <div>
                                <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Secure Appointment</h2>

                                <div style={{ backgroundColor: 'var(--color-ivory)', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1rem', fontFamily: 'var(--font-body)', fontWeight: 600, borderBottom: '1px solid var(--color-cream-dark)', paddingBottom: '0.5rem', marginBottom: '0.75rem' }}>Booking Summary</h3>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                        <span style={{ color: 'var(--color-stone-muted)' }}>Treatment:</span>
                                        <strong>{selectedService?.name}</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                                        <span style={{ color: 'var(--color-stone-muted)' }}>Date & Time:</span>
                                        <strong>{selectedDate} {monthName} at {selectedTime}</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid var(--color-cream-dark)', fontWeight: 600 }}>
                                        <span>Deposit Required:</span>
                                        <span>£50.00</span>
                                    </div>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--color-stone-muted)', textAlign: 'right', margin: '0.25rem 0 0' }}>
                                        (Deducted from final treatment cost)
                                    </p>
                                </div>

                                {/* Stripe mock */}
                                <div style={{ border: '1px solid var(--color-cream-dark)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                                        <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Card information</span>
                                        <CreditCard size={20} style={{ color: 'var(--color-stone-muted)' }} />
                                    </div>
                                    <div
                                        style={{
                                            padding: '0.75rem',
                                            border: '1px solid var(--color-cream-dark)',
                                            borderRadius: 'var(--radius-sm)',
                                            fontSize: '0.875rem',
                                            color: 'var(--color-stone-muted)',
                                            display: 'flex',
                                            gap: '1rem',
                                            alignItems: 'center',
                                            backgroundColor: 'var(--color-off-white)',
                                        }}
                                    >
                                        <span>💳</span>
                                        <span style={{ flex: 1 }}>Card number</span>
                                        <span>MM / YY</span>
                                        <span>CVC</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.75rem', color: 'var(--color-stone-muted)', marginTop: '0.75rem' }}>
                                        <Lock size={12} /> Payments are secure and encrypted.
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 5: Confirmation */}
                        {step === 5 && (
                            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--color-gold)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.75rem' }}>
                                    ✓
                                </div>
                                <h2 style={{ marginBottom: '0.75rem' }}>Booking Confirmed!</h2>
                                <p style={{ marginBottom: '1.5rem' }}>
                                    Thank you, {form.firstName || 'there'}. We look forward to welcoming you to Lumière Aesthetics.
                                </p>
                                <div style={{ backgroundColor: 'var(--color-ivory)', padding: '1.25rem', borderRadius: 'var(--radius-md)', textAlign: 'left', marginBottom: '1.5rem' }}>
                                    <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}><strong>Treatment:</strong> {selectedService?.name}</p>
                                    <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}><strong>Date & Time:</strong> {selectedDate} {monthName} at {selectedTime}</p>
                                    <p style={{ fontSize: '0.9rem', margin: 0 }}><strong>Location:</strong> 123 Deansgate, Manchester</p>
                                </div>
                                <p style={{ fontSize: '0.8125rem', color: 'var(--color-stone-muted)', marginBottom: '2rem' }}>
                                    A confirmation email has been sent with pre-treatment instructions and parking details.
                                </p>
                                <Link to="/" className="btn btn-primary">Return to Homepage</Link>
                            </div>
                        )}
                    </div>

                    {/* Navigation buttons */}
                    {step < 5 && (
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                            {step > 1 ? (
                                <button onClick={handleBack} className="btn btn-secondary" style={{ fontSize: '0.8125rem' }}>Back</button>
                            ) : (
                                <div />
                            )}
                            <button
                                onClick={handleNext}
                                className="btn btn-primary"
                                disabled={!canProceed()}
                                style={{
                                    fontSize: '0.8125rem',
                                    opacity: canProceed() ? 1 : 0.4,
                                    cursor: canProceed() ? 'pointer' : 'not-allowed',
                                }}
                            >
                                {step === 4 ? 'Confirm & Pay £50' : 'Continue'}
                            </button>
                        </div>
                    )}

                    {/* Help */}
                    {step < 5 && (
                        <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.875rem', color: 'var(--color-stone-muted)' }}>
                            <p>Need help booking?</p>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                                <a href="https://wa.me/441610000000" style={{ color: '#25D366', fontWeight: 600 }}>WhatsApp Us</a>
                                <span>or</span>
                                <a href="tel:01610000000" style={{ fontWeight: 600 }}>Call 0161 000 0000</a>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.8125rem',
    fontWeight: 500,
    color: 'var(--color-stone)',
    marginBottom: '0.375rem',
}

const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem',
    border: '1.5px solid var(--color-cream-dark)',
    borderRadius: 'var(--radius-md)',
    fontSize: '0.9375rem',
    fontFamily: 'var(--font-body)',
    backgroundColor: 'var(--color-off-white)',
    color: 'var(--color-charcoal)',
    transition: 'border-color 0.2s ease',
    outline: 'none',
    boxSizing: 'border-box' as const,
}
