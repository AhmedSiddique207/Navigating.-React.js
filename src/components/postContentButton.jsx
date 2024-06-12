import React, { useEffect, useState, useContext } from "react";
import MainContext from "../context/mainContext";



export default function PostContentButton() {

    const { displayName, setUserData } = useContext(MainContext);

    return (

        <div>
            <br />
            <div><span> <b> postContentButton: </b></span> </div>


            {displayName}

            <br /><br />
            <button onClick={() => {
                setUserData((currentStates) => ({ ...currentStates, displayName: "Updated Display Name" }))
            }}>Click Me</button>

        </div>



    )


}