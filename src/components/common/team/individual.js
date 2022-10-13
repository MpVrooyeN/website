export default function Individual(props) {
    return (
            <div class="col-lg-4">
                <div class="team-member">
                    <img class="mx-auto rounded-circle" src={props.portrait} alt="..." />
                    <h4>{props.name}</h4>
                    <p class="text-muted">{props.position}</p>
                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label={`${props.name} Twitter Profile`}><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label={`${props.name} Facebook Profile`}><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label={`${props.name} LinkedIn Profile`}><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
    )
}