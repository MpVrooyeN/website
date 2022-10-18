export default function Field(props) {
    
    return (
        <div className="form-group">
            {/* <!-- Name input--> */}
            <input className="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" value={name} onChange={e => setName(e.target.value)} />
            <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
        </div>
    )
}