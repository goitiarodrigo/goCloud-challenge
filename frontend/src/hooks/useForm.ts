import { ChangeEvent, FocusEvent, FormEvent, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import { user } from "../interfaces/interfaceForUser"


const useForm = () => {

    const { signIn } = useContext(UserContext)
    const navigate = useNavigate()

    const [logUser, setLogUser] = useState<user>({
        email: "",
        password: ""
    })

    const [error, setError] = useState(false)
    
    const [classForInput, setClassForInput] = useState<user>({email: error ? "divToInputError" : "divToInput", password: error ? "divToInputError" : "divToInput"})
    

    const inputStatusContent: user = {
        email: classForInput.email === "divToInputError" ? "error" : classForInput.email === "divToInputOk" ? "notError" : "",
        password: classForInput.password === "divToInputError" ? "error" : classForInput.password === "divToInputOk" ? "notError" : ""
    }


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

    const handleLogUser = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let res = await signIn(logUser)
        console.log(res)
        if (!res.success) {
            setClassForInput({...classForInput, email: "divToInputError", password: "divToInputError"})
            setError(true)
        }else navigate("/")
    }

    return { 
        logUser,
        classForInput,
        inputStatusContent,
        error,
        handleCheckInput,
        handleEntryUser,
        handleLogUser
    }
    

}

export default useForm