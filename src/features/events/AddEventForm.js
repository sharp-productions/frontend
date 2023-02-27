import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import eventAdded from './eventsSlice'

export const AddEventForm = () => {
    const [state, setState] = useState({
        caseNumber: "",
        type: "",
        date: "",
        location: "",
        link: "",
        otherParties: []
    })

    const dispatch = useDispatch()

    const onInputChanged = ({ target }) => {
        const { name, value } = target
        setState({
            ...state,
            [name]: value
        })
    }

    const onSaveEventClicked = () => {
        if (state.caseNumber) {
            const {
                caseNumber,
                type,
                date,
                location,
                link,
                otherParties
            } = state

            dispatch(
                eventAdded({
                    caseNumber,
                    type,
                    date,
                    location,
                    link,
                    otherParties
                })
            )
            setState({
                caseNumber: "",
                type: "",
                date: "",
                location: "",
                link: "",
                otherParties: []
            })
        }
    }

    return (
        <section>
            <h2>Add a New Event</h2>
            <form>
                <div>Case Number: {state.caseNumber}</div>
                <label htmlFor="type">Event Type:</label>
                <input
                    type="text"
                    id="type"
                    name="type"
                    value={state.type}
                    onChange={onInputChanged}
                />
                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={state.date}
                    onChange={onInputChanged}
                />
                <label htmlFor="location">Location/Link/Phone:</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    value={state.location}
                    onChange={onInputChanged}
                />
                <label htmlFor="otherParties">Other Party:</label>
                <input
                    type="text"
                    id="otherParties"
                    name="otherParties"
                    value={state.otherParties[0]}
                    onChange={onInputChanged}
                />
                
                <button type="button" onClick={onSaveEventClicked} >Save Event</button>
            </form>
        </section>
    )
}