import React from 'react'
import WebrewSS from "../images/projects/capstone-webrew.png";
import Jammming from "../images/projects/jammming.png";
import ToDo from "../images/projects/to-do.png";
import StudentGen from "../images/projects/studentGen.png";
import FindYourHat from "../images/projects/findyourhat.png";
import Colmar from "../images/projects/colmar.png";

const projectList = [
    {
        projectTitle: "Capstone project - E-commerce website",
        projectSS: WebrewSS,
        projectDescription: (<>
            <ul className="mt-3">
                <li>
                    <strong>Persistence:</strong> MySQL database
                </li>
                <li>
                    <strong>Backend:</strong> REST API with Java and Spring Boot
                </li>
                <li>
                    <strong>Frontend:</strong> JavaScript + CSS + HTML
                </li>
            </ul>
            <p>Also implemented username / password authentication.</p></>
        ),
        gitHubLink: "https://github.com/xxxristen/capstone-webrew",
        siteLink: "https://myownwebrew.up.railway.app/"
    },
    {
        projectTitle: "React - Spotify playlist app",
        projectSS: Jammming,
        projectDescription: (<><p>
            Allows users to create custom playlist and export to Spotify
            account.
        </p>
            <p>
                While the page is accessible, the Spotify web api app is in
                development mode hence only whitelisted Spotify users can use
                the app.</p></>)
        ,
        gitHubLink: "https://github.com/xxxristen/react-capstone",
        siteLink: "https://xxxristen-react.vercel.app/"
    },
    {
        projectTitle: "Spring Boot MVC App - To do list",
        projectSS: ToDo,
        projectDescription: (<><p> Task management application created using Spring Boot, JPA and
            MySQL with the following features:</p>
            <ul className="mt-3">
                <li>
                    <strong>CRUD operations</strong> in MySQL database
                </li>
                <li>
                    <strong>Exception handling and data validation</strong>
                </li>
            </ul></>)
        ,
        gitHubLink: "https://github.com/xxxristen/springboot-mvc",
        siteLink: ""
    },
    {
        projectTitle: "Course enrolment program",
        projectSS: StudentGen,
        projectDescription: (<><p>
            A course enrolment program using Java and Object Oriented
            Programming, with functions such as:
        </p >
            <ul>
                <li>Register student</li>
                <li>Enrol student into course</li>
                <li>Grade student</li>
                <li>Show students summary</li>
            </ul></>)
        ,
        gitHubLink: "https://github.com/xxxristen/StudentGen",
        siteLink: ""
    },
    {
        projectTitle: "Find your hat",
        projectSS: FindYourHat,
        projectDescription: (<><p>
            An interactive game created with JavaScript, and playable in terminal.
        </p ></>)
        ,
        gitHubLink: "https://github.com/xxxristen/find-your-hat",
        siteLink: ""
    },
    {
        projectTitle: "Responsive webpage",
        projectSS: Colmar,
        projectDescription: (<><p>
            Landing page of a fictional school, which was created
            according to the design documentation provided.
        </p ></>)
        ,
        gitHubLink: "https://github.com/xxxristen/web-assessment",
        siteLink: "https://xxxristen-web-assessment.vercel.app/"
    }
];

export const Projects = () => {
    return (
        <>
            <div className="projectHeaderTitle fs-5 text-center text-uppercase">
                Some of the things that I&#39;ve built
            </div>
            <div className="fw-bold bar"></div>
            <div className="container mb-4" id="gridMainContainer">
                <div className="grid-container">
                    {Object.keys(projectList).map(key => (
                        <div className="grid" key={key}>
                            <div className="item">
                                <img
                                    src={projectList[key].projectSS}
                                    alt={projectList[key].projectTitle}
                                    className="img-fluid"
                                    aria-label="hidden"
                                />
                            </div>
                            <div className="item projectDescription">
                                <p className="projectTitle">
                                    {projectList[key].projectTitle}
                                </p>
                                {projectList[key].projectDescription && (
                                    <div>
                                        {projectList[key].projectDescription}
                                    </div>
                                )}
                                <div>
                                    <a href={projectList[key].gitHubLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className='gitSiteLink'
                                    >
                                        Code
                                    </a>
                                    {projectList[key].siteLink && (
                                    <a href={projectList[key].siteLink} target="_blank" rel="noreferrer" className='gitSiteLink'>Site</a>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </>
    )
}