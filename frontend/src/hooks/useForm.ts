import { ChangeEvent, FocusEvent, useState } from "react"
import { user } from "../interfaces/interfaceForUser"


const useForm = () => {

    const [logUser, setLogUser] = useState<user>({
        email: "",
        password: ""
    })

    const [classForInput, setClassForInput] = useState<user>({email: "divToInput", password: "divToInput"})
    

    const handleCheckInput = ({target}: FocusEvent<HTMLInputElement>) => {
        const { value, name } = target
        let changeClass: string = value === ""  ? "divToInputError" :
        value  ? "divToInputOk" : "divToInput"
        setClassForInput({...classForInput, [name]: changeClass})
    }


    const handleEntryUser = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target
        setLogUser({...logUser, [name] : value})
    }

    return { 
        logUser,
        classForInput,
        handleCheckInput,
        handleEntryUser
    }
    

}

export default useForm