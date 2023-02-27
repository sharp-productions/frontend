import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import taskAdded from './tasksSlice'

export const AddTaskForm = () => {
    const [state, setState] = useState({
        caseNumber: "",
        title: "",
        details: ""
    })

    const dispatch = useDispatch()

    const onInputChanged = ({ target }) => {
        const { name, value } = target
        setState({
            ...state,
            [name]: value
        })
    }

    const onSaveTaskClicked = () => {
        if (state.caseNumber && state.title) {
            const {
                caseNumber,
                title,
                details
            } = state

            dispatch(
                taskAdded({
                    caseNumber,
                    title,
                    details
                })
            )
            setState({
                caseNumber: "",
                title: "",
                details: ""
            })
        }
    }

    return (
        <section>
            <h2>Add a New Task for case {state.caseNumber}</h2>
            <form>
                <label htmlFor="title">Task title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={state.title}
                    onChange={onInputChanged}
                />
                <label htmlFor="details">Details:</label>
                <input
                    type="text"
                    id="details"
                    name="details"
                    value={state.details}
                    onChange={onInputChanged}
                />                
                <button type="button" onClick={onSaveTaskClicked} >Save Task</button>
            </form>
        </section>
    )
}