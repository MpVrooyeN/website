import { Link } from "react-router-dom";
import Header from "../common/header";
import bgImage from "../assets/img/header-bg.jpg"

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
        </div>
    )
}

export default Home;