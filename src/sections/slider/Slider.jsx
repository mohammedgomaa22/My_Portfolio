import "./slider.css";
// import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithubSquare, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import CV from "../../../public/files/CV_Mohammed-Gomaa.pdf";
// --------------------

const Header = () => {
    return (
        <>
            <header id="home" className="h-screen flex justify-center items-center">
                <div className="container mx-auto px-5 h-full relative">
                    <div className="content h-full flex flex-col items-center justify-end">
                        {/* Text ------------------ */}
                        <div className="col flex justify-center items-center flex-col gap-8">
                            {/* Title */}
                            <div className="title text-center">
                                <p className="text-white font-bold">Hello I'm</p>
                                <h1 className="text-2xl font-bold mb-1 text-white">Mohammed Gomaa</h1>
                                <span className="text-gray-400 font-medium">Front-End Developer</span>
                            </div>
                            {/* Button */}
                            <div className="btn">
                                <a href={CV}  download>
                                    <button className="main-btn main-color mr-5">Download CV</button>
                                </a>
                                <a href="#contact">
                                    <button className="main-btn main-bg hover:text-white hover:bg-transparent">Let's Talk</button>
                                </a>
                            </div>
                        </div>
                        {/* Pic ------------------ */}
                        <div className="col h-96 w-72 mt-24 bg-gradient-to-b from-sky-700 to-transparent rounded-t-full">
                            <div className="my-img h-full w-full bg-cover bg-center hover:scale-110 duration-500"></div>
                        </div>
                    </div>
                    {/* Social ------------------ */}
                    <div className="social w-fit flex flex-col justify-center items-center gap-4 absolute bottom-10 left-2 main-color">
                        <a className="linkedin text-xl hover:scale-150 duration-300" href="https://www.linkedin.com/in/mohammed-gomaa-09a31b221/" target="_blank">
                            <FaLinkedin />
                        </a>
                        <a className="github text-xl hover:scale-150 duration-300" href="https://github.com/mohammedgomaa22" target="_blank">
                            <FaGithubSquare />
                        </a>
                        <a className="facebook text-xl hover:scale-150 duration-300" href="https://www.facebook.com/mohammedgomaa2522/" target="_blank">
                            <FaFacebookSquare />
                        </a>
                        <div className="line h-9 w-0.5 main-bg"></div>
                    </div>
                    {/* Scroll Down ------------------ */}
                    <div className="scroll-down absolute bottom-16 right-2 main-color animate-bounce">
                        Scroll Down
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;