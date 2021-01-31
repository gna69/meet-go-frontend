import React from 'react';
import Swiper from 'react-id-swiper';

import 'swiper/swiper.min.css';
import styles from "./styles";

const slidersSources = [
    "https://man-man.nl/app/uploads/2016/10/trouwen-huwelijk-scheiden-gezond-huwelijk-MAN-MAN.jpg"
];
const params = {
    effect: 'fade'
}

function Slider() {
    const sliders = slidersSources.map((url, idx) =>
        <img key={idx} style={styles.slideSize} src={url} alt={`img: ${1}`}/>);

    return (
        <Swiper {...params}>
            {sliders}
        </Swiper>
    )
}

export default Slider;