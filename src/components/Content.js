import React from "react";
import { TfiAnnouncement } from "react-icons/tfi";
import { ImNewspaper } from "react-icons/im";
import { BsPeopleFill, BsGraphUp } from "react-icons/bs";

const Content = () => {
    const sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

    return (
       <div>
       <div style={styles.container}>
           <h3><TfiAnnouncement />  Upcoming event at the office</h3>
           <p>{sampleText}</p>
       </div>
        <div style={styles.container}>
            <h3><ImNewspaper />  November month Newsletter</h3>
            <p>{sampleText}</p>
        </div>
        <div style={styles.container}>
            <h3><BsPeopleFill />  Update in Company Policy</h3>
            <p>{sampleText}</p>
        </div>
        <div style={styles.container}>
            <h3><BsGraphUp />  Current Stock Price of the Company</h3>
            <p>{sampleText}</p>
        </div>
       </div>
    );
};

const styles = {
    container:{
        padding: "5px",
        marginLeft: "150px",
        marginRight: "150px",
        marginBottom: "15px",
        textAlign: "center",
        backgroundColor: "white",
        border: "2px solid grey",
        borderRadius: "5px",
    },
};

export default Content;