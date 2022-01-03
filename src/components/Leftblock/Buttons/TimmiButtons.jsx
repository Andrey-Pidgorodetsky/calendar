import react from "react"

const style = {
    div : {
        color: "white",  
        borderTop: "20px",
        textAlign: "center"  
    },

    a : {
        color: "white",
        textDecoration: "none",
        textAlign: "center",
        cursor: "pointer"
        
    },

    img : {
        textAlign: "left"
    }
};

export const TimmiButtons = () => {
    const hi = "hello"
    return ( <div style={style.div}>   
        <a style={style.a}href="/">
            <img style={style.img} src="../tiimi.jpg"/>tiimi
        </a>
    </div>)
}