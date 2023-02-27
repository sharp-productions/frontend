import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Header } from "../../components/header"
import { AddCaseForm } from './AddCaseForm'

export const CasesList = () => {
    const cases = useSelector(state => state.cases)

    // NOTE: the function below uses the variable caes 
    // rather than case because case is a keyword in javascript
    const renderedCases = cases.map(caes => (
        <article className="post-excerpt" key={caes.id}>
            <h3>{caes.title}</h3>
            <p className="post-content">{caes.id}</p>
            <Link to={`/cases/${caes.id}`} className="button muted-button">View Case</Link>
        </article>
    ))

    return (
        <>
            <Header />
            <AddCaseForm />
            <section className="posts-list">
                <h2>Cases</h2>
                {renderedCases}
            </section>
        </>
    )
}