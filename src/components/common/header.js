import { Link } from "react-router-dom"

export default function Header(props) {
    return (
        <div className="Header">
            <header className="masthead" style={{backgroundImage: 'url("' + props.image + '")'}}>
                <div className="container">
                    <div className="masthead-subheading">{props.title}</div>
                    <div className="masthead-heading text-uppercase">{props.subTitle}</div>
                    {props.showButton && <Link className="btn btn-primary btn-xl text-uppercase" to={props.link}>{props.buttonText}</Link>}
                </div>
            </header>
        </div>)
}