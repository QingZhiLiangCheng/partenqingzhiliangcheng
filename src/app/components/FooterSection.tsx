export default function FooterSection() {
    return (
        <footer className="footer">
            <div className="footer_bg">
                <div className="footer_content content ">
                    <div>
                        <h1 className="footer_title">QingZhiLiangCheng</h1>
                        <span className="footer_subtitle"
                        > WisdomPlanet</span
                        >
                    </div>

                    <ul className="footer_links">
                        <li>
                            <a href="#skills" className="footer_link" id="skills">Skills</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="footer_link" id="portfolio"
                            >Portfolio</a
                            >
                        </li>
                        <li>
                            <a href="#contact" className="footer_link" id="contact">Contact</a>
                        </li>
                    </ul>

                </div>

            </div>
        </footer>
    );
}
