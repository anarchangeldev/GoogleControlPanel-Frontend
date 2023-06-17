import React from "react";

function Header(props) {
    return <header className="app-header">
        <p>PROJECT: {props.project}</p>
    </header>
}

export default Header