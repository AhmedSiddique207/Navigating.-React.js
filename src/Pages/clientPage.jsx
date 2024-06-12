import { Outlet } from "react-router-dom";
export default function ClientPage(){
    return(
        <div>
            <h1>Welcome to ClientPage Dashboard...</h1>
            <Outlet /> 
        </div>
    )
}