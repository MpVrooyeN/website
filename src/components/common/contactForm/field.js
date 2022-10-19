export default function Field(props) {

    return (
        <>
            {props.elementName === 'input' ?
                <div className={props.className}>
                    <input className="form-control" id={props.name} type={props.type} placeholder={props.placeholder} data-sb-validations="required" value={props.value} onChange={e => props.onChange(e)} />
                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div></div>
                :
                <div className="form-group form-group-textarea mb-md-0">
                    <textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required" value={props.value} onChange={e => props.onChange(e)} ></textarea>
                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div></div>
            }
        </>
    )
}