import React from "react";

export default function joke(props){
    return (

        
        <>
        {/* {props.setup && <h3>Setup:{props.setup}</h3>} */}
        <h3>Setup:{props.setup}</h3>
        <p>Punchline:{props.punchline}</p>
        </>
    );
}
