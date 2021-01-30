import React from 'react';
import Slider from "./Slider";

function MainContent() {
    return (
        <div>
            <div style={{
                backgroundColor: "#506287",
                height: 500
            }} />
            <Slider />
            <button> Войти </button>
        </div>
    )
}

export default MainContent;