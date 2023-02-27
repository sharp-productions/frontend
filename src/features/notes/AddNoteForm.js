import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import noteAdded from './notesSlice'

export const AddNoteForm = () => {
    const [state, setState] = useState({
        caseNumber: "",
        date: "",
        text: ""
    })

    const dispatch = useDispatch()

    const onInputChanged = ({ target }) => {
        const { name, value } = target
        setState({
            ...state,
            [name]: value
        })
    }

    const onSaveNoteClicked = () => {
        if (state.caseNumber && state.text) {
            const { caseNumber, text } = state

            dispatch(
                noteAdded({
                    caseNumber,
                    date: new Date().toISOString(),
                    text
                })
            )
            setState({
                caseNumber: "",
                date: "",
                text: ""
            })
        }
    }

    return (
        <section>
            <h2>Add a New Note for case {state.caseNumber}</h2>
            <form>
                <label htmlFor="note">Note:</label>
                <textarea
                    id="note"
                    name="note"
                    value={state.note}
                    onChange={onInputChanged}
                />                
                <button type="button" onClick={onSaveNoteClicked} >Save Note</button>
            </form>
        </section>
    )
}