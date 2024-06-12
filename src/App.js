import React, { useEffect, useState } from "react";
import PostContainer from "./components/postContainer";
import MainContext from "./context/mainContext";
import { UseFetchUser } from "./customHooks/useFetchUser";
import {  Link , useNavigate} from "react-router-dom"


export default function App() {

  const { user, loading, error } = UseFetchUser(10);

  console.log(user, loading, error);

  const [userData, setUserData] = useState({

    displayName: "Ahmed",

    standard: "7b",

    location: "Hyd"

  });

  const navigate = useNavigate();

//   useEffect(()=>{
//     if(!loading && !error && user){
//       setUserData(user)
//     }
//   },
// [loading,error,user]
// )

  return (



    <div>

<nav>

<li>
  <Link to="/"  >Home</Link>
</li>

<li>
  <Link to="/UserPage" >User</Link>
</li>

<li>
  <Link to="/ClientPage" >Client</Link>
</li>




</nav>

<div>
  <label  htmlFor="data" >Data</label>
  <input type="text" id="data" placeholder="Data" onChange={(event)=>{
 if(event.target.value.length==10){
  navigate("/ClientPage/ServerPage", {
    state:{
      posts:[
        {
          id:1,
          title:"Hello Duniya",
          content:"Suagat hai apka"
        },
      ],

      
    },
  }  

  );
 }
  }} />
</div>

      <MainContext.Provider value={{ ...userData, setUserData }}>

        <div >
          {loading ? "Loading...." : <PostContainer />}


        </div>


      </MainContext.Provider>

      

    </div>


  );


}
