import react, { useState } from "react";
import { useHistory } from 'react-router-dom';


const style = {
    div : {
        weight: "200px",
        height: "35px"
    },

    a : {
        color : "white"
    },

    button : {
        width: "250px",
        height: "35px",
        color : "white",
        background : "#1c212d",
        borderRadius : "10px", 
        border : "#1c212d",
        cursor: "pointer", 

    },
};

export const Buttons = () => {
    const history = useHistory("/");

    const navigateToDashboard = () => { history.push("dashboard") };
    const navigateToInbox = () => { history.push("inbox") };
    const navigateToCalendar = () => { history.push("calendar") };
    
    const onMouseTarget = () => {   
        style.button.background = "red"
    };

    const onMouseUnTarget = () => {       
        style.button.background = "#1c212d"
    };   

    return(
        <div style={style.div}> 
        
            <p>
                <button style={style.button}
                    onClick={navigateToDashboard} 
                    onMouseEnter={event => onMouseTarget(event)} 
                    onMouseOut={event => onMouseUnTarget(event)}> 
                    <img  textAlign="center" 
                    src="https://img.icons8.com/color/24/000000/dashboard-layout.png"
                    /> Dashboard
                </button>
            </p>

            {/* <p>
                <button style={style.button}
                    onClick={navigateToInbox} > <img src="https://img.icons8.com/fluency/24/000000/reddit-inbox.png"/> Inbox</button>
            </p>

            <p>
                <button style={style.button}
                    onClick={navigateToCalendar} > <img src="https://img.icons8.com/fluency/24/000000/windows-calendar.png"/> Calendar & Todos</button>
            </p> */}


        </div>)
}