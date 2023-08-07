import { MODAL_CHANGE } from "../actions/modalAction";

const initialState = {
    isOpen: false,
    mode: "add",
    task: null
};

const modalReducer = (state = initialState, action) => { 
    switch (action.type) { 
        case MODAL_CHANGE: {
            return {
                ...state, ...action.payload, 
            }
        }
        default: return state;
    }
}

export default modalReducer;