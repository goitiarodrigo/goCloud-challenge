import FormLogin from "../components/FormLogin"
import {  ReactComponent as ReactLogo } from "../assets/gc-logo-default.svg"
import {  ReactComponent as ReactRobot } from "../assets/gc-robot.svg"

const Login = () => {
    return (
        <div className="formContainer">
            <div>
                <div className="imageContainer">
                    <ReactLogo width={300} height={300} />
                    <ReactRobot width={200} height={200} className="robotImage"/>
                </div>
                <FormLogin />
            </div>
        </div>
    )
}

export default Login