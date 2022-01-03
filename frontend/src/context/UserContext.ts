import { createContext } from "react";
import { user } from "../interfaces/interfaceForUser";

interface functionsForUsers {
    signIn: (user: user) => Promise<any>
    getCalls: (id: string) => Promise<any>
    logOut: () => void
    userState: user
}

export const UserContext = createContext({} as functionsForUsers)