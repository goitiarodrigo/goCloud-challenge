import { FormEvent, useContext } from "react"
import { UserContext } from "../context/UserContext"

import { ReactComponent as Error } from "../assets/cross.svg"
import { ReactComponent as Check } from "../assets/gc-icon_check.svg"
import { useNavigate } from "react-router-dom"
import useForm from "../hooks/useForm"


const FormLogin = () => {

    const { signIn } = useContext(UserContext)
    const navigate = useNavigate()

    
    const { logUser, handleCheckInput, handleEntryUser, classForInput } = useForm()

    const handleLogUser = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let res = await signIn(logUser)
        if (!res.success) console.log(res.response)
        navigate("/details")
    }


    return (
        <>
            <form className="form" onSubmit={handleLogUser}>
                <div className="inputContainer">
                    <div className="titleInput"><span><p>Correo</p>electrónico</span></div>
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