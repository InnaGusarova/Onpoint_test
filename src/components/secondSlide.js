import React from 'react';

import btnImg from '../img/btn.png';
import spermImg from '../img/sperm.png';
import sperm2Img from '../img/sperm2.png';
import sperm3Img from '../img/sperm3.png';
import sperm4Img from '../img/sperm4.png';
import sperm5Img from '../img/sperm5.png';


class SecondSlide extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dragging: false,
            posY: -5,
            btnTop: -5,
        }
    }

    componentDidMount() {
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('touchmove', this.onMouseMove);
        document.addEventListener('touchend', this.onMouseUp);
        document.addEventListener('mouseup', this.onMouseUp);
    };

    componentDidUpdate(prevProps, prevState) {
        const { slide } = this.props;
        const { posY } = this.state;
        if (prevProps.slide === 2 && prevProps.slide !== slide) {
            this.setState ({ btnTop: -5 });
        };
        if (slide === 2 && prevState.posY !== posY) {
            if (posY < -5) {
                this.setState ({ btnTop: -5 });
            } else if (posY > 327) {
                this.setState ({ btnTop: 327 });
            } else {
                this.setState ({ btnTop: posY });
            }
        };
    }

    onMouseDown = (e) => {
        this.setState({ dragging: true });
    };

    onMouseUp = (e) => {
        this.setState({ dragging: false });
    };

    onMouseMove = (e) => {
        if (!this.state.dragging) return;
        this.setState({ posY: +e.touches[0].pageY - 350 });
    };

    render() {

        const { btnTop } = this.state;
        const { slide } = this.props;
        
        return (
            <section ref={ this.props.refSlide } className="secondSlide">
                <p className="secondSlide__header">
                    ТЕКСТ 
                    <span className="secondSlide__header--br">
                        СООБЩЕНИЯ
                    </span>
                </p>
                <img 
                    className={
                        slide === 2 ?
                            "secondSlide__sperm1Img" : "displayNone"
                    } 
                    src={ spermImg } 
                    alt="sperm"
                />
                <img className={
                        slide === 2 ?
                            "secondSlide__sperm2Img" : "displayNone"
                    }  
                    src={ sperm2Img } 
                    alt="sperm"
                />
                <img className={
                        slide === 2 ?
                            "secondSlide__sperm3Img" : "displayNone"
                    }  
                    src={ sperm3Img } 
                    alt="sperm"
                />
                <img className={
                        slide === 2 ?
                            "secondSlide__sperm4Img" : "displayNone"
                    }  
                    src={ sperm4Img } 
                    alt="sperm"
                />
                <img className={
                        slide === 2 ?
                            "secondSlide__sperm5Img" : "displayNone"
                    }  
                    src={ sperm5Img } 
                    alt="sperm"
                />
                <div className="secondSlide__content">
                    <div className="secondSlide__scroller">
                        <img
                            onMouseDown={ this.onMouseDown }
                            onTouchStart={ this.onMouseDown }
                            className="secondSlide__btn" src={ btnImg } alt="btn" 
                            style={{ top: btnTop }}
                        />
                    </div>
                    <div className="secondSlide__textWrapper">
                        <span className="shadowUp" ></span>
                        <div 
                            className="secondSlide__text"
                            style={{ top: 10 - btnTop }}
                        >
                            <p>
                                <strong>Lorem ipsum dolor sit amet, </strong> consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut morbi
                                tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam eget
                                felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi etiam
                                dignissim diam quis enim lobortis. Est sit amet facilisis magna.
                                Neque laoreet suspendisse interdum consectetur libero id.
                                Nec ullamcorper sit amet risus nullam eget felis eget.
                                Mollis aliquam ut porttitor leo a diam sollicitudin tempor id.
                                Euismod quis viverra nibh cras pulvinar mattis nunc.
                                Massa massa ultricies mi quis. Sit amet massa vitae tortor
                                condimentum lacinia. Et malesuada fames ac turpis egestas
                                integer eget. Elementum pulvinar etiam non quam lacus suspendisse
                                faucibus interdum posuere.
                            </p>
                            <p className="margin">
                                Amet justo donec enim diam vulputate ut pharetra sit.
                                Risus ultricies tristique nulla aliquet enim tortor at auctor.
                                Velit sed ullamcorper morbi tincidunt ornare massa.
                                Quis hendrerit dolor magna eget est lorem ipsum. Etiam dignissim
                                diam quis enim. Gravida neque convallis a cras. Ut enim blandit
                                volutpat maecenas volutpat. Mauris sit amet massa vitae tortor
                                condimentum lacinia quis vel.
                            </p>
                        </div>
                        <span className="shadowDown" ></span>
                    </div>
                </div>
            </section>
        )
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('touchmove', this.onMouseMove);
        document.removeEventListener('touchend', this.onMouseUp);
        document.removeEventListener('mouseup', this.onMouseUp);
    }
}

export default SecondSlide;