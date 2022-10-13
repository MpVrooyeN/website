import Individual from "./individual"

const teamMembers = [
    { name: "Parveen Anand", position: "Lead Designer", portrait: "assets/img/team/1.jpg" },
    { name: "Diana Petersen", position: "Lead Marketer", portrait: "assets/img/team/2.jpg" },
    { name: "Larry Parker", position: "Lead Developer", portrait: "assets/img/team/3.jpg" },
]

export default function Team() {
    return (
        <div>
            <section class="page-section bg-light" id="team">
                <div class="container">
                    <div class="text-center ">
                        <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        {teamMembers.map((teamMember) => {
                            return (<Individual {...teamMember} key={teamMember.name} />)
                        })}
                    </div>
                    <div class="row">
                        <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                    </div>
                </div>
            </section>
        </div >
    )
}