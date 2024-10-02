import React from "react";
import {useNavigate} from "react-router-dom";
import "./Navbutton.css";

const Navbutton = (path, text
) => {
    const navigate = useNavigate();
    return (
        <button className="Navbutton" onClick={() => navigate(path)}>{text}</button>
    )
}

export default Navbutton