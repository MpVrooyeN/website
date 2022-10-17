import Client from "./client"

const clients = [
    {image: "assets/img/logos/microsoft.svg", name: "Microsoft"},
    {image: "assets/img/logos/google.svg", name: "Google"},
    {image: "assets/img/logos/facebook.svg", name: "Facebook"},
    {image: "assets/img/logos/ibm.svg", name: "IBM"},
    
]

export default function Clients() {
    return (
        <div className="py-5">
        <div className="container">
            <div className="row align-items-center">
                {clients.map((client) => {
                    return (<Client {...client} key={client.name} />)
                })}
            </div>
        </div>
    </div>
    )
}