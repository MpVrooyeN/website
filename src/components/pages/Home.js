import Header from "../common/header";
import bgImage from "../assets/img/header-bg.jpg"

import Services from "../common/services";
import Portfolio from "../common/portfolio";

function Home() {
    return (
        <div className="Home">
            <Header 
                image={bgImage}
                title="Welcome to Our Studio"
                subTitle="It's Nice to Meet You"
                buttonText="Tell Me More"
                link="/services"
                showButton={true}
                />

            <Services />
            <Portfolio />
        </div>
    )
}

export default Home;