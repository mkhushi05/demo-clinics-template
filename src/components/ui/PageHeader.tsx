interface PageHeaderProps {
    eyebrow?: string
    title: string
    subtitle?: string
    dark?: boolean
}

export default function PageHeader({ eyebrow, title, subtitle, dark = false }: PageHeaderProps) {
    return (
        <section
            style={{
                paddingTop: '9rem',
                paddingBottom: '4rem',
                backgroundColor: dark ? 'var(--color-charcoal)' : 'var(--color-ivory)',
                textAlign: 'center',
            }}
        >
            <div className="container">
                {eyebrow && (
                    <span className="eyebrow">{eyebrow}</span>
                )}
                <h1
                    style={{
                        color: dark ? '#ffffff' : 'var(--color-charcoal)',
                        marginBottom: subtitle ? '1rem' : 0,
                    }}
                >
                    {title}
                </h1>
                {subtitle && (
                    <p
                        style={{
                            maxWidth: '600px',
                            margin: '0 auto',
                            fontSize: '1.125rem',
                            color: dark ? 'rgba(255,255,255,0.65)' : 'var(--color-stone-light)',
                        }}
                    >
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    )
}
