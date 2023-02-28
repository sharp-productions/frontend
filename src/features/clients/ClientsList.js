import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Header } from '../../components/header'
import { AddClientForm } from './AddClientForm'

export const ClientsList = () => {
    const clients = useSelector(state => state.clients)
    const [showAddClientForm, setShowAddClientForm] = useState(false)

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
                    <div>
                        You haven't added any clients yet. Would you like to create one?
                    </div>
                    <div className="client-empty-state-create-client">
                        <button type="button" onClick={toggleShowAddClientForm}>Create Client</button>
                    </div>
                    <div className="model-backdrop show" />
                </div>
            )
        } else {
            return (
                clients.map(client => (
                    <article className="post-excerpt" key={client.id}>
                        <h3>{client.title}</h3>
                        <p className="post-content">{client.id}</p>
                        <Link to={`/clients/${client.id}`} className="button muted-button">View Client</Link>
                    </article>
                ))
            )
        }
    }

    return (
        <div className="modal-open">
            <Header />
            <section className="posts-list">
                <h2>Clients</h2>
                {renderedClients()}
            </section>
            {showAddClientForm && <AddClientForm closeHandler={toggleShowAddClientForm} />}
        </div>
    )
}