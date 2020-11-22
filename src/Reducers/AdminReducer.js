import { Admintype } from '../Actions/ActionType';
const initialState = {
    response: [],
    challenges: [],
    challengesdetails: [],
    departments: []

}
export default function AdminReducer(state = initialState, action) {
    switch (action.type) {
        case Admintype.CREATED_SUCCESSFULLY:
            return {
                ...state, response: action.payload,
            }
        case Admintype.GET_CHALLENGES:
            return {
                ...state, challenges: action.payload,
            }
        case Admintype.GET_CHALLENGES_DETAILS:
            return {
                ...state, challengesdetails: action.payload,
            }
        case Admintype.GET_DEPARTMENTS_BY_COMPANY:
            return {
                ...state, departments: action.payload,
            }
        default:
            return state

    }
}