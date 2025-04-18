import HeaderSection from "@/app/components/HeaderSection";
import HomeSection from "@/app/components/HomeSection";
import FooterSection from "@/app/components/FooterSection";
import LibrarySection from "@/app/components/LibrarySection";
import React from 'react';
import BlogSection from "@/app/components/BlogSection";
import {MajorSection} from "@/app/components/MajorSection";


export default function Home() {
    return (
        <main className="main">
            <HeaderSection/>
            <HomeSection/>
            <MajorSection/>
            <LibrarySection/>
            <FooterSection/>
        </main>
    );
}
