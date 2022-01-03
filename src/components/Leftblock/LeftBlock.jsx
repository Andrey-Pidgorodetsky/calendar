import react from "react";
import { Buttons } from "./Buttons/Buttons";
import { TimmiButtons } from "./Buttons/TimmiButtons";
import { Route, Switch } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const style = {
    div : {
        background: "#1c212d",        
        width: "250px",
        height: "100vh", 
        padding: "20px",
        alignItems : "center",
        padding : "20px"
    }
};


export const LeftBlock = () => {
    return (
        <div style={style.div}>   
            <h1><TimmiButtons/></h1>
            <Buttons/>
        </div>      
    );
};