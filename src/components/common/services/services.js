import SingleService from "./singleService"

const services = [
    { title: "E-Commerce", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.", icon: "fa-shopping-cart", id: 1 },
    { title: "Responsive Design", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.", icon: "fa-laptop", id: 2 },
    { title: "Web-Security", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.", icon: "fa-lock", id: 3 },
]

export default function Services() {

    return (
        <div>
            <section className="page-section" id="services">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Services</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        <div className="row">
                            {services.map((service, index) => {
                                return (<SingleService {...service} key={service.id} />)
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}