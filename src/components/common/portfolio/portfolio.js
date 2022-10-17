import PortfolioItem from "./portfolioItem"

const portfolio = [
    { title: "Threads", subTitle: "Illustration", image: "assets/img/portfolio/1.jpg" },
    { title: "Explore", subTitle: "Graphic Design", image: "assets/img/portfolio/2.jpg" },
    { title: "Finish", subTitle: "Identity", image: "assets/img/portfolio/3.jpg" },
    { title: "Lines", subTitle: "Branding", image: "assets/img/portfolio/4.jpg" },
    { title: "Southwest", subTitle: "Website Design", image: "assets/img/portfolio/5.jpg" },
    { title: "Window", subTitle: "Photography", image: "assets/img/portfolio/6.jpg" },
]

export default function Portfolio() {
    return (
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Portfolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                            {portfolio.map((item, index) => {
                                return (<PortfolioItem {...item} key={item.title}/>)
                            })}
                    </div>
                </div>
            </section>
    )
}