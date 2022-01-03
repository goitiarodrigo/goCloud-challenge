import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import { calls } from "../interfaces/interfaceForUser"
import { ReactComponent as ArrowRight } from "../assets/chevronRight.svg"
import { ReactComponent as ArrowLeft } from "../assets/chevronLeft.svg"
import Header from "../components/Header"
import AboutAllCalls from "../components/AboutAllCall"


const CallsDetails = () => {

    const [calls, setCalls] = useState<calls>()
    const [loader, setLoader] = useState(false)
    const [valueToDisplayArray, setValueToDisplayArray ] = useState([0, 6])
    const [callsArrayFiltered, setCallsArrayFiltered] = useState<calls>()

    const { getCalls, userState } = useContext(UserContext)
    const { id } = userState

    const getCallByUser = async (id: string) => {
        const res = await getCalls(id)
        const { response } = res
        setCalls(response)
        setCallsArrayFiltered(response.slice(0, 6))
        setLoader(true)
    }
  

    useEffect(()=> {
        getCallByUser(id!)
    }, [])

    useEffect(()=> {
        setCallsArrayFiltered(calls?.slice(valueToDisplayArray[0], valueToDisplayArray[1]))
    }, [valueToDisplayArray])
    


    if (!loader) {
        return (
            <div className="loader">
                <div className="bubble" style={{background: "#6791CA", borderColor: "#6791CA"}} ><p style={{color: "white"}}>¡Bienvenido otra vez!</p></div>
                <img src="https://i.postimg.cc/cL0WKf91/robot-loader.gif" alt="loader" />
            </div>
            
            
        )
    }


    return (
        <>
            <Header />
            <AboutAllCalls calls={calls!}/>
            <div className="tableContainer">
                <table className="highScore">
                    <thead>
                        <tr>
                            <th >TELÉFONO </th>
                            <th >FECHA  </th>
                            <th >HORA </th>
                            <th >DURACIÓN </th>
                            <th >ÚLT. ETAPA  </th>
                            <th >ÚLT. PASO </th>
                            <th >INTENTOS </th>
                        </tr>
                    </thead>
                    <tbody>
                        {callsArrayFiltered?.map((call, index) => {
                            return (
                                <tr key={index} >                                  
                                    <td>{call.telephoneNumber}</td>
                                    <td>{call.date}</td>
                                    <td>{call.hour}</td>
                                    <td>{call.callDuration}seg</td>
                                    <td>{call.status}</td>
                                    <td>{call.step}</td>
                                    <td>{Math.ceil(Math.random()*3)}</td>
                                </tr>
                            )
                        })
                    } 
                    </tbody>
                </table>
            </div>
            <div className="arrowsContainer">
                <div className="left-rightArrows">
                    <button className={valueToDisplayArray[0] > 0 ? "arrow" : "arrowDisabled"}
                        onClick={()=>setValueToDisplayArray([valueToDisplayArray[0]-6, valueToDisplayArray[1]-6])}
                        disabled={valueToDisplayArray[0] > 0 ? false : true}
                    >
                        <ArrowLeft width={15} />    
                    </button>
                    <button className={valueToDisplayArray[1] < calls?.length! ? "arrow" : "arrowDisabled"} 
                        onClick={()=>setValueToDisplayArray([valueToDisplayArray[0]+6, valueToDisplayArray[1]+6])} 
                        disabled={valueToDisplayArray[1] < calls?.length! ? false : true}
                    >
                        <ArrowRight width={15} />
                    </button>
                    
                    
                </div>
            </div>
            
                
            
        </>
    )
}

export default CallsDetails
