import React from 'react';
import { NavLink } from "react-router-dom";

import styles from "./styles";

function LogoutHeader() {

    return (
        <header style={styles.header}>
            <h2>
                <NavLink style={{...styles.link, ...styles.logo}} to="/">Meet & Go </NavLink>
            </h2>
            <nav style={styles.nav}>
                <NavLink style={styles.link} to="/about">О нас</NavLink>
                <NavLink style={styles.link} to="/help">Помощь</NavLink>
                <NavLink style={styles.link} to="/login">Войти</NavLink>
            </nav>
        </header>
    )
}

export default LogoutHeader;