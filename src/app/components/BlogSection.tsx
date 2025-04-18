import React from "react";
import {MacbookScroll} from "../components/aceternityui/macbook-scroll";

export function BlogSection() {
    return (
        <section className="library section" id="about">
            <h2 className="section_title_data" id="library_title">Library</h2>
            <span className="section_subtitle" id="library_subtitle">My recommend book</span>
            <div className="dark:bg-[#0B0B0F] w-full">
                <MacbookScroll
                    src={`../img/icon7.png`}
                    showGradient={false}
                />
            </div>
        </section>
    );
}

export default BlogSection
