import { useSelector } from "react-redux"

import { Header } from "../../components/header"

export const ClientDetail = ({ match }) => {
    const { clientId } = match.params

    const client = useSelector(state =>
        state.clients.find(client => client.id === clientId)
    )

    if (!client) {
        return (
            <>
                <Header />
                <section>
                    <h2>Client not found!</h2>
                </section>
            </>
        )
    }

    return (
        <>
            <Header />
            <section>
                <article className="post">
                    <h2>Client: `${client.firstName} ${client.lastName}`</h2>
                    <p>DOB: {client.dob}</p>
                    <p>Phone: {client.phone}</p>
                    <p>Email: {client.email}</p>
                    <p>Referral Source: {client.referralSource}</p>
                    <div>
                        <p>{client.street}</p>
                        <p>`${client.city}, ${client.staet}  ${client.zip}`</p>
                    </div>
                </article>
            </section>
        </>
    )
}