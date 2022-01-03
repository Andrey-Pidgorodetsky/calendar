import react from "react";

const style = {
    div : {
        width: "10em",
        height: "10em",
        color : "grey",
        background : "#f3f8fc",
        border: "3px solid",
        borderRadius : "10px",
        borderColor : "#9cddc5 white",   
        position : "absolute", 
        padding : "20px",
        top : "20px" ,
        marginLeft : "350px", 
    },
    p : {
        left : "50%",
        color : "green"
    }
};


export const Cards = () => {
    const handleInfo = () => {
    };

    return (
        <div style={style.div}>
            <p style={style.p}>{handleInfo()}</p>
        </div>
    );
};