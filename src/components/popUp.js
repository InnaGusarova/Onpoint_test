import React from 'react';

import btn_closeImg from '../img/btn_close.png'
import btnBackImg from '../img/btnBack.png'
import btnNextImg from '../img/btnNext.png'

class PopUp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          page: 1,
        }
    }

    handleClick = () => {
        const { closePopUp } = this.props;
        this.setState({ page: 1 })
        closePopUp();
    }

    prevPage = () => {
        if (this.state.page === 2) {
            this.setState({ page: 1})
        } 
    }
    nextPage = () => {
        if (this.state.page === 1) {
            this.setState({ page: 2 })
        } 
    }

    render() {

        const { page } =this.state;

        return (
            <section className="popUp">
                <button onClick={ this.handleClick }>
                    <img className="popUp__btnClose" src={ btn_closeImg } alt="close"/>
                </button>
                <h1 className="popUp__header">
                    <span className="popUp__header--smallText">ПРЕИМУЩЕСТВА</span>
                    BREND 
                    <span className="popUp__header--boldText">
                        XY
                    </span>
                </h1>
                {
                    page === 1 ? 
                        <div className="popUp__content">
                            <p className="popUp__text">
                                <span className="popUp__numbering">
                                    01
                                </span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                            <p className="popUp__text">
                                <span className="popUp__numbering">
                                    02
                                </span>
                                Faucibus pulvinar elementum integer enim
                            </p>
                            <p className="popUp__text">
                                <span className="popUp__numbering">
                                    03
                                </span>
                                Faucibus pulvinar elementum integer enim
                            </p>
                        </div> :
                            <div className="popUp__content">
                                <p className="popUp__text">
                                    <span className="popUp__numbering">
                                        04
                                    </span>
                                    Mi bibendum neque egestas congue quisque egestas diam
                                </p>
                                <p className="popUp__text">
                                    <span className="popUp__numbering">
                                        05
                                    </span>
                                    Venenatis lectus magna fringilla urna
                                </p>
                                <p className="popUp__text">
                                    <span className="popUp__numbering">
                                        06
                                    </span>
                                    Venenatis lectus magna fringilla urna
                                </p>
                            </div>
                }
                <div className="popUp__navigation">
                    <img onClick={ this.prevPage } className="popUp__btn" src={ btnBackImg } alt="btnBack"/>
                    <div className="popUp__indicator">
                        <span className="popUp__open"/>
                        <span className={ page === 2 ? "popUp__open" : "popUp__close" }/>
                    </div>
                    <img onClick={ this.nextPage } className="popUp__btn" src={ btnNextImg } alt="btnNext"/>
                </div>
            </section>
        )
    }
}
export default PopUp;