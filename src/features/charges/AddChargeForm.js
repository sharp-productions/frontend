import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import chargeAdded from './chargesSlice'

export const AddChargeForm = () => {
    const [state, setState] = useState({
        caseNumber: "",
        incidentDate: "",
        chargeName: "",
        chargeStatute: ""
    })

    const dispatch = useDispatch()

    const onInputChanged = ({ target }) => {
        const { name, value } = target
        setState({
            ...state,
            [name]: value
        })
    }

    const onSaveChargeClicked = () => {
        if (state.caseNumber && state.chargeName) {
            const {
                caseNumber,
                incidentDate,
                chargeName,
                chargeStatute
            } = state

            dispatch(
                chargeAdded({
                    id: nanoid(),
                    caseNumber,
                    incidentDate,
                    chargeName,
                    chargeStatute
                })
            )
            setState({
                caseNumber: "",
                incidentDate: "",
                chargeName: "",
                chargeStatute: ""
            })
        }
    }

    return (
        <section>
            <h2>Add a New Charge</h2>
            <form>
                <div>{state.client}</div>
                <div>{state.caseNumber}</div>
                <label htmlFor="incidentDate">Incident Date:</label>
                <input
                    type="date"
                    id="incidentDate"
                    name="incidentDate"
                    value={state.incidentDate}
                    onChange={onInputChanged}
                />
                <label htmlFor="chargeName">Name of Charge:</label>
                <input
                    type="text"
                    id="chargeName"
                    name="chargeStatute"
                    value={state.chargeName}
                    onChange={onInputChanged}
                />
                <label htmlFor="chargeStatute">Charge Statute:</label>
                <input
                    type="text"
                    id="chargeStatute"
                    name="chargeStatute"
                    value={state.chargeStatute}
                    onChange={onInputChanged}
                />

                <button type="button" onClick={onSaveChargeClicked} >Save Charge</button>
            </form>
        </section>
    )
}