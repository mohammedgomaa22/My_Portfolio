import MainTitle from "../../components/Main-title";
import Skill from "../../components/skills/Skill";
import { SiTailwindcss, SiHtml5, SiCss3, SiBootstrap, SiJavascript, SiReact, SiGit, SiGithub } from 'react-icons/si';
import { VscJson } from 'react-icons/vsc'


const Skills = () => {
    return (
        <>
            <div id="skills" className="skills pb-24">
                <MainTitle msg="What Skills I Have" title="My Skills"/>
                <div className="container mx-auto px-5">
                    <div className="row grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                        <Skill name="HTML5" icon= { SiHtml5 } />
                        <Skill name="CSS3" icon={ SiCss3 } />
                        <Skill name="Tailwind" icon={ SiTailwindcss } />
                        <Skill name="Bootstrap" icon={ SiBootstrap } />
                        <Skill name="JavaScript" icon={ SiJavascript } />
                        <Skill name="React.js" icon={ SiReact } />
                        <Skill name="Git" icon={ SiGit } />
                        <Skill name="GitHub" icon={ SiGithub } />
                        {/* <Skill name="Es6" icon="span"/> */}
                        <Skill name="JSON" icon={ VscJson } />
                        {/* <Skill name="AJAX" icon="span"/> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;