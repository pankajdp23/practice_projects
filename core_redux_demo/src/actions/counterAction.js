import { ADD_NUMBER, SUBTRACT_NUMBER } from "../constant/constant"

export const addNumber = () => {
    return {
        type: ADD_NUMBER,
    };
};

export const substractNumber = () => {
    return {
        type: SUBTRACT_NUMBER,
    }
}