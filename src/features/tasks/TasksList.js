import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Header } from '../../components/header'
import { AddTaskForm } from './AddTaskForm'

export const TasksList = () => {
    const tasks = useSelector(state => state.tasks)

    const renderedTasks = tasks.map(task => (
        <article className="post-excerpt" key={task.id}>
            <h3>{task.title}</h3>
            <p className="post-content">{task.id}</p>
            <Link to={`/tasks/${task.id}`} className="button muted-button">View Task</Link>
        </article>
    ))

    return (
        <>
            <Header />
            <AddTaskForm />
            <section className="posts-list">
                <h2>Tasks</h2>
                {renderedTasks}
            </section>
        </>
    )
}