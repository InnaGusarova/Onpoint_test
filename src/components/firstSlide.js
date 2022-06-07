import React from 'react';

import buttonImg from '../img/button.png';
import bubble1 from '../img/bubble1.png';
import bubble2 from '../img/bubble2.png';
import bubble3 from '../img/bubble3.png';
import bubble4 from '../img/bubble4.png';
import pink_sperm from '../img/pink_sperm.png';

import '../App.scss';

function FirstSlide(props) {

    const { handleClick } = props;

    return (
        <section
            ref={ props.refSlide }
            id="firstSlide"
            className="firstSlide"
            >
            <h1 className="firstSlide__header">
                <span 
                    className="firstSlide__header--smallText"
                >
                    ПРИВЕТ,
                </span> 
                ЭТО 
                <span className="firstSlide__header--boldText"> 
                    НЕ 
                </span>
                <span className="firstSlide__header--br">
                    КОММЕРЧЕСКОЕ
                </span>
                <span className="firstSlide__header--br">
                    ЗАДАНИЕ
                </span>
            </h1>
            
            <img onClick={handleClick} className="firstSlide__btn" src={ buttonImg } alt="btn"/>
            
            <img className="firstSlide__bubble1" src={ bubble1 } alt="bubble"/>
            <img className="firstSlide__bubble2" src={ bubble2 } alt="bubble"/>
            <img className="firstSlide__bubble3" src={ bubble3 } alt="bubble"/>
            <img className="firstSlide__bubble4" src={ bubble4 } alt="bubble"/>
            <img className="firstSlide__pink_sperm" src={ pink_sperm } alt="pink_sperm"/>

        </section>
    )
}

export default FirstSlide;