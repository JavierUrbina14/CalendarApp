import { useDispatch, useSelector } from "react-redux";
import { handleDeleteEvent, handleNewEvent, handleSetActiveEvent, handleUpdateEvent } from "../redux/calendar/calendarSlice";

export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar );

    const setActiveEvent = (calendarEvent) => {
        dispatch( handleSetActiveEvent(calendarEvent) );
    }

    const startSavingEvent = async( calendarEvent ) => {
        //todo: llegar al backend
        if(calendarEvent._id){
            //todo: actualizar
            dispatch( handleUpdateEvent({...calendarEvent}));
        } else {
            //todo: crear registro
            dispatch( handleNewEvent( {...calendarEvent, _id: new Date().getTime()} ) );
        }
    }

    const startDeletingEvent = () => {
        dispatch( handleDeleteEvent() );
    }
    

    return {
        //* Properties
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        //* Methods
        startDeletingEvent,
        setActiveEvent,
        startSavingEvent,
    }
};
