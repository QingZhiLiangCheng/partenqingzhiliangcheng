import {PinContainer} from "../components/aceternityui/3d-pin";
import {FocusCards} from "../components/aceternityui/focuscards";

function LibrarySection() {
    const cardData = [
        {
            img: "../img/icon2.jpg",
            title: "《康熙的红票》",
            href: "/",
        },
        {
            img: "../img/icon3.png",
            title: "《打开一颗心》",
            href: "/",
        },
        {
            img: "../img/icon4.png",
            title: "《你当像鸟飞往你的山》",
            href: "/",
        },
        {
            img: "../img/icon5.png",
            title: "《纳瓦尔宝典》",
            href: "/",
        },
        {
            img: "../img/icon6.png",
            title: "《平面国》",
            href: "/",
        },

    ];
    return (

        <section className="about" id="about">
            <h2 className="section_title_data" id="about_title">Library</h2>
            <span className="section_subtitle" id="about__subtitle">My recommend book</span>
            <div className="about_container content">
                <div className="card-wall">
                    {cardData.map((card, index) => (
                        <PinContainer
                            key={index}
                            href={card.href}
                            className="card"
                        >
                            <img src={card.img} alt={card.title}/>
                            <h3>{card.title}</h3>
                        </PinContainer>
                    ))}
                </div>
            </div>
        </section>
    )
        ;
}

export default LibrarySection
