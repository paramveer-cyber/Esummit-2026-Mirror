import "./petals.css";
import React, { useMemo } from "react";

interface PetalsProps {
    count: number;
}

export default function Petals({ count }: PetalsProps) {
    const petals = useMemo(() => {
        return Array.from({ length: count }).map(() => {
            const size = 6 + Math.random() * 12;

            return {
                width: `${size}px`,
                height: `${size}px`,
                "--x-end": `${-Math.random() * 30}vw`,
                "--x-start": `${98 + Math.random() * 10}vw`,
                "--y-start": `${-30 + Math.random() * 60}vh`,
                "--y-end": `${120 + Math.random() * 45}vh`,
                "--wobble": `${20 + Math.random() * 40}px`,
                "--spin": `${Math.random() > 0.5 ? 360 : -360}deg`,
                animationDuration: `${40 + Math.random() * 10}s`,
                animationDelay: `-${Math.random() * 45}s`,
                opacity: 0.6 + Math.random() * 0.4,
            } as React.CSSProperties;
        });
    }, [count]);

    return (
        <div className="petals-container">
            {petals.map((style, i) => (
                <span key={i} className="petal" style={style} />
            ))}
        </div>
    );
}
