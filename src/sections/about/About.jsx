import MainTitle from "../../components/Main-title";
import "./about.css";
import { project } from "../projects/Projects";
// ------------------------

const About = () => {
    return (
        <>
            <div id="about" className="about py-24">
                <MainTitle msg="Get To Know" title="About Me" />
                <div className="container mx-auto px-5">
                    <div className="content flex flex-col justify-center gap-20 xl:flex-row xl:justify-between">
                        {/* Img */}
                        <div className="h-80 w-80 sm:h-96 sm:w-96 bg-gradient-to-tr from-sky-700 to-transparent rounded-3xl mx-auto xl:m-0">
                            <div className="pic h-full w-full bg-cover bg-center rounded-3xl rotate-6 hover:rotate-0 duration-500"></div>
                        </div>
                        {/* Info */}
                        <div className="info flex flex-col gap-10 justify-center sm:justify-start">
                            {/* Boxes */}
                            <div className="row flex flex-col justify-center md:flex-row gap-5">
                                {/* Box-1 */}
                                <div className="col md:w-56 flex flex-col justify-center items-center bg-slate-950 rounded-2xl p-11 hover:bg-transparent border-slate-800 border-2 duration-300">
                                    <i className="fas fa-medal text-4xl main-color"></i>
                                    <p className="text-3xl text-white mt-4 mb-3 font-semibold">Experience</p>
                                    <span className="text-gray-500 font-semibold">1+ Year Working</span>
                                </div>
                                {/* Box-2 */}
                                <div className="col md:w-56 flex flex-col justify-center items-center bg-slate-950 rounded-2xl p-11 hover:bg-transparent border-slate-800 border-2 duration-300">
                                    <i className="fas fa-people-roof text-4xl main-color"></i>
                                    <p className="text-3xl text-white mt-4 mb-3 font-semibold">Clients</p>
                                    <span className="text-gray-500 font-semibold">10+ Worldwide</span>
                                </div>
                                {/* Box-3 */}
                                <div className="col md:w-56 flex flex-col justify-center items-center bg-slate-950 rounded-2xl p-11 hover:bg-transparent border-slate-800 border-2 duration-300">
                                    <i className="fas fa-folder-open text-4xl main-color"></i>
                                    <p className="text-3xl text-white mt-4 mb-3 font-semibold">Projects</p>
                                    <span className="text-gray-500 font-semibold">{project.length} Completed</span>
                                </div>
                            </div>
                            {/* Text */}
                            <p className="text-gray-500 font-semibold text-lg md:w-[720px] mx-auto xl:m-0 text-center xl:text-left">I am a passionate junior front-end developer with a keen eye for design and a strong understanding of web development technologies, In addition to technical expertise, skilled with problem-solving skills and attention to detail.</p>
                            {/* BTN */}
                            <a href="#contact" className="w-fit mx-auto xl:mx-0" aria-label="contact">
                                <button className="main-btn main-bg w-fit hover:bg-transparent">Let's Talk</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;