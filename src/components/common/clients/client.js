export default function Client(props) {
    return (
        <div className="col-md-3 col-sm-6 my-3" >
            <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={props.image} alt="..." aria-label={`${props.name} Logo`} /></a>
        </div >
    )
}