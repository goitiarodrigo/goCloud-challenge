import { createContext } from "react";
import { propsCall, user } from "../interfaces/interfaceForUser";

interface functionsForUsers {
    signIn: (user: user) => object
    getCalls: (id: string) => Promise<any>
    logOut: () => void
    userState: user
}

export const UserContext = createContext({} as functionsForUsers)