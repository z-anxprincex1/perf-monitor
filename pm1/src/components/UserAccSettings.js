import React from "react";

export default function UserAccSettings() {
    return(
        <div style={{marginTop:"25%"}} className="uac_container">
            <h1 className='brand' style={{fontSize: "50px"}}>user account settings</h1>
            <div className="uac_content">
                <h3>Send alerts to <input type="email" placeholder="email@example.com"></input></h3>
                <p>Stay updated on server statistics with our detailed email alerts</p>
            </div>
        </div>
    )
}