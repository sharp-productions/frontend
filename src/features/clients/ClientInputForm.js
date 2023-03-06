import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { createClient, updateClient } from './clientsAPI'

export const ClientInputForm = ({ closeHandler, mode, client }) => {
    client = client || {}
    const [clientState, setClientState] = useState({
                id: client.id || "",
                firstName: client.firstName || "",
                lastName: client.lastName || "",
                dob: client.dob || "",
                email: client.email || "",
                phone: client.phone || "",
                referralSource: client.referralSource || "",
                address1: client.address1 || "",
                address2: client.address2 || "",
                city: client.city || "",
                state: client.state || "",
                zip: client.zip || ""
    })

    const dispatch = useDispatch()

    const onInputChanged = ({ target }) => {
        const { name, value } = target
        setClientState({
            ...clientState,
            [name]: value
        })
    }

    const onSaveClientClicked = () => {
        if (clientState.firstName && clientState.lastName && (clientState.phone || clientState.email)) {
            if (mode === "add") {
                delete clientState.id
                dispatch(createClient(clientState))
            } else {
                dispatch(updateClient(clientState))
            }
            setClientState({
                id: "",
                firstName: "",
                lastName: "",
                dob: "",
                email: "",
                phone: "",
                referralSource: "",
                address1: "",
                address2: "",
                city: "",
                state: "",
                zip: ""
            })
            closeHandler()
        }
    }

    return (
        <>
            <style>{`
                .center {
                    margin-left: auto;
                    margin-right: auto;
                }
            `}</style>
            <div className="modal fade show" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog" style={{ display: "block" }}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{mode === "add" ? "Create" : "Edit"} Client</h1>
                            <button type="button" className="btn-close" onClick={closeHandler}></button>
                        </div>
                        <div className="modal-body">
                            <div className="col-md-7 col-lg-8 center">
                                <h2>{"mode" === "add" ? "Add a New Client" : "Client Details"}</h2>
                                <form className="needs-validation" noValidate>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <label htmlFor="firstName" className="form-label">First Name:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="firstName"
                                                name="firstName"
                                                value={clientState.firstName}
                                                onChange={onInputChanged}
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="lastName" className="form-label">Last Name:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="lastName"
                                                name="lastName"
                                                value={clientState.lastName}
                                                onChange={onInputChanged}
                                            />
                                        </div>
                                        <div className="col-sm-12">
                                            <label htmlFor="dob" className="form-label">Date of Birth:</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="dob"
                                                name="dob"
                                                value={clientState.dob}
                                                onChange={onInputChanged}
                                            />
                                        </div>
                                        <div className="col-sm-12">
                                            <label htmlFor="email" className="form-label">Email:</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                value={clientState.email}
                                                onChange={onInputChanged}
                                            />
                                        </div>
                                        <div className="col-sm-12">
                                            <label htmlFor="phone" className="form-label">Phone Number:</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                id="phone"
                                                name="phone"
                                                value={clientState.phone}
                                                onChange={onInputChanged}
                                            />
                                        </div >
                                        <div className="col-sm-12">
                                            <label htmlFor="referralSource" className="form-label">Referral Source:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="referralSource"
                                                name="referralSource"
                                                value={clientState.referralSource}
                                                onChange={onInputChanged}
                                            />
                                        </div >
                                        <div className="col-sm-12">
                                            <label htmlFor="address1" className="form-label">Address 1:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="address1"
                                                name="address1"
                                                value={clientState.address1}
                                                onChange={onInputChanged}
                                            />
                                        </div >
                                        <div className="col-sm-12">
                                            <label htmlFor="address2" className="form-label">Address 2:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="address2"
                                                name="address2"
                                                value={clientState.address2}
                                                onChange={onInputChanged}
                                            />
                                        </div >
                                        <div className="col-sm-12">
                                            <label htmlFor="city" className="form-label">City:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="city"
                                                name="city"
                                                value={clientState.city}
                                                onChange={onInputChanged}
                                            />
                                        </div >
                                        <div className="col-sm-12">
                                            <label htmlFor="state" className="form-label">State:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="state"
                                                name="state"
                                                value={clientState.state}
                                                onChange={onInputChanged}
                                            />
                                        </div >
                                        <div className="col-sm-12">
                                            <label htmlFor="zip" className="form-label">Zip:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="zip"
                                                name="zip"
                                                value={clientState.zip}
                                                onChange={onInputChanged}
                                            />
                                        </div >
                                    </div>
                                </form >
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary"  onClick={closeHandler}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={onSaveClientClicked}>Save Client</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show" />
        </>
    )
}