import axios from "axios"
import { useReducer } from "react"
import { initialState, propsCall, user } from "../interfaces/interfaceForUser"
import { userReducer } from "../reducer/userReducer"
import { UserContext } from "./UserContext"

interface props {
    children: JSX.Element | JSX.Element[]
}

const URL = "https://gocloud-omni.herokuapp.com/api"

export const UserProvider = ({children}: props) => {

    const [userState, dispatch] = useReducer(userReducer, initialState)

    const signIn = async (userLogged: user) => {
        try {
            let res = await axios.post(`${URL}/login`, userLogged)
            if (res.data.success) dispatch({type: "LOGIN", payload: res.data.response})
            return res.data
        }catch(error: any) {
            return error.message
        }
    }

    const logOut = () => {
        dispatch({type: "LOGOUT"})
    }

    const getCalls = async (id: string): Promise<propsCall> => {
        let res = await axios.get(`${URL}/call/${id}`)
        
        return res.data
    }


    return (
        <UserContext.Provider value={{
            signIn,
            logOut,
            getCalls,
            userState
        }}>
            {children}
        </UserContext.Provider>
    )
}
