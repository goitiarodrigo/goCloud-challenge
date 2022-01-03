import { ChangeEvent, useState, FormEvent, useContext, FocusEvent } from "react"
import { UserContext } from "../context/UserContext"
import { user } from "../interfaces/interfaceForUser"
import { ReactComponent as Error } from "../assets/cross.svg"
import { ReactComponent as Check } from "../assets/gc-icon_check.svg"
import { useNavigate } from "react-router-dom"


const FormLogin = () => {

    const { signIn, userState } = useContext(UserContext)
    const navigate = useNavigate()
    
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

    const handleLogUser = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        signIn(logUser)
        navigate("/details")
    }


    return (
        <>
            <form className="form" onSubmit={handleLogUser}>
                <div className="inputContainer">
                    <div className="titleInput"><p><p>Correo</p>electrónico</p></div>
                    <div className={classForInput.email}>
                        <input type="email" name="email" value={logUser.email} onChange={handleEntryUser} onBlur={handleCheckInput}/>
                        <div className={classForInput.email === "divToInputError" ? "error" : classForInput.email === "divToInputOk" ? "notError" : ""}>
                            {classForInput.email === "divToInputError" ? <Error width={20} /> : classForInput.email === "divToInputOk" ? <Check width={20} className="checkForInput"/> : null}
                        </div>
                        
                    </div>
                </div>
                <div className="inputContainer">
                    <div className="titleInput">
                        <p>Contraseña</p>
                    </div>
                    <div className={classForInput.password}>
                        <input type="password" name="password" value={logUser.password} onChange={handleEntryUser} onBlur={handleCheckInput}/>
                        <div className={classForInput.password === "divToInputError" ? "error" : classForInput.password === "divToInputOk" ? "notError" : ""}>
                            {classForInput.password === "divToInputError" ? <Error width={20} /> : classForInput.password === "divToInputOk" ? <Check width={20} className="checkForInput"/> : null}
                        </div>
                    </div>
                </div>
                <button className="buttonLogin">INGRESAR</button>
            </form>
        </>
    )
}

export default FormLogin