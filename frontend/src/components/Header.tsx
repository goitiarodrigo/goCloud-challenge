import { ReactComponent as ReactLogo } from "../assets/gc-icon_logo.svg"
import { ReactComponent as ReactLogOut } from "../assets/gc-icon_logout.svg"

const Header = () => {
    return (
        <div>
            <div className="headerContainer">
                <ReactLogo width={100} height={100} fill="white"/>
                <ReactLogOut  className="logoutSvg"/>
            </div>
            <div className="userNameContainer">
                <h3>OMNI MIA</h3>
            </div>
        </div>
    )
}

export default Header