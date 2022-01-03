import { user } from "../interfaces/interfaceForUser";


export type propsActions = 
    | {type: "LOGIN", payload: any}
    | {type: "GET_DETAILS", payload: any}
    | {type: "LOGOUT"}


export const userReducer = (state: user, action: propsActions) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                id: action.payload.dataUser.id,
                email: action.payload.dataUser.email,
                name: action.payload.dataUser.name,
                token: action.payload.dataUser.token
            }
        case "LOGOUT":
            return {
                id: "",
                email: "",
                token: ""
            }
            
        
        default:
            return state;
    }
}