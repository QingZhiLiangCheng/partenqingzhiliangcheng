
export default function HeaderSection() {
    return (
        <header className="header scroll-header" id="header">
            <nav className="nav ">
                <a href="#" className="nav_logo">QingZhiLiangCheng</a>

                <div className="nav_menu">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                                <i className=""></i>
                                <p>Home</p>
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                                <i className=""></i>
                                <p>About</p>
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" className="nav_link">
                                <i className=""></i>
                                <p>Skills</p>
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="https://qingzhiliangcheng.cpolar.cn/" className="nav_link">
                                <i className=""></i>
                                <p>Blog</p>
                            </a>
                        </li>
                    </ul>

                    <div className="header_img">
                        <img width="40px" src="../img/icon.jpg" alt="Header Icon"/>
                    </div>
                </div>
            </nav>
        </header>
    );
}
