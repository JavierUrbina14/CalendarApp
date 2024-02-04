import { useDispatch, useSelector } from "react-redux"
import { onCloseDateModal, onOpenDateModal } from "../redux/ui/uiSlice";

export const useUiStore = () => {
    const { isDateModalOpen } = useSelector( state => state.ui );
    const dispatch = useDispatch();

    const openDateModal = () => {
        dispatch( onOpenDateModal() );
    }

    const closeDateModal = () => {
        dispatch( onCloseDateModal() );
    }

    const toggleDateModal = () => {
        (isDateModalOpen)
        ? openDateModal()
        : closeDateModal();
    }


    return {
        // Propiedades
        isDateModalOpen,

        // Funciones
        openDateModal,
        closeDateModal,
        toggleDateModal
    }

}