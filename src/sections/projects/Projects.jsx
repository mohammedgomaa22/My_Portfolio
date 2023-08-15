import MainTitle from "../../components/Main-title";
import "./projects.css";
// ------------------------
import { SiGithub } from 'react-icons/si'
import { FaRegEye } from 'react-icons/fa'
// ------------------------
// img 
import image1 from "/public/images/pro/menu.png";
import image2 from "/public/images/pro/top.png";
import image3 from "/public/images/pro/wordle.png";
import image4 from "/public/images/pro/tamrini.png";
import image5 from "/public/images/pro/almajmoaa.png";
import image6 from "/public/images/pro/dashboard_c.png";
import image7 from "/public/images/pro/ples.png";
import image8 from "/public/images/pro/port_mg.png";
import image9 from "/public/images/pro/portfolio_mo.png";
import image10 from "/public/images/pro/team.png";
import image11 from "/public/images/pro/notes.png";
import image12 from "/public/images/pro/nile.png";
import image13 from "/public/images/pro/order.png";
// ------------------------

export const project = [
    {
        id: 1,
        title: "Menu",
        technologies: ["HTML", "CSS", "Tailwind", "JS"],
        img: image1, preview: "https://mohammedgomaa22.github.io/Website-Menu/",
        github: "https://github.com/mohammedgomaa22/Website-Menu",
    },
    {
        id: 2,
        title: "Top lines",
        technologies: ["HTML", "CSS", "Tailwind", "JS"],
        img: image2,
        preview: "https://mohammedgomaa22.github.io/Top-Lines/",
        github: "https://github.com/mohammedgomaa22/Top-Lines",
    },
    {
        id: 3,
        title: "Wordle",
        technologies: ["HTML", "CSS", "JS", "JSON", "APIS"],
        img: image3,
        preview: "https://mohammedgomaa22.github.io/w-challenge/",
        github: "https://github.com/mohammedgomaa22/w-challenge",
    },
    {
        id: 4,
        title: "Tamrini",
        technologies: ["HTML", "CSS", "Tailwind", "JS"],
        img: image4,
        preview: "https://mohammedgomaa22.github.io/Tamrini/",
        github: "https://github.com/mohammedgomaa22/Tamrini",
    },
    {
        id: 5,
        title: "Almajmoaa",
        technologies: ["HTML", "CSS", "Tailwind", "JS"],
        img: image5,
        preview: "https://almajmoa.com/",
        github: "https://github.com/mohammedgomaa22/group-company",
    },
    {
        id: 6,
        title: "Dashboard courses",
        technologies: ["HTML", "CSS", "JS"],
        img: image6,
        preview: "https://mohammedgomaa22.github.io/Dashboard-Course/",
        github: "https://github.com/mohammedgomaa22/Dashboard-Course",
    },
    {
        id: 7,
        title: "Ples",
        technologies: ["HTML", "CSS"],
        img: image7,
        preview: "https://mohammedgomaa22.github.io/Palestine_Template/",
        github: "https://github.com/mohammedgomaa22/Palestine_Template",
    },
    {
        id: 8,
        title: "Port_Mg",
        technologies: ["HTML", "CSS", "JS"],
        img: image8,
        preview: "https://mohammedgomaa22.github.io/mg-portfolio/",
        github: "https://github.com/mohammedgomaa22/mg-portfolio",
    },
    {
        id: 9,
        title: "Portfolio_Mo",
        technologies: ["HTML", "CSS", "JS"],
        img: image9,
        preview: "https://mohammedgomaa22.github.io/portfolio/",
        github: "https://github.com/mohammedgomaa22/portfolio",
    },
    {
        id: 10,
        title: "Team",
        technologies: ["HTML", "CSS"],
        img: image10,
        preview: "https://mohammedgomaa22.github.io/Team-Page/",
        github: "https://github.com/mohammedgomaa22/Team-Page",
    },
    {
        id: 11,
        title: "Notes",
        technologies: ["HTML", "CSS", "JS"],
        img: image11,
        preview: "https://mohammedgomaa22.github.io/Notes/",
        github: "https://github.com/mohammedgomaa22/Notes",
    },
    {
        id: 12,
        title: "Nile Dashboard",
        technologies: ["HTML", "CSS", "Tailwind", "JS"],
        img: image12,
        preview: "https://mohammedgomaa22.github.io/Nile/",
        github: "https://github.com/mohammedgomaa22/Nile",
    },
    {
        id: 13,
        title: "landing order",
        technologies: ["HTML", "CSS",],
        img: image13,
        preview: "https://mohammedgomaa22.github.io/landing-page-orders/",
        github: "https://github.com/mohammedgomaa22/landing-page-orders",
    },
]
// ------------------------

const Projects = () => {
    return (
        <>
            <div id="projects" className="projects pb-24">
                <MainTitle msg="My Recent Work" title="Portfolio"/>
                <div className="container mx-auto px-5">
                    {/* Projects */}
                    <div className="row grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                        {/* Start Pro */}
                        {
                            project.map((pro,index) => {
                            return (   <div key={index} className="project relative cursor-pointer rounded-xl mb-6 min-w-[300px] max-w-[400px] h-[220px] hover:-translate-y-5 overflow duration-300">
                                    {/* Pic */}
                                    <div className='overflow-hidden relative rounded-xl w-full h-full'>
                                        <img src={pro.img} className='w-full h-full duration-[1000ms]' />
                                        {/* TEQ */}
                                        <div className = 'teq w-full text-white z-20 absolute -bottom-[50%] p-4 second-bg opacity-90 flex flex-wrap items-center justify-center gap-3 duration-500' >
                                            {
                                                pro.technologies.map((tech, index) => {
                                                    return (
                                                            <span key={index} className='bg-slate-100 font-medium second-color px-2 py-0.5 rounded-md'>
                                                                {tech}
                                                            </span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    {/* Open */}
                                    <div className='open-pro -z-10 flex gap-2 justify-between items-center absolute w-full px-4 bottom-[50%] text-white pt-3 duration-500'>
                                        <a href={pro.github} target="_blank">
                                            <span className='flex gap-4 items-center justify-center px-3 py-1 rounded-md bg-slate-100 text-black font-medium text-md border border-slate-100 hover:text-white hover:bg-transparent duration-300'>
                                                <SiGithub />
                                                GitHub
                                            </span>
                                        </a>
                                        <a href={pro.preview} target="_blank">
                                            <span className='flex gap-4 items-center justify-center px-3 py-1 rounded-md main-bg text-white font-medium text-md border border-sky-500 hover:text-white hover:bg-transparent duration-300'>
                                                <FaRegEye />
                                                Preview
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            ) })
                        }
                        {/* End Pro */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;