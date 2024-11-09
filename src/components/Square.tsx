import React from 'react';

interface SquareProps {
    column: number;
    row: number;
    transparentEffectDirection?: 'bottomToTop' | 'leftRightBottomTop' | null;
    blockColor: string;
    zIndex?: number | string;
}

const Square: React.FC<SquareProps> = ({
    column,
    row,
    transparentEffectDirection,
    blockColor,
    zIndex = '-10'
}) => {
    return (
        <>
            <div
                className='absolute inset-0 -z-10 size-full'
                style={{
                    backgroundSize: `${column}rem ${row}rem`,
                    backgroundImage: `linear-gradient(to right, ${blockColor} 1px, transparent 1px), linear-gradient(to bottom, ${blockColor} 1px, transparent 1px)`,
                    zIndex: zIndex,
                    height: "300px",
                    borderBottomRightRadius: "45%",
                    borderBottomLeftRadius: "45%",
                    maskImage: "linear-gradient(#000 70%,#0000 100%)"
                }}
            />

            {transparentEffectDirection === 'bottomToTop' && (
                <div
                    className='absolute inset-0 z-[-9] size-full bg-gradient-to-t from-[rgba(var(--bg-background))]'
                    style={{
                        zIndex: Number(zIndex) + 1 || -10
                    }}
                />
            )}

            {transparentEffectDirection === 'leftRightBottomTop' && (
                <>
                    <div
                        className='absolute inset-0 z-[-9] size-full bg-gradient-to-t from-[rgba(var(--bg-background))] via-[rgba(var(--bg-background))]/[0.1]'
                        style={{
                            zIndex: Number(zIndex) + 1 || -10
                        }}
                    />

                    <div
                        className='absolute inset-0 z-[9] size-full bg-gradient-to-b from-[rgba(var(--bg-background))] via-[rgba(var(--bg-background))]/[0.1]'
                        style={{
                            zIndex: Number(zIndex) + 1 || -10
                        }}
                    />

                    <div
                        className='absolute inset-0 z-[-9] size-full bg-gradient-to-l from-[rgba(var(--bg-background))] via-[rgba(var(--bg-background))]/[0.1]'
                        style={{
                            zIndex: Number(zIndex) + 1 || -10
                        }}
                    />

                    <div
                        className='absolute inset-0 z-[-9] size-full bg-gradient-to-r from-[rgba(var(--bg-background))] via-[rgba(var(--bg-background))]/[0.1]'
                        style={{
                            zIndex: Number(zIndex) + 1 || -10
                        }}
                    />
                </>
            )}
        </>
    );
};

export default Square;
