import { ADD_NUMBER, SUBTRACT_NUMBER } from "../constant/constant";

function counterReducer (state=0, action) {
    switch (action.type) {
        case ADD_NUMBER:
            return state + 1;
        case SUBTRACT_NUMBER:
            return state - 1;
        default:
            return state;
    }
}

export default counterReducer;