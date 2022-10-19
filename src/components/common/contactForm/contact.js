import { useState } from "react"
import Field from "./field"

const fields = {
	sections: [
		[
			{ name: 'name', elementName: 'input', placeholder: 'Your Name*', type: 'text', className: 'form-group' },
			{ name: 'email', elementName: 'input', placeholder: 'Your Email*', type: 'email', className: 'form-group' },
			{ name: 'number', elementName: 'input', placeholder: 'Your Phone Number*', type: 'text', className: 'form-group mb-md-0' }],
		[
			{ name: 'message', elementName: 'textarea', placeholder: 'Your Message*', type: 'text', className: '' }]]
}

function Contact() {

	const [form, setForm] = useState({
		name: '',
		email: '',
		number: '',
		message: ''
	});

	const onSubmitForm = (e) => {
		console.log()
	}

	console.log(form)

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
				<form id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit={e => onSubmitForm(e)}>
					<div className="row align-items-stretch mb-5">
						{fields.sections.map((section, sectionIndex) => {
							return (
								<div className="col-md-6" key={sectionIndex}>
									{section.map((field, fieldIndex) => {
										return (
											<Field {...field} key={fieldIndex} value={form[field.name]} onChange={(e) =>
												setForm((prevForm) => ({
													...prevForm,
													[field.name]: e.target.value,
												}))} />

										)
									})}

								</div>
							)
						})}
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
					<div className="text-center"><button className="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit" >Send Message</button></div>
				</form>
			</div>
		</section>
	)
}

export default Contact