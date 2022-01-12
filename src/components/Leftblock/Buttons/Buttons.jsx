import react, { useState } from "react";
import { useHistory } from 'react-router-dom';
import "./buttonsStyle.css"

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
        textAlign: "left",
    },

    p: {
        display: "flex",
        alignItem: "center"
    },
};

export const Buttons = () => {
    const history = useHistory("/");

    const navigateToDashboard = () => { history.push("/dashboard") };
    const navigateToInbox = () => { history.push("/inbox") };
    const navigateToCalendar = () => { history.push("/calendar") };
    const navigateToUsers = () => { history.push("/users") };
    

    return(
        <div style={style.div}> 
            <p className="menu-item"> 
                <img  src="https://img.icons8.com/color/24/000000/dashboard-layout.png"/>
                <button style={style.button}
                    onClick={navigateToDashboard}> 
                     Dashboard
                </button>
            </p>

            <p className="menu-item">
                <img src="https://img.icons8.com/fluency/24/000000/reddit-inbox.png"/>  
                <button style={style.button}
                    onClick={navigateToInbox} > Inbox</button>
            </p>

            <p className="menu-item">
                <img src="https://img.icons8.com/fluency/24/000000/windows-calendar.png"/>
                <button style={style.button}
                    onClick={navigateToCalendar} > Calendar & Todos</button>
            </p>
            <p className="menu-item">
            <img src="https://img.icons8.com/color/24/000000/group.png"/>
                <button style={style.button}
                    onClick={navigateToUsers} > Users </button>
            </p>


        </div>)
}