import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
    _id: new Date().getTime(),
    title: 'Cumpleaños del jefe',
    notes: 'hay que comprar el pastel y las velas',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
        _id: '123',
        name: 'Javier',
    }
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            tempEvent,
        ],
        activeEvent: null,
    },
    reducers: {
        handleSetActiveEvent: (state, { payload }) => {
            state.activeEvent = payload;
        },
        handleNewEvent: (state, { payload }) => {
            state.events = [...state.events, payload];
            state.activeEvent = null;
        },
        handleUpdateEvent: (state, { payload }) => {
            state.events = state.events.map( event => {
                if(event._id === payload._id) {
                    return payload;
                }
                return event;
            } )
        },
        handleDeleteEvent: ( state ) => {
            if(state.activeEvent === null) return;
            state.events = state.events.filter( event => event._id !== state.activeEvent._id );
            state.activeEvent = null;
        }
    },
});


export const { handleSetActiveEvent, handleNewEvent, handleUpdateEvent, handleDeleteEvent } = calendarSlice.actions;