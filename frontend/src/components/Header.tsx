import { useContext } from "react"
import { ReactComponent as ReactLogo } from "../assets/gc-icon_logo.svg"
import { ReactComponent as ReactLogOut } from "../assets/gc-icon_logout.svg"
import { UserContext } from "../context/UserContext"

const Header = () => {

    const { logOut } = useContext(UserContext)

    return (
        <div>
            <div className="headerContainer">
                <ReactLogo width={100} height={100} fill="white"/>
                <ReactLogOut  className="logoutSvg" onClick={logOut} style={{cursor: "pointer"}}/>
            </div>
            <div className="userNameContainer">
                <h3 className="nameUser">OMNI MIA</h3>
            </div>
        </div>
    )
}

export default Header