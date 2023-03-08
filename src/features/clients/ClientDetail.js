import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import { Header } from "../../components/header"
import { ClientInputForm } from "./ClientInputForm"
import { getClient } from "./clientsAPI"

export const ClientDetail = () => {
    const [showClientInputForm, setShowClientInputForm] = useState(false)
    const [client, setClient] = useState({})
    const dispatch = useDispatch()
    const params = useParams();
    const { clientId } = params;

    const cachedClient = useSelector(state =>
        state.clients.find(client => {
            return client.id === +clientId
        })
    )

    useEffect(() => {
        if (cachedClient) {
            setClient(cachedClient)
        } else {
            const freshClient = dispatch(getClient(clientId))
            freshClient.then(response => {
                setClient(response.payload)
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const toggleShowClientInputForm = () => {
        setShowClientInputForm(!showClientInputForm)
    }

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
        <div className="container">
            <style>{`
                .resource-page-header {
                    position: relative;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }
                .resource-page-header a {
                    position: absolute;
                    left: 0;
                }
                .resource-page-header h2 {}
                .resource-page-header button {
                    position: absolute;
                    right: 0;
                }
            `}</style>
            <Header />
            <div className="resource-page-header">
                <a href="/clients">Back to Clients listview</a>
                <h2>Client: {client.firstName} {client.lastName}</h2>
                <button className="btn btn-primary" type="button" onClick={toggleShowClientInputForm}>Update Client Info</button>
            </div>
            <div>
                <p>DOB: {client.dob}</p>
                <p>Phone: {client.phone}</p>
                <p>Email: {client.email}</p>
                <p>Referral Source: {client.referralSource}</p>
                <div>
                    <p>{client.address1}</p>
                    <p>{client.address2}</p>
                    <p>{client.city}, {client.state}  {client.zip}</p>
                </div>
            </div>
            {showClientInputForm && <ClientInputForm mode="edit" client={client} closeHandler={toggleShowClientInputForm} />}
        </div>
    )
}