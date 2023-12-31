import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns'
import { NavBar, CalendarEvent } from "../"

import { localizer, getMessagesES } from '../../helpers'



const events = [{
  title: 'cumpleaños del jefe',
  notes: 'hay que comprar el pastel',
  start: new Date(),
  end: addHours( new Date(), 0 ),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Rafa'
  }
}];

export const CalendarPage = () => {

  const eventStyleGetter = ( event, start, end, isSelected ) => {

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }

  return (
    <>
      <NavBar />

      <Calendar
      culture='es'
        localizer={ localizer } 
        events={ events }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
        messages={ getMessagesES() }
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent
        }}
      />

    </>
  )
}
