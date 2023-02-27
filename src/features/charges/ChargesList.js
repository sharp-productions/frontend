import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Header } from '../../components/header'
import { AddChargeForm } from './AddChargeForm'

export const ChargesList = () => {
    const charges = useSelector(state => state.charges)

    const renderedCharges = charges.map(charge => (
        <article className="post-excerpt" key={charge.id}>
            <h3>{charge.title}</h3>
            <p className="post-content">{charge.id}</p>
            <Link to={`/charges/${charge.id}`} className="button muted-button">View Charge</Link>
        </article>
    ))

    return (
        <>
            <Header />
            <AddChargeForm />
            <section className="posts-list">                
                <h2>Charges</h2>
                {renderedCharges}
            </section>
        </>
    )
}