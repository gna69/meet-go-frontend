import React from 'react';
import Slider from "./Slider";

import styles from "./styles";

function MainContent() {
    return (
        <div>
            <div style={styles.row}>
                <div style={styles.slider}>
                    <Slider />
                </div>
            </div>
            <div style={styles.buttonBox}>
                <button style={styles.button}> Войти</button>
            </div>
        </div>
    )
}

export default MainContent;