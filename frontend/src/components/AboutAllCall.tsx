import { ReactComponent as DownArrow } from "../assets/gc-icon_down-arrow.svg"
import { ReactComponent as Details } from "../assets/gc-icon_dialog.svg"
import { ReactComponent as Check } from "../assets/gc-icon_check.svg"
import { ReactComponent as Waiting } from "../assets/gc-icon_waiting.svg"
import { ReactComponent as Phone } from "../assets/gc-icon_phone.svg"
import { ReactComponent as Error } from "../assets/gc-icon_close.svg"
import { ReactComponent as Time } from "../assets/gc-icon_time.svg"

const AboutAllCalls= () => {



    return (
        <div className="detailCampaignContainer">
            <div>
                <h3 className="detailTitle">Detalle de campaña</h3>
                <div className="campaignAverageContainer">
                    <span className="campaignTitle">Nombre de la campaña</span>
                    <div className="averageContain">
                        <h4>Progreso discado: <span>00 % </span> </h4>
                        <h4>Consumo total: <span> 00:00 min </span> </h4>
                        <h4>Duración promedio llamada: <span> 00 seg </span> </h4>
                    </div>
                </div>
            </div>
            <div className="campaignsContainer">
                <div className="detailsContainer">
                    <span className="quantityNumber-1">
                        00

                    </span>
                    <p>Transferidos</p>
                    <DownArrow height={17} width={17} style={{alignSelf: "center"}}  fill="#C4C6EA"/>
                    <div className="underline-1">

                    </div>

                </div>
                <div className="detailsContainer">
                    <span className="quantityNumber-2">
                        00

                    </span>
                    <p>Iniciadas</p>
                    <Details height={17} width={17} style={{alignSelf: "center"}}    fill="#C4C6EA"/>
                    <div className="underline-2">

                    </div>

                </div>
                <div className="detailsContainer">
                    <span className="quantityNumber-3">
                        00

                    </span>
                    <p>Discadas</p>
                    <Check height={17}  width={17} style={{alignSelf: "center"}}   fill="#C4C6EA" className="checkSvg"/>
                    <div className="underline-3">

                    </div>

                </div>
                <div className="detailsContainer">
                    <span className="quantityNumber-4">
                        00

                    </span>
                    <p>No iniciadas</p>
                    <Waiting height={17}  width={17} style={{alignSelf: "center"}}   fill="#C4C6EA"/>
                    <div className="underline-4">

                    </div>

                </div>
                <div className="detailsContainer">
                    <span className="quantityNumber-5">
                        00

                    </span>
                    <p>Números</p>
                    <Phone height={17}  width={17} style={{alignSelf: "center"}}   fill="#C4C6EA"/>
                    <div className="underline-5">

                    </div>

                </div>
                <div className="detailsContainer">
                    <span className="quantityNumber-6">
                        00

                    </span>
                    <p>Fallidas</p>
                    <Error height={17}  width={17} style={{alignSelf: "center"}}   fill="#C4C6EA"/>
                    <div className="underline-6">

                    </div>

                </div>
                <div className="detailsContainer">
                    <span className="quantityNumber-7">
                        00

                    </span>
                    <p>Compromiso pago</p>
                    <Time height={17}  width={17} style={{alignSelf: "center"}}   fill="#C4C6EA"/>
                    <div className="underline-7">

                    </div>

                </div>
            </div>

            
        </div>
    )
}

export default AboutAllCalls