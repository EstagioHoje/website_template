import './teacherSidebar.css'
import logo from "./images/logo.svg"
import jobOffers from "./images/jobOffers.svg"
import handWithPencil from "./images/handWithPencil.svg"
import reportEvaluation from "./images/reportEvaluation.svg"
import dataManagement from "./images/dataManagement.svg"

export function TeacherSidebar({ logOut, changeServiceOnScreen }) {
    return (
        <div className="sidebar">
            <img className="logoImage" src={logo} alt="Estágio Hoje" />
            <div className="buttonsArea">
                <button onClick={() => changeServiceOnScreen("jobOffers")}>
                    <img src={jobOffers} alt="Vagas oferecidas"/>
                    <p>Consulte as vagas oferecidas</p>
                </button>
                <button onClick={() => changeServiceOnScreen("contractApproval")}>
                    <img src={handWithPencil} alt="Aprove contratos"/>
                    <p>Aprove contratos de estágio</p>
                </button>
                <button onClick={() => changeServiceOnScreen("reportEvaluation")}>
                    <img src={reportEvaluation} alt="Avalie relatórios"/>
                    <p>Avalie relatórios de estágio</p>
                </button>
                <button onClick={() => changeServiceOnScreen("dataManagement")}>
                    <img src={dataManagement} alt="Gerencie seus dados"/>
                    <p>Altere seus dados</p>
                </button>
            </div>
            <div className="logOut">
                <button onClick={() => logOut(false)}>&lt; Sair</button>
            </div>
        </div>
    )
}