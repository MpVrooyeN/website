import { Link } from "react-router-dom"

export default function portfolioItem(props) {
    return (
        <div className="portfolioItem">
            <div className="col-lg-4 col-sm-6 mb-4">
                <Link className="portfolio-link" data-bs-toggle="modal" to="#portfolioModal1">
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid" src={props.image} alt="..." />
                </Link>
                <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">{props.title}</div>
                    <div className="portfolio-caption-subheading text-muted">{props.subTitle}</div>
                </div>
            </div>
        </div>
    )
}