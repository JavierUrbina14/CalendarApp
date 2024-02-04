import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks"

export const FabAddNewEvent = () => {

    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore();

    const handleClickNew = () => {
        setActiveEvent({
            title: 'New event',
            notes: '',
            start: new Date(),
            end: addHours(new Date(), 2),
            bgcolor: '#fafafa',
            user: {
                _id: '123',
                name: 'Javier'
            }
        });
        openDateModal();
    }

    return (
        <button className="btn btn-primary fab" onClick={handleClickNew}>
            <i className="fas fa-plus"></i>
        </button>
    )
}
