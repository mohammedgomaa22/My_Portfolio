import "./main-title.css";
// --------------------------

const MainTitle = (props) => {
    return (
        <div className="main-title">
            <span>{props.msg}</span>
            <h2>{props.title}</h2>
        </div>
    );
};

export default MainTitle;