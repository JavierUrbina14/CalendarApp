import { Navbar } from "../";
import { Calendar } from 'react-big-calendar';
import { addHours } from "date-fns";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { localizer, getMessagesES } from "../../helpers";

export const CalendarPage = () => {


    const myEventsList = [{
        title: 'cumpleaños del jefe',
        notes: 'hay que comprar el pastel',
        start: new Date(),
        end: addHours(new Date(), 2),
        bgColor: '#fafafa',
        user: {
            _id: '123',
            name: 'Javier',
        }
    }]

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white',
        }
        return {
            style
        }
    }

    return (
        <>
            <Navbar />
            <Calendar
                culture="es"
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 80px' }}
                messages={getMessagesES()}
                eventPropGetter={eventStyleGetter}
            />
        </>
    )
}
