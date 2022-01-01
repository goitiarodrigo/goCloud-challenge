

export interface user {
    email: string,
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