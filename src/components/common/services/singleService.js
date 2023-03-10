
export default function SingleService(props) {
    return (
            <div className="col-lg-4 col-sm-6 md-4">
                <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className={`fas ${props.icon} fa-stack-1x fa-inverse`}></i>
                </span>
                <h4 className="my-3">{props.title}</h4>
                <p className="text-muted">{props.description}</p>
            </div>
    )
}