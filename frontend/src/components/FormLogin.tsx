
import ReactTooltip from "react-tooltip"
import { ReactComponent as Error } from "../assets/cross.svg"
import { ReactComponent as Check } from "../assets/gc-icon_check.svg"

import useForm from "../hooks/useForm"


const FormLogin = () => {

    const { logUser, handleCheckInput, handleEntryUser, classForInput, inputStatusContent, handleLogUser, error } = useForm()
    const { email, password } = classForInput


    return (
        <>
            {inputStatusContent.email === "error" ? <ReactTooltip place="right" type="error" effect="solid" id="error">{error ? "Email o contraseña incorrecta" : "Debe completar este campo"}</ReactTooltip> : null}
            {inputStatusContent.password === "error" ? <ReactTooltip place="right" type="error" effect="solid" id="error">{error ? "Email o contraseña incorrecta" : "Debe completar este campo"}</ReactTooltip> : null}
            <form className="form" onSubmit={handleLogUser}>
                <div className="inputContainer">
                    <div className="titleInput"><span><p>Correo</p>electrónico</span></div>
                    <div className={email}>
                        <input type="email" name="email" value={logUser.email} onChange={handleEntryUser} onBlur={handleCheckInput}/>
                        <div  className={inputStatusContent.email} data-tip data-for="error">
                            {email === "divToInputError" ? <Error width={20} /> : email === "divToInputOk" ? <Check width={20} className="checkForInput"/> : null}
                        </div>
                        
                    </div>
                </div>
                <div className="inputContainer">
                    <div className="titleInput">
                        <p>Contraseña</p>
                    </div>
                    <div className={password}>
                        <input type="password" name="password" value={logUser.password} onChange={handleEntryUser} onBlur={handleCheckInput}/>
                        <div  className={inputStatusContent.password} data-tip data-for="error">
                            {password === "divToInputError" ? <Error width={20} /> : password === "divToInputOk" ? <Check width={20} className="checkForInput"/> : null}
                        </div>
                        
                    </div>
                </div>
                <button className="buttonLogin">INGRESAR</button>
            </form>
        </>
    )
}

export default FormLogin