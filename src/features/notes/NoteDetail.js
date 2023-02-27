import { useSelector } from "react-redux"

import { Header } from "../../components/header"

export const NoteDetail = ({ match }) => {
    const { noteId } = match.params

    const note = useSelector(state =>
        state.notes.find(note => note.id === noteId)
    )

    if (!note) {
        return (
            <>
                <Header />
                <section>
                    <h2>Note not found!</h2>
                </section>
            </>
        )
    }

    return (
        <>
            <Header />
            <section>
                <article className="post">
                    <h2>Case {note.caseNumber}</h2>
                    <p>Date: {note.date}</p>
                    <p>Note: {note.text}</p>
                </article>
            </section>
        </>
    )
}