import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function PremiumGallery() {
    return (
        <section className="section" style={{ backgroundColor: 'var(--color-white)', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <span className="eyebrow">Real Results</span>
                    <h2>Transformational Results</h2>
                    <p style={{ maxWidth: '640px', margin: '1rem auto 0', fontSize: '1.0625rem', color: 'var(--color-stone)' }}>
                        Beautifully collated insights into our signature work. We focus on undetectable enhancements — achieving balance, proportion, and supreme subtlety.
                    </p>
                </div>

                {/* Asymmetrical Masonry/Grid Layout */}
                <div
                    className="gallery-grid"
                    style={{
                        display: 'grid',
                        gap: '1rem',
                        gridTemplateColumns: '1fr',
                        gridAutoRows: '280px',
                    }}
                >
                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-lg)' }} className="gallery-item item-main">
                        <img
                            src="https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=800"
                            alt="Lip filler result"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        />
                        <div className="gallery-caption">Lip Enhancement</div>
                    </div>

                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-lg)' }} className="gallery-item item-sub-1">
                        <img
                            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
                            alt="Skin booster result"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        />
                        <div className="gallery-caption">Skin Boosters</div>
                    </div>

                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-lg)' }} className="gallery-item item-sub-2">
                        <img
                            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800"
                            alt="Anti-wrinkle result"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        />
                        <div className="gallery-caption">Anti-Wrinkle</div>
                    </div>

                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-lg)' }} className="gallery-item item-sub-3">
                        <img
                            src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&q=80&w=800"
                            alt="Profile balancing"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        />
                        <div className="gallery-caption">Profile Harmony</div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
                    <Link to="/gallery" className="btn btn-secondary">
                        View Full Gallery <ArrowRight size={14} />
                    </Link>
                </div>
            </div>

            <style>{`
                .gallery-caption {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 1.5rem;
                    background: linear-gradient(to top, rgba(26,22,20,0.8), transparent);
                    color: white;
                    font-size: 1.125rem;
                    font-family: var(--font-heading);
                    font-weight: 500;
                    transform: translateY(10px);
                    opacity: 0;
                    transition: all 0.3s ease;
                }
                .gallery-item:hover .gallery-caption {
                    transform: translateY(0);
                    opacity: 1;
                }
                
                @media (min-width: 768px) {
                    .gallery-grid {
                        grid-template-columns: repeat(3, 1fr) !important;
                        grid-auto-rows: 240px !important;
                    }
                    .item-main {
                        grid-column: span 2;
                        grid-row: span 2;
                    }
                    .item-sub-1 {
                        grid-column: span 1;
                        grid-row: span 1;
                    }
                    .item-sub-2 {
                        grid-column: span 1;
                        grid-row: span 1;
                    }
                    .item-sub-3 {
                        display: none; /* Hide 4th on tablet if it disrupts masonry, or just fit it in */
                    }
                }
                @media (min-width: 1024px) {
                    .gallery-grid {
                        grid-template-columns: repeat(4, 1fr) !important;
                        grid-auto-rows: 320px !important;
                    }
                    .item-sub-3 {
                        display: block;
                        grid-column: span 2;
                        grid-row: span 1;
                    }
                    .item-sub-1, .item-sub-2 {
                        grid-column: span 1;
                    }
                }
            `}</style>
        </section>
    )
}
