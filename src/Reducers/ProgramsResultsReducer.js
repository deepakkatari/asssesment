import { LoginType } from '../Actions/ActionType';
const initialState = {
    data: []
}
const companydetails = (state, action) => {
    var tempDate = new Date();

    let items = []
    action.companydata.map((item, index) => {
        const obj = {
            startDate: item.startDate,
            endDate: item.endDate,
            createdAt: item.createdAt,
            users: item.noOfUsers,
            status: new Date(item.endDate).getTime() < tempDate.getTime() ? 'Completed' : "Active",
        }
        items.push(obj)
        return item;
    })
    return { ...state, data: items }
}
export default function ProgramsResultsReducer(state = initialState, action) {
    switch (action.type) {
        case LoginType.COMPANY_DETAILS:
            return companydetails(state, action)
        default:
            return state
    }
}