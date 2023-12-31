import {FaLinkedinIn, FaGithubAlt, FaFacebookF} from "react-icons/fa"
// ------------------------

const Footer = () => {
    return (
        <footer className="footer main-bg p-8">
            <div className="container mx-auto px-5">
                <div className="content flex flex-col justify-center items-center">
                    {/* Title */}
                    <h2 className="text-3xl font-bold  tracking-wide">Mohammed</h2>
                    {/* Links */}
                    <ul className="links flex flex-col sm:flex-row items-center gap-6 my-5 font-medium text-sm">
                        <li>
                            <a href="#home" className="duration-300 hover:text-white tracking-wide" aria-label="home">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="duration-300 hover:text-white tracking-wide" aria-label="about">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="duration-300 hover:text-white tracking-wide" aria-label="skills">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="duration-300 hover:text-white tracking-wide" aria-label="projects">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="duration-300 hover:text-white tracking-wide" aria-label="contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                    {/* Social */}
                    <div className="social my-3 flex justify-center items-center gap-3">
                        <a className="linkedin flex justify-center items-center text-lg h-10 w-10 text-center rounded-xl p-2 bg-black text-white hover:bg-white hover:text-black duration-300" href="https://www.linkedin.com/in/mohammed-gomaa-09a31b221/" target="_blank" aria-label="linkedin">
                            <FaLinkedinIn />
                        </a>
                        <a className="github flex justify-center items-center text-lg h-10 w-10 text-center rounded-xl p-2 bg-black text-white hover:bg-white hover:text-black duration-300" href="https://github.com/mohammedgomaa22" target="_blank" aria-label="github">
                            <FaGithubAlt />
                        </a>
                        <a className="facebook flex justify-center items-center text-lg h-10 w-10 text-center rounded-xl p-2 bg-black text-white hover:bg-white hover:text-black duration-300" href="https://www.facebook.com/mohammedgomaa2522/" target="_blank" aria-label="facebook">
                            <FaFacebookF />
                        </a>
                    </div>
                    {/* Copyright */}
                    <small className="my-6 text-sm">
                        &copy; Mohammed Gomaa, All rights reserved.
                    </small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;