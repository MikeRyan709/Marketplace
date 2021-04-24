import React from 'react'

function Messager() {
    return(
        <div className="messager">
            <h1 className="nav-title">{localStorage.getItem("Messenger Name")}</h1>
        </div>
    )
}

export default Messager