import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Header } from '../../components/header'
import { AddClientForm } from './AddClientForm'

export const ClientsList = () => {
    const clients = useSelector(state => state.clients)

    const renderedClients = clients.map(client => (
        <article className="post-excerpt" key={client.id}>
            <h3>{client.title}</h3>
            <p className="post-content">{client.id}</p>
            <Link to={`/clients/${client.id}`} className="button muted-button">View Client</Link>
        </article>
    ))

    return (
        <>
            <Header />
            <AddClientForm />
            <section className="posts-list">
                <h2>Clients</h2>
                {renderedClients}
            </section>
        </>
    )
}