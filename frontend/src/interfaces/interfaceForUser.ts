

export interface user {
    email: string,
    name?: string,
    password?: string,
    id?: string,
    token?: string
}

export interface propsCall {
    telephoneNumber: string
    date?: string,
    hour?: string,
    callDuration?: string,
    status: string,
    step: string,
    userId?: string,
    secondsForDate?: number,
    secondsForDuration?: number,
}

export const initialState = {
    email: "",
    id: "",
    token: ""
}

export type calls = {
    telephoneNumber: ""
    date: "",
    hour: "",
    callDuration: "",
    status: "",
    step: "",
    userId: "",
    secondsForDate: number,
    secondsForDuration: number,
}[]
    
