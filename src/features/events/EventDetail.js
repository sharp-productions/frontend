import { useSelector } from "react-redux"

import { Header } from "../../components/header"

export const EventDetail = ({ match }) => {
    const { eventId } = match.params

    const event = useSelector(state =>
        state.events.find(event => event.id === eventId)
    )

    if (!event) {
        return (
            <>
                <Header />
                <section>
                    <h2>Event not found!</h2>
                </section>
            </>
        )
    }

    return (
        <>
            <Header />
            <section>
                <article className="post">
                    <h2>{event.type}</h2>
                    <p>Date: {event.date}</p>
                    <p>Location/Link/Phone: {event.location}</p>
                    {event.otherParties.map(party => <p>{party}</p>)}
                </article>
            </section>
        </>
    )
}