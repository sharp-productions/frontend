import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Header } from "../../components/header"
import { AddCaseForm } from './AddCaseForm'
import { getCases } from './casesAPI'

export const CasesList = () => {

    const cases = useSelector(state => state.cases)
    const dispatch = useDispatch()

    const [showAddCaseForm, setShowAddCaseForm] = useState(false)

    useEffect(() => {
        dispatch(getCases())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const toggleShowAddCaseForm = () => {
        setShowAddCaseForm(!showAddCaseForm)
    }

    const emptyState = () => {
        return (
            <div className="modal-open">
                <style>{`
                .case-empty-state-create-case {
                    margin-top: 20px;
                }
                `}</style>
                <div className="case-empty-state-create-case">
                    You haven't added any cases yet. Would you like to create one?
                </div>
                <div className="model-backdrop show" />
            </div>
        )
    }

    // NOTE: the function below uses the variable "caes"
    // rather than "case" because "case" is a keyword in javascript
    const renderedCases = () => {
        return (
            cases.map(caes => (
                <Link key={caes.id} href={`/clients/${caes.id}`}>
                    {/* <a key={caes.id} href={`/clients/${caes.id}`}> */}
                    <div className="row">
                        <div className="col-3">{caes.court}</div>
                        <div className="col-3">{caes.caseNumber}</div>
                        <div className="col-3">{caes.judge}</div>
                        <div className="col-3">{caes.client}</div>
                    </div>
                    {/* </a> */}
                </Link >
            ))
        )
    }

    return (
        <div className="container modal-open">
            <style>{`
                .table-hover div.row:hover {
                    background-color: #ececec;
                }
                .table-hover .th div.row:hover {
                    background-color: inherit;
                }
                .table .row {
                    border-top: 1px solid #dee2e6;
                }
                .table .th .row {
                    border-top: none;
                }
                .table a .row .td {
                    display: inline;
                    color: black;
                }
                .table  a {
                    text-decoration: none;
                }
                .resource-list-header {
                    position: relative;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }
                .resource-list-header h2 {}
                .resource-list-header button {
                    position: absolute;
                    right: 0;
                }
            `}</style>
            <Header />
            <div className="resource-list-header">
                <h2>Cases</h2>
                <button className= "btn btn-primary" type="button" onClick={toggleShowAddCaseForm}>Create Case</button>
            </div>
            <div className="table table-hover">
                <div className="th">
                    <div className="row">
                        <div className="col-3 td">Court</div>
                        <div className="col-3 td">Case Number</div>
                        <div className="col-3 td">Judge</div>
                        <div className="col-3 td">Client</div>
                    </div>
                </div>
                <div className="tbody">
                    {renderedCases()}
                </div>
            </div>
            {cases.length === 0 && emptyState()}
            {showAddCaseForm && <AddCaseForm closeHandler={toggleShowAddCaseForm} />}
        </div>
    )
}