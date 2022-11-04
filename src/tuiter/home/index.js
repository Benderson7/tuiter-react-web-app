import React from "react";
import TuitList from "../tuits";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <h1>Home</h1>
            <WhatsHappening/>
            <TuitList/>
        </>
    );
};
export default HomeComponent;