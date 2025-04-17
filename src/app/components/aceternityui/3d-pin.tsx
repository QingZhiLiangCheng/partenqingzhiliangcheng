"use client";
import React, {useState} from "react";
import {motion} from "motion/react";
import {cn} from "@/lib/utils";


export const PinContainer = ({
                                 children,
                                 title,
                                 href,
                                 className,
                                 containerClassName,
                             }: {
    children: React.ReactNode;
    title?: string;
    href?: string;
    className?: string;
    containerClassName?: string;
}) => {
    const [transform, setTransform] = useState(
        "translate(0%,0%) rotateX(0deg)"
    );

    const onMouseEnter = () => {
        setTransform("translate(0%,0%) rotateX(40deg) scale(0.8)");
    };
    const onMouseLeave = () => {
        setTransform("translate(0%,0%) rotateX(0deg) scale(1)");
    };

    return (
        <a
            className={cn(
                "block group/pin z-50  cursor-pointer",
                containerClassName
            )}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            href={href || "/"}
        >
            <div
                style={{
                    perspective: "1000px",
                    transform: "rotateX(70deg) translateZ(0deg)",
                }}
                className="block"
            >
                <div
                    style={{
                        transform: transform,
                    }}
                    className="block left-1/2 p-4 top-1/2  flex justify-start items-start  rounded-2xl     transition duration-700 overflow-hidden"
                >
                    <div className={cn(" relative z-50 ", className)}>{children}</div>
                </div>
            </div>
        </a>
    );
};
