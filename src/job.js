import './job.css'
import clock from "./images/clock.svg"
import jobVacancies from "./images/jobVacancies.svg"
import locationPin from "./images/locationPin.svg"
import hybrid from "./images/hybrid.svg"
import inPerson from "./images/inPerson.svg"
import home from "./images/home.svg"

export function Job({ jobRole, companyName, dailyHours, vacancies, address, physicality }) {
    return (
        <button className="jobIcon">
            <p className="jobRole">{jobRole}</p>
            <div className="line"></div>
            <p className="companyName">{companyName}</p>
            <div className="extraInfo">
                <div className="topic">
                    <img src={clock} alt="Horas diárias" />
                    <p>{dailyHours}h</p>
                </div>
                <div className="topic">
                    <img src={jobVacancies} alt="Vagas disponíveis" />
                    <p>Vagas: {vacancies}</p>
                </div>
                <div className="topic">
                    <img src={locationPin} alt="Bairro" />
                    <p>{address}</p>
                </div>
                <div className="topic">
                    <PhysicalityIcon physicality={physicality}/>
                    <p>{physicality}</p>
                </div>
            </div>
        </button>
    )
}

function PhysicalityIcon({ physicality }){
    if(physicality === "flexibe") {
        return (
            <img src={home} alt="A Distância" />
        )
    } else if(physicality === "hybrid") {
        return (
            <img src={hybrid} alt="Híbrido" />
        )
    } else {
        return (
            <img src={inPerson} alt="Presencial" />
        )
    }
}