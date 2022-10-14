import Header from "../common/header";
import bgImage from "../assets/img/header-bg.jpg"

import Services from "../common/services/services";
import Portfolio from "../common/portfolio/portfolio";
import About from "./About";
import Team from "../common/team/team";
import Clients from "../common/clients/clients"

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
            <About />
            <Team />
            <Clients />
        </div>
    )
}

export default Home;