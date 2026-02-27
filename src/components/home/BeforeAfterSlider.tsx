import { useRef, useState, useCallback } from 'react'

const BEFORE = 'https://images.unsplash.com/photo-1512496015851-a1c84cb18128?auto=format&fit=crop&q=80&w=800'
const AFTER = 'https://images.unsplash.com/photo-1505027492977-1037f14c46fa?auto=format&fit=crop&q=80&w=800'

export default function BeforeAfterSlider() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState(50)
    const [isDragging, setIsDragging] = useState(false)

    const updatePosition = useCallback((clientX: number) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const x = clientX - rect.left
        const pct = Math.max(0, Math.min(100, (x / rect.width) * 100))
        setPosition(pct)
    }, [])

    const handleMouseDown = () => setIsDragging(true)
    const handleMouseUp = () => setIsDragging(false)
    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging) updatePosition(e.clientX)
    }
    const handleTouchMove = (e: React.TouchEvent) => {
        updatePosition(e.touches[0].clientX)
    }

    return (
        <div
            ref={containerRef}
            style={{
                position: 'relative',
                maxWidth: '700px',
                margin: '0 auto',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                cursor: 'ew-resize',
                userSelect: 'none',
                boxShadow: 'var(--shadow-lg)',
                aspectRatio: '4/3',
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
        >
            {/* After image (full) */}
            <img
                src={AFTER}
                alt="After Treatment"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                draggable={false}
            />
            {/* Before image (clipped) */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    clipPath: `inset(0 ${100 - position}% 0 0)`,
                }}
            >
                <img
                    src={BEFORE}
                    alt="Before Treatment"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    draggable={false}
                />
            </div>

            {/* Slider handle */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: `${position}%`,
                    transform: 'translateX(-50%)',
                    width: '3px',
                    backgroundColor: '#ffffff',
                    zIndex: 3,
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#ffffff',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1rem',
                        color: 'var(--color-charcoal)',
                    }}
                >
                    ↔
                </div>
            </div>

            {/* Labels */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    color: '#ffffff',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    zIndex: 4,
                }}
            >
                Before
            </div>
            <div
                style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    color: '#ffffff',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    zIndex: 4,
                }}
            >
                After
            </div>
        </div>
    )
}
