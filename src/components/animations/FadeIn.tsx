import { useEffect, useRef, useState } from 'react';
import type { ReactNode, CSSProperties } from 'react';

type Direction = 'up' | 'left' | 'right' | 'fade';

const directionMap: Record<Direction, CSSProperties> = {
    up: { opacity: 0, transform: 'translateY(28px)' },
    left: { opacity: 0, transform: 'translateX(-28px)' },
    right: { opacity: 0, transform: 'translateX(28px)' },
    fade: { opacity: 0, transform: 'none' },
};

export default function FadeIn({
    children,
    delay = 0,
    className = '',
    direction = 'up',
    duration = 800,
}: {
    children: ReactNode;
    delay?: number;
    className?: string;
    direction?: Direction;
    duration?: number;
}) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const hiddenStyle = directionMap[direction];
    const visibleStyle: CSSProperties = { opacity: 1, transform: 'translate(0,0)' };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                ...(isVisible ? visibleStyle : hiddenStyle),
                transition: `opacity ${duration}ms cubic-bezier(0.25,0.46,0.45,0.94), transform ${duration}ms cubic-bezier(0.25,0.46,0.45,0.94)`,
                transitionDelay: `${delay}ms`,
                willChange: 'opacity, transform',
            }}
        >
            {children}
        </div>
    );
}
