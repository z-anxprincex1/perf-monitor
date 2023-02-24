import React, {useState} from "react";
import './LeftPane.css'

export default function LeftPane() {

    const [showPane, setShowPane] = useState(false)
    const HandlePaneBtn = () => {
        setShowPane(!showPane)
    }

    return (
        <div className="pane-container">
            {showPane && <div className="pane">
                <a href="/">Performance Overview</a>
                <a href="p1">Alert Logs</a>
                <a href="p2">User Account Settings</a>
            </div>}
            <button className="pane-btn" onClick={HandlePaneBtn}><strong>|||</strong></button>
        </div>
    )
}