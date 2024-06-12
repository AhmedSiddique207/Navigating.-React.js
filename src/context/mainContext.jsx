import React, { createContext } from "react";

const MainContext = createContext({
    displayName: "",
    class: "",
    location: "",
    setUserData: () => { },
}
);

export default MainContext;