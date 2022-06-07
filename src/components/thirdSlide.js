import React from 'react';
import PopUp from './popUp';

import bottleImg from '../img/bottle.png';
import icon1Img from '../img/icon1.png';
import icon2Img from '../img/icon2.png';
import bubblePink1Img from '../img/bubblePink1.png';
import bubblePink2Img from '../img/bubblePink2.png';
import bubblePink3Img from '../img/bubblePink3.png';
import bubbleBlueImg from '../img/bubbleBlue.png';
import bubbleBlue2Img from '../img/bubbleBlue2.png';
import moreBtnImg from '../img/moreBtn.png';


class ThirdSlide extends React.Component {

    handleClick = () => {
        const { showPopUp } = this.props;
        showPopUp();
    }

    render() {
        const { popUp, closePopUp } = this.props;
        return (
            <section ref={this.props.refSlide} className="thirdSlide">
                <img className="thirdSlide__bottleImg" src={ bottleImg } alt="bottle"/>
                <img className="thirdSlide__bubble thirdSlide__bubblePink1Img" src={ bubblePink1Img } alt="bubble"/>
                <img className="thirdSlide__bubble thirdSlide__bubblePink2Img" src={ bubblePink2Img } alt="bubble"/>
                <img className="thirdSlide__bubble thirdSlide__bubblePink3Img" src={ bubblePink3Img } alt="bubble"/>
                <img className="thirdSlide__bubble thirdSlide__bubbleBlueImg" src={ bubbleBlueImg } alt="bubble"/>
                <img className="thirdSlide__bubble thirdSlide__bubbleBlue3Img" src={ bubbleBlueImg } alt="bubble"/>
                <img className="thirdSlide__bubble thirdSlide__bubbleBlue4Img" src={ bubbleBlueImg } alt="bubble"/>
                <img className="thirdSlide__bubble thirdSlide__bubbleBlue2Img" src={ bubbleBlue2Img } alt="bubble"/>
                {
                    popUp ?  
                        <PopUp 
                            closePopUp={ closePopUp }
                        /> :
                            <div className="thirdSlide__wrapper">
                                <h1 className="thirdSlide__header">
                                    <span className="thirdSlide__header--smallText" >
                                        КЛЮЧЕВОЕ СООБЩЕНИЕ
                                    </span>
                                    BREND 
                                    <span className="thirdSlide__header--boldText">
                                        XY
                                    </span>
                                </h1>
                                <div className="thirdSlide__content">
                                    <div className="thirdSlide__bigContainer">
                                        <img className="thirdSlide__icon1" src={ icon1Img } alt="icon"/>
                                        <p className="thirdSlide__text">
                                            Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum lorem sed risus ultricies
                                        </p>
                                    </div>
                                    <div className="thirdSlide__smallContainer">
                                    <img className="thirdSlide__icon2" src={ icon2Img } alt="icon"/>
                                        <p className="thirdSlide__text">
                                            A arcu cursus vitae
                                        </p>
                                    </div>
                                    <img onClick={ this.handleClick } className="thirdSlide__moreBtn" src={ moreBtnImg } alt="btn"/>
                                </div>
                            </div>
                }
                <div className={ popUp ? "popUp__background" : "displayNone" }></div>
            </section>
        )
    }
}

export default ThirdSlide;