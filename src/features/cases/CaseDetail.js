import { useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import { Header } from "../../components/header"
import { CaseInputForm } from "./CaseInputForm"
// import { AddEventForm } from "../events/AddEventForm"
// import { EventsList } from "../events/EventsList"
// import { AddChargeForm } from "../charges/AddChargeForm"
// import { ChargesList } from "../charges/ChargesList"
// import { AddTaskForm } from "../tasks/AddTaskForm"
// import { TasksList } from "../tasks/TasksList"
// import { AddNoteForm } from "../notes/AddNoteForm"
// import { NotesList } from "../notes/NotesList"


export const CaseDetail = () => {
    const [showCaseInputForm, setShowCaseInputForm] = useState(false)
    const params = useParams()
    const { caseId } = params;

    // NOTE: the function below uses the variable "caes"
    // rather than "case" because "case" is a keyword in javascript
    const caes = useSelector(state =>
        state.cases.find(caes => {
            return caes.id === +caseId
        })
    )

    const toggleShowCaseInputForm = () => {
        setShowCaseInputForm(!showCaseInputForm)
    }

    if (!caes) {
        return (
            <>
                <Header />
                <section>
                    <h2>Case not found!</h2>
                </section>
            </>
        )
    }

    return (
        <div className="container modal-open">
            <style>{`
                .resource-page-header {
                    position: relative;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }
                .resource-page-header a {
                    position: absolute;
                    left: 0;
                }
                .resource-page-header h2 {}
                .resource-page-header button {
                    position: absolute;
                    right: 0;
                }
            `}</style>
            <Header />
            <div className="resource-page-header">
                <a href="/cases">Back to Cases listview</a>
                <h2>Case Number: {caes.caseNumber}</h2>
                <button className="btn btn-primary" type="button" onClick={toggleShowCaseInputForm}>Update Case Info</button>
            </div>
            <div>
                <div className="">
                    <h2>Case Number {caes.caseNumber}</h2>
                    <p>Client: {caes.client}</p>
                    <p>Judge: {caes.judge}</p>
                    <p>Prosecutor: {caes.prosecutor}</p>
                </div>
                {/* <AddEventForm />
                <EventsList />

                <AddChargeForm />
                <ChargesList />

                <AddTaskForm />
                <TasksList />

                <AddNoteForm />
                <NotesList /> */}
            </div>
            {showCaseInputForm && <CaseInputForm mode="edit" client={caes} closeHandler={toggleShowCaseInputForm} />}
        </div>
    )
}