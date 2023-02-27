import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import caseAdded from './casesSlice'

export const AddCaseForm = () => {
    const [state, setState] = useState({
        caseNumber: "",
        client: "",
        judge: "",
        prosecutor: "",
    })

    const dispatch = useDispatch()

    const onInputChanged = ({ target }) => {
        const { name, value } = target
        setState({
            ...state,
            [name]: value
        })
    }

    const onSaveCaseClicked = () => {
        if (state.client) {
            const {
                caseNumber,
                charges,
                client,
                events,
                judge,
                notes,
                prosecutor,
                tasks
            } = state

            dispatch(
                caseAdded({
                    id: nanoid(),
                    caseNumber,
                    charges,
                    client,
                    events,
                    judge,
                    notes,
                    prosecutor,
                    tasks
                })
            )
            setState({
                caseNumber: "",
                charges: [],
                client: "",
                events: [],
                judge: "",
                notes: [],
                prosecutor: "",
                tasks: []
            })
        }
    }

    return (
        <section>
            <h2>Add a New Case</h2>
            <form>
                <div>{state.client}</div>
                <div>
                    <label htmlFor="caseTitle">Case Number:</label>
                    <input
                        type="text"
                        id="caseNumber"
                        name="caseNumber"
                        value={state.caseNumber}
                        onChange={onInputChanged}
                    />
                </div>
                <div>
                    <label htmlFor="judge">Judge:</label>
                    <input
                        type="text"
                        id="judge"
                        name="judge"
                        value={state.judge}
                        onChange={onInputChanged}
                    />
                </div>
                <div>
                    <label htmlFor="prosecutor">Prosecutor:</label>
                    <input
                        type="text"
                        id="prosecutor"
                        name="prosecutor"
                        value={state.prosecutor}
                        onChange={onInputChanged}
                    />
                </div>
                <button type="button" onClick={onSaveCaseClicked} >Save Case</button>
            </form>
        </section>
    )
}