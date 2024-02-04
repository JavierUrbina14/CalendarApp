import { CalendarEvent, FabAddNewEvent, Navbar } from "../";
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { localizer, getMessagesES } from "../../helpers";
import { useState } from "react";
import { CalendarModal } from "../components/CalendarModal";
import { useUiStore, useCalendarStore } from "../../hooks";
import { FabDeleteEvent } from "../components/FabDeleteEvent";

export const CalendarPage = () => {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')


    const { openDateModal } = useUiStore();
    const { events, setActiveEvent } = useCalendarStore();


    const eventStyleGetter = () => {
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

    const onDoubleClick = () => {
        openDateModal();
    }
    const onSelect = ( event ) => {
        setActiveEvent(event)
    }

    const onViewChange = ( event ) => {
        localStorage.setItem( 'lastView', event )
        setLastView(event)
    }

    return (
        <>
            <Navbar />
            <Calendar
                culture="es"
                localizer={localizer}
                events={events}
                defaultView={lastView}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 80px' }}
                messages={getMessagesES()}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                onView={onViewChange}
                
            />
            <CalendarModal />
            <FabAddNewEvent />
            <FabDeleteEvent />
        </>
    )
}
