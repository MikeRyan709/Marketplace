import React from 'react';
import Messager from './Messager';

function NewMessager() {
    return (
        <div className="messager">
            <h1 className="nav-title">{localStorage.getItem("Messenger Name")}</h1>
            <Messager/>
        </div>
    )
}

export default NewMessager