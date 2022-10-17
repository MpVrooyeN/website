export default function Individual(props) {
    return (
            <div className="col-lg-4">
                <div className="team-member">
                    <img className="mx-auto rounded-circle" src={props.portrait} alt="..." />
                    <h4>{props.name}</h4>
                    <p className="text-muted">{props.position}</p>
                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label={`${props.name} Twitter Profile`}><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label={`${props.name} Facebook Profile`}><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label={`${props.name} LinkedIn Profile`}><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
    )
}