import React from 'react';
import { NavLink } from "react-router-dom";

function LogoutHeader() {

    return (
        <header>
            <h2>Meet & Go</h2>
            <nav>
                <NavLink to="/about">О нас</NavLink>
                <NavLink to="/help">Помощь</NavLink>
                <NavLink to="/login">Войти</NavLink>
            </nav>
        </header>
    )
}

export default LogoutHeader;