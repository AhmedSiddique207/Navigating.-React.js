import React, { useEffect, useState, useContext } from "react";
import PostContentButton from "./postContentButton";
import MainContext from "../context/mainContext";




export default function PostContent() {

    const MainContextData = useContext(MainContext);


    return (

        <div>


            <PostContentButton />

            <br />

            <div>
                <div><span> <b> postContent: </b></span> </div>

                {MainContextData.standard}
            </div>


        </div>
    )



}