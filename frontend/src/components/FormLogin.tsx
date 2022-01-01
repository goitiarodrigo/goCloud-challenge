import { ChangeEvent, useState, FormEvent, useContext } from "react"
import { UserContext } from "../context/UserContext"
import { user } from "../interfaces/interfaceForUser"
import { ReactComponent as Error } from "../assets/cross.svg"


const FormLogin = () => {

    const { signIn, userState } = useContext(UserContext)

    const [logUser, setLogUser] = useState<user>({
        email: "",
        password: ""
    })

    const [error, setError] = useState(false)

    const handleEntryUser = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target
        setLogUser({...logUser, [name] : value})
    }

    const handleLogUser = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        signIn(logUser)
    }


    return (
        <>
            <form className="form" onSubmit={handleLogUser}>
                <div className="inputContainer">
                    <div className="titleInput"><p><p>Correo</p>electrónico</p></div>
                    <div className="divToInput">
                        <input type="email" name="email" value={logUser.email} onChange={handleEntryUser}/>
                        <div className="error">
                            <svg aria-hidden="true" fill="white" focusable="false" data-prefix="fas" data-icon="times"  width={20} className="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                        </div>
                    </div>
                </div>
                <div className="inputContainer">
                    <div className="titleInput">
                        <p>Contraseña</p>
                    </div>
                    <div className="divToInput">
                        <input type="password" name="password" value={logUser.password} onChange={handleEntryUser}/>
                        <div className="error">
                            <svg aria-hidden="true" fill="white" focusable="false" data-prefix="fas" data-icon="times"  width={20} className="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                        </div>
                    </div>
                </div>
                <button className="buttonLogin">INGRESAR</button>
            </form>
        </>
    )
}

export default FormLogin