import HeaderSection from "@/app/components/HeaderSection";
import HomeSection from "@/app/components/HomeSection";
import FooterSection from "@/app/components/FooterSection";
import LibrarySection from "@/app/components/LibrarySection";
import React from 'react';

interface BoxRevealProps {
  children: React.ReactNode; // 使用 React.ReactNode 替代 JSX.Element
  width?: "fit-content" | "100%";
  boxColor?: string;
  duration?: number;
}


export default function Home() {
  return (
      <main className="main">
        <HeaderSection/>
        <HomeSection/>
        <LibrarySection/>
        <FooterSection/>
      </main>
  );
}
