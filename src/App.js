import { useState } from 'react';
import './App.css';
import { LogInScreen } from './login';
import { TeacherSidebar } from './teacherSidebar';
import { Job } from './job';

export default App;

const jobs = [
    {role: "Engenharia Elétrica", company_name: "Amazon", work_period: 6, job_vacancies: 2, salary: 3500, address: "São Paulo, SP", physicality: "flexibe"},
    {role: "Química", company_name: "Mackenzie", work_period: 5, job_vacancies: 5, salary: 1200, address: "São Paulo, SP", physicality: "flexibe"},
    {role: "Farmácia", company_name: "Droga Raia", work_period: 6, job_vacancies: 4, salary: 2000, address: "São Paulo, SP", physicality: "flexibe"},
    {role: "Geologia", company_name: "Petrobras", work_period: 6, job_vacancies: 1, salary: 2500, address: "São Paulo, SP", physicality: "flexibe"},
    {role: "Engenharia Elétrica", company_name: "Amazon", work_period: 4, job_vacancies: 3, salary: 3500, address: "São Paulo, SP", physicality: "flexibe"},
    {role: "Química", company_name: "Mackenzie", work_period: 6, job_vacancies: 2, salary: 1200, address: "São Paulo, SP", physicality: "flexibe"},
    {role: "Farmácia", company_name: "Droga Raia", work_period: 6, job_vacancies: 5, salary: 2000, address: "São Paulo, SP", physicality: "hybrid"},
    {role: "Geologia", company_name: "Petrobras do Brasil", work_period: 5, job_vacancies: 1, salary: 2500, address: "São Paulo, SP", physicality: "in-person"},
    {role: "Engenharia Elétrica", company_name: "Amazon", work_period: 6, job_vacancies: 6, salary: 3500, address: "São Paulo, SP", physicality: "in-person"},
    {role: "Química", company_name: "Mackenzie", work_period: 6, job_vacancies: 4, salary: 1200, address: "São Paulo, SP", physicality: "in-person"},
    {role: "Farmácia", company_name: "Droga Raia", work_period: 5, job_vacancies: 5, salary: 2000, address: "São Paulo, SP", physicality: "in-person"},
    {role: "Geologia", company_name: "Petrobras", work_period: 5, job_vacancies: 3, salary: 2500, address: "São Paulo, SP", physicality: "in-person"},
];

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [service, setService] = useState("jobOffers");

    if(isLoggedIn){
        return (
            <div>
                <TeacherSidebar logOut={setIsLoggedIn} changeServiceOnScreen={setService} />
                <div className="page">
                    <Page className="page" serviceOnScreen={service}/>
                </div>
            </div>
        )
    } else {
        return (
            <LogInScreen logIn={setIsLoggedIn}/>
        )
    }
}

function Page({ serviceOnScreen }) {
    if(serviceOnScreen === "jobOffers") {
        return (
            <JobOffers />
        )
    } else if(serviceOnScreen === "contractApproval") {
        return (
            <div>
                <h1>Aprovação de contratos</h1>
            </div>
        )
    } else if(serviceOnScreen === "reportEvaluation") {
        return (
            <div>
                <h1>Avaliação de relatórios</h1>
            </div>
        )
    } else if(serviceOnScreen === "dataManagement") {
        return (
            <div>
                <h1>Alteração de dados</h1>
            </div>
        )
    }
}

function JobOffers() {
    const testJobs = [];
    jobs.forEach((job) => {
        testJobs.push(
            <Job jobRole={job.role} companyName={job.company_name} dailyHours={job.work_period} vacancies={job.job_vacancies} address={job.address} physicality={job.physicality} />
        )
    })

    return (
        <div className="jobOffers">
            {/* <input id="search" name="search" type="text"></input> */}
            <h1>Vagas disponíveis:</h1>
            {/* <img src="lupa.svg" alt="" /> */}
            <div className="jobsGrid">
                {testJobs}
            </div>
        </div>
    )
}