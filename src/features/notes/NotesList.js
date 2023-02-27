import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Header } from "../../components/header"
import { AddNoteForm } from './AddNoteForm'

export const NotesList = () => {
    const notes = useSelector(state => state.notes)

    const renderedNotes = notes.map(note => (
        <article className="post-excerpt" key={note.id}>
            <h3>{note.title}</h3>
            <p className="post-content">{note.id}</p>
            <Link to={`/notes/${note.id}`} className="button muted-button">View Note</Link>
        </article>
    ))

    return (
        <>
            <Header />
            <AddNoteForm />
            <section className="posts-list">
                <h2>Notes</h2>
                {renderedNotes}
            </section>
        </>
    )
}