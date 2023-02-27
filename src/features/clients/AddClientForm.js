import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { clientAdded } from './clientsSlice'

export const AddClientForm = () => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        phone: "",
        email: "",
        referralSource: "",
        street: "",
        city: "",
        staet: "",
        zip: ""
    })

    const dispatch = useDispatch()

    const onInputChanged = ({ target }) => {
        const { name, value } = target
        setState({
            ...state,
            [name]: value
        })
    }

    const onSaveClientClicked = () => {
        if (state.firstName && state.lastName && (state.phone || state.email)) {
            const {
                firstName,
                lastName,
                dob,
                phone,
                email,
                referralSource,
                street,
                city,
                staet,
                zip
            } = state

            dispatch(
                clientAdded({
                    firstName,
                    lastName,
                    dob,
                    phone,
                    email,
                    referralSource,
                    street,
                    city,
                    staet,
                    zip
                })
            )
            setState({
                firstName: "",
                lastName: "",
                dob: "",
                phone: "",
                email: "",
                referralSource: "",
                street: "",
                city: "",
                staet: "",
                zip: ""
            })
        }
    }

    return (
        <>
            <style>{`
                .container {
                    max-width: 960px;
                }
                
                .center {
                    margin-left: auto;
                    margin-right: auto;
                }
            `}</style>
            <div className="container">
                <main>
                    <section>
                        <div className="col-md-7 col-lg-8 center">
                            <h2>Add a New Client</h2>
                            <form className="needs-validation" noValidate>
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <label htmlFor="firstName" className="form-label">First Name:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstName"
                                            name="firstName"
                                            value={state.firstName}
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
                                            value={state.lastName}
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
                                            value={state.dob}
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
                                            value={state.email}
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
                                            value={state.phone}
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
                                            value={state.referralSource}
                                            onChange={onInputChanged}
                                        />
                                    </div >
                                    <div className="col-sm-12">
                                        <label htmlFor="street" className="form-label">Street Address:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="street"
                                            name="street"
                                            value={state.street}
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
                                            value={state.city}
                                            onChange={onInputChanged}
                                        />
                                    </div >
                                    <div className="col-sm-12">
                                        <label htmlFor="staet" className="form-label">State:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="staet"
                                            name="staet"
                                            value={state.staet}
                                            onChange={onInputChanged}
                                        />
                                    </div >
                                </div>
                                <button type="button" onClick={onSaveClientClicked} >Save Client</button>
                            </form >
                        </div>
                    </section >
                </main>
            </div>
        </>
    )
}