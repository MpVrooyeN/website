import Individual from "./individual"

const teamMembers = [
    { name: "Parveen Anand", position: "Lead Designer", portrait: "assets/img/team/1.jpg" },
    { name: "Diana Petersen", position: "Lead Marketer", portrait: "assets/img/team/2.jpg" },
    { name: "Larry Parker", position: "Lead Developer", portrait: "assets/img/team/3.jpg" },
]

export default function Team() {
    return (
        <div>
            <section className="page-section bg-light" id="team">
                <div className="container">
                    <div className="text-center ">
                        <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        {teamMembers.map((teamMember) => {
                            return (<Individual {...teamMember} key={teamMember.name} />)
                        })}
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                    </div>
                </div>
            </section>
        </div >
    )
}