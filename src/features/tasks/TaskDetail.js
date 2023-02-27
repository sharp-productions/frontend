import { useSelector } from "react-redux"

import { Header } from "../../components/header"

export const TaskDetail = ({ match }) => {
    const { taskId } = match.params

    const task = useSelector(state =>
        state.tasks.find(task => task.id === taskId)
    )

    if (!task) {
        return (
            <>
                <Header />
                <section>
                    <h2>Task not found!</h2>
                </section>
            </>
        )
    }

    return (
        <>
            <Header />
            <section>
                <article className="post">
                    <h2>Case {task.caseNumber}</h2>
                    <p>Date: {task.title}</p>
                    <p>Note: {task.details}</p>
                </article>
            </section>
        </>
    )
}