import "./skill.css"
// ------------------------

const Skill = (props) => {
    return (
        <div className="skill flex flex-col justify-center items-center bg-slate-950 rounded-2xl p-11">
            <i className="text-4xl main-color">
                <props.icon />
            </i>
            <p className="text-3xl text-white mt-4 mb-3 font-semibold">{ props.name }</p>
        </div>
    );
};

export default Skill;