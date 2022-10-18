import { useState } from "react"

const fields = {
	sections: [
		[
			{ name: 'name', elementName: 'input', placeholder: 'Your Name*', type: 'text' },
			{ name: 'email', elementName: 'input', placeholder: 'Your Email*', type: 'email' },
			{ name: 'number', elementName: 'input', placeholder: 'Your Phone Number*', type: 'text' }],
		[
			{ name: 'message', elementName: 'textarea', placeholder: 'Your Message*', type: 'text' }]]
}

export default function Contact() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [number, setNumber] = useState('')
	const [message, setMessage] = useState('')



	return (
		<section className="page-section" id="contact">
			<div className="container">
				<div className="text-center">
					<h2 className="section-heading text-uppercase">Contact Us</h2>
					<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
				</div>
				{/* <!-- * * * * * * * * * * * * * * *-->
                <!-- * * SB Forms Contact Form * *-->
                <!-- * * * * * * * * * * * * * * *-->
                <!-- This form is pre-integrated with SB Forms.-->
                <!-- To make this form functional, sign up at-->
                <!-- https://startbootstrap.com/solution/contact-forms--> */}
				{/* <!-- to get an API token!--> */}
				<form id="contactForm" data-sb-form-api-token="API_TOKEN">
					<div className="row align-items-stretch mb-5">
						<div className="col-md-6">
							<div className="form-group">
								{/* <!-- Name input--> */}
								<input className="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" value={name} onChange={e => setName(e.target.value)} />
								<div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
							</div>
							<div className="form-group">
								{/* <!-- Email address input--> */}
								<input className="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" value={email} onChange={e => setEmail(e.target.value)} />
								<div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
								<div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
							</div>
							<div className="form-group mb-md-0">
								{/* <!-- Phone number input--> */}
								<input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" value={number} onChange={e => setNumber(e.target.value)} />
								<div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group form-group-textarea mb-md-0">
								{/* <!-- Message input--> */}
								<textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required" value={message} onChange={e => setMessage(e.target.value)}></textarea>
								<div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
							</div>
						</div>
					</div>
					{/* <!-- Submit success message-->
                    <!---->
                    <!-- This is what your users will see when the form-->
                    <!-- has successfully submitted--> */}
					<div className="d-none" id="submitSuccessMessage">
						<div className="text-center text-white mb-3">
							<div className="fw-bolder">Form submission successful!</div>
							To activate this form, sign up at
							<br />
							<a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
						</div>
					</div>
					{/* <!-- Submit error message-->
                    <!---->
                    <!-- This is what your users will see when there is-->
                    <!-- an error submitting the form--> */}
					<div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
					{/* <!-- Submit Button--> */}
					<div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
				</form>
			</div>
		</section>
	)
}