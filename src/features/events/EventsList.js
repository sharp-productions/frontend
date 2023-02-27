import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Header } from '../../components/header'
import { AddEventForm } from './AddEventForm'

export const EventsList = () => {
  const events = useSelector(state => state.events)

  const renderedEvents = events.map(event => (
    <article className="post-excerpt" key={event.id}>
      <h3>{event.title}</h3>
      <p className="post-content">{event.id}</p>
      <Link to={`/events/${event.id}`} className="button muted-button">View Event</Link>
    </article>
  ))

  return (
    <>
    <Header />
    <AddEventForm />
    <section className="posts-list">
      <h2>Events</h2>
      {renderedEvents}
    </section>
    </>    
  )
}