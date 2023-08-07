import { SET_SEARCH_VALUE } from "../actions/searchAction";


const initialState = {
    searchValue: "",
    date: null
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_VALUE: {
            return { ...state, ...action.payload };
        }
        default: return state;
    }
}

export default searchReducer;