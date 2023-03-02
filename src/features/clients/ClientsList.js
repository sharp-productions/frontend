import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Header } from '../../components/header'
import { AddClientForm } from './AddClientForm'
import { getClients } from './clientsAPI'

export const ClientsList = () => {
    const dispatch = useDispatch()
    const clients = useSelector(state => state.clients)
    const [showAddClientForm, setShowAddClientForm] = useState(false)

    useEffect(() => {
        dispatch(getClients())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const toggleShowAddClientForm = () => {
        setShowAddClientForm(!showAddClientForm)
    }

    const renderedClients = () => {
        if (clients.length === 0) {
            return (
                <div className="modal-open">
                    <style>{`
                    .client-empty-state-create-client {
                        margin-top: 20px;
                    }
                    `}</style>
                    <div className="client-empty-state-create-client">
                    You haven't added any clients yet. Would you like to create one?    
                    </div>
                    <div className="model-backdrop show" />
                </div>
            )
        } else {
            return (
                clients.map(client => (
                    <article className="post-excerpt" key={client.id}>
                        <Link to={`/clients/${client.id}`} className="button muted-button">{client.firstName} {client.lastName}</Link>
                    </article>
                ))
            )
        }
    }

    return (
        <div className="modal-open">
            <Header />
            <section className="posts-list">
                <h2>Clients</h2><button type="button" onClick={toggleShowAddClientForm}>Create Client</button>
                {renderedClients()}
            </section>
            {showAddClientForm && <AddClientForm closeHandler={toggleShowAddClientForm} />}
        </div>
    )
}