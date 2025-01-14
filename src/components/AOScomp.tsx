"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AosComp(props: { children: React.ReactNode, aos: string }) {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
        });
    }, []);

    return (
        <div data-aos={props.aos}>
            {props.children}
        </div>
    )
}