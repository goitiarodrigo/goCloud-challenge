import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import { propsCall } from "../interfaces/interfaceForUser"
import { ReactComponent as ReactLogo } from "../assets/gc-icon_whatsapp.svg"
import Header from "../components/Header"
import AboutAllCalls from "../components/AboutAllCall"


const CallsDetails = () => {

    const [calls, setCalls] = useState<propsCall>()
    const [loader, setLoader] = useState(false)

    const { getCalls, userState } = useContext(UserContext)
    const { id } = userState

    const getCallByUser = async (id: string) => {
        const res = await getCalls(id)
        const { response: { callsByUser } } = res
        setCalls(callsByUser)
        setLoader(true)
    }       

    // useEffect(()=> {
    //     getCallByUser(id!)
    // }, [])

    if (loader) {
        return (
            <div className="container">
                <img src="./assets/robot-loader.gif" alt="loader"/>
            </div>
        )
    }


    return (
        <>
            <Header />
            <AboutAllCalls />
            <div className="container">
               
                <div className="highscoreContainer">
                        <table className="highScore">
                            <thead>
                                <tr>
                                    <th >Nombre de empleado </th>
                                    <th >Sector  </th>
                                    <th >Edad </th>
                                    <th >Email </th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                        <tr >
                                            <td>dafdsgfgdfghdfhdfhgfjgsghdfg</td>
                                            <td>dafdsgfgdfghdfhdfhgfjgsghdfg</td>
                                            <td>dafdsgfgdfghdfhdfhgfjgsghdfg</td>
                                            <td>dafdsgfgdfghdfhdfhgfjgsghdfg</td>
                                        </tr>
                            </tbody>
                        </table>
                        
                </div>
                
            </div>
        </>
    )
}

export default CallsDetails
