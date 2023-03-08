import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom'

import { Header } from "../../components/header"
import { CaseInputForm } from './CaseInputForm'
import { getCases } from './casesAPI'
import { getClient } from '../clients/clientsAPI'

export const CasesList = () => {

    const cases = useSelector(state => state.cases)
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const createFor = searchParams.get("createFor")

    const [showAddCaseForm, setShowAddCaseForm] = useState(false)
    const [client, setClient] = useState({})

    useEffect(() => {
        dispatch(getCases())
        if (createFor) {
            // get client from clientId provided by createFor
            dispatch(getClient(createFor))
                .then(response => {
                    if (response.type === "clients/getClient/fulfilled") {
                        setClient(response.payload)
                        setShowAddCaseForm(true)
                    }
                })

        }
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
    const renderedCases = () => cases.map(caes => (
        <Link key={caes.id} to={`/cases/${caes.id}`}>
            <div className="row">
                <div className="col-3 td">{caes.court || "None"}</div>
                <div className="col-3 td">{caes.caseNumber || "None"}</div>
                <div className="col-3 td">{caes.judge || "None"}</div>
                <div className="col-3 td">{`${caes.client.firstName} ${caes.client.lastName}`}</div>
            </div>
        </Link >
    ))


    return (
        <>
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
                .resource-page-header {
                    position: relative;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }
                .resource-page-header h2 {}
                .resource-page-header button {
                    position: absolute;
                    right: 0;
                }
            `}</style>
            <Header />
            <div className="container modal-open">
                <div className="resource-page-header">
                    <h2>Cases</h2>
                    <button className="btn btn-primary" type="button" onClick={toggleShowAddCaseForm}>Create Case</button>
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
                {showAddCaseForm && <CaseInputForm mode="add" clientId={createFor} clientFirstName={client.firstName} clientLastName={client.lastName} closeHandler={toggleShowAddCaseForm} />}
            </div>
        </>
    )
}