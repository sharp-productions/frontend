import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Header } from '../../components/header'
import { ClientInputForm } from './ClientInputForm'
import { getClients } from './clientsAPI'

export const ClientsList = () => {

    const clients = useSelector(state => state.clients)
    const dispatch = useDispatch()

    const [showAddClientForm, setShowAddClientForm] = useState(false)

    useEffect(() => {
        dispatch(getClients())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const toggleShowAddClientForm = () => {
        setShowAddClientForm(!showAddClientForm)
    }

    const emptyState = () => {
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
    }

    const renderedClients = () => {
        return (
            clients.map(client => (

                <Link key={client.id} to={`/clients/${client.id}`} >
                    {/* <a key={client.id} href={`/clients/${client.id}`}></a> */}
                    <div className="row">
                        <div className="col-3 td">{client.lastName}</div>
                        <div className="col-3 td" >{client.firstName}</div>
                        <div className="col-3 td" >{client.phone}</div>
                        <div className="col-3 td" >{client.email}</div>
                    </div >
                    {/* </a> */}
                </Link >

            ))
        )
    }

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
                    <h2>Clients</h2>
                    <button className="btn btn-primary" type="button" onClick={toggleShowAddClientForm}>Create Client</button>
                </div>
                <div className="table table-hover">
                    <div className="th">
                        <div className="row">
                            <div className="col-3 td">Last Name</div>
                            <div className="col-3 td">Preferred Name</div>
                            <div className="col-3 td">Phone</div>
                            <div className="col-3 td">Email</div>
                        </div>
                    </div>
                    <div className="tbody">
                        {renderedClients()}
                    </div>
                </div>
                {clients.length === 0 && emptyState()}
                {showAddClientForm && <ClientInputForm mode="add" closeHandler={toggleShowAddClientForm} />}
            </div>
        </>
    )
}