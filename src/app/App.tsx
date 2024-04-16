import React from "react";
import "./App.css";
import Alex from "/Alex.jpeg";

export const App = () => {
    return (
        <React.Fragment>
            <img 
                src={Alex} alt="Alex and Kevin" 
                height="500px" width="auto"
            />
        </React.Fragment>
    );
};

