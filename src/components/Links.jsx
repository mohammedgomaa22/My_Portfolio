import "./links.css";
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiMiniProgramLine } from "react-icons/ri";
import { MdOutlineContactSupport } from "react-icons/md";
import { useState } from "react";
// --------------------------

const Links = () => {
    const [activeNav, setActiveNav] = useState("#home");
    return (
        <>
            <div className="links w-fit mx-auto py-2 sm:py-4 px-4 sm:px-6 rounded-3xl fixed bottom-6 left-[50%] translate-x-[-50%] second-bg z-50 opacity-40 hover:opacity-100 duration-500">
                <nav className="flex items-center gap-4 sm:gap-7 text-slate-400 text-2xl sm:text-3xl duration-500">
                    <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "active" : ""}> <AiOutlineHome /> </a>
                    <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}> <CgProfile /> </a>
                    <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "active" : ""}> <RiMiniProgramLine /> </a>
                    <a href="#projects" onClick={() => setActiveNav("#projects")} className={activeNav === "#projects" ? "active" : ""}> <AiOutlineFundProjectionScreen /> </a>
                    <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}> <MdOutlineContactSupport /> </a>
                </nav>
            </div>
        </>
    );
};

export default Links;