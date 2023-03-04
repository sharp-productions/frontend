import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

// import { AddEventForm } from "../events/AddEventForm"
// import { EventsList } from "../events/EventsList"
// import { AddChargeForm } from "../charges/AddChargeForm"
// import { ChargesList } from "../charges/ChargesList"
// import { AddTaskForm } from "../tasks/AddTaskForm"
// import { TasksList } from "../tasks/TasksList"
// import { AddNoteForm } from "../notes/AddNoteForm"
// import { NotesList } from "../notes/NotesList"
import { Header } from "../../components/header"

export const CaseDetail = () => {
    const params = useParams()
    const { caseId } = params;


    const caes = useSelector(state =>
        state.cases.find(caes => {
            return caes.id === +caseId
        })
    )


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
        <>
            <Header />
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
        </>
    )
}