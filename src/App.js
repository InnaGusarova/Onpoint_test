import React from 'react';
import FirstSlide from './components/firstSlide';
import SecondSlide from './components/secondSlide';
import ThirdSlide from './components/thirdSlide';

import homeImg from './img/home.png';
import logoImg from './img/logo.png';

import './App.scss';

window.forceSmoothScrollPolyfill = true;

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      slide: 1,
      srartX: 0,
      popUp: false,
    }
    this.firstSlideRef = React.createRef();
    this.secondSlideRef = React.createRef();
    this.thirdSlideRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('touchstart', this.touchstart);
    document.addEventListener('touchend', this.touchend);
  };

  componentDidUpdate(prevProps, prevState) {
    const { slide } = this.state;

    if (prevState.slide === 3 && prevState.slide !== slide) {
      this.closePopUp();
      console.log('!')
    };
}

  touchstart = (e) => {
    this.setState({ startX: e.touches[0].pageX})
  };

  touchend = (e) => {
    const { startX, slide } = this.state;
    const endX = e.changedTouches[0].pageX;
    if (Math.abs(startX - endX) > 100) {
      if (startX > endX && slide < 3)  {
        this.scrollToRight()
        this.setState({ slide: slide + 1 })
      } else if (startX < endX && slide > 1) {
        this.scrollToLeft()
        this.setState({ slide: slide - 1 })
      } 
    } else {
      return
    }
  }
  
  scrollToRight = () => {
    const { slide } = this.state;

    if (slide === 1) {
      setTimeout(() => {
        this.secondSlideRef?.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }, 100)
    }
    if (slide === 2) {
      setTimeout(() => {
        this.thirdSlideRef?.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }, 100)
    }
  }

  scrollToLeft = () => {
    const { slide } = this.state;

    if (slide === 2) {
      setTimeout(() => {
        this.firstSlideRef?.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }, 100)
    }
    if (slide === 3) {
      setTimeout(() => {
        this.secondSlideRef?.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }, 100)
    } 
  }

  goFirstSlide = () => {
    this.setState({ slide: 1 });
    this.firstSlideRef?.current.scrollIntoView({
      behavior: "smooth",
    });
    this.setState({ popUp: false })
  }

  goSecondSlide = () => {
    this.setState({ slide: 2 });
    this.secondSlideRef?.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  showPopUp = () => {
    this.setState({ popUp: true })
  }

  closePopUp = () => {
      this.setState({ popUp: false })
  }

  render() {
    return (
      <div className="App" >
        <div className="App__navigation navigation">
          <img 
            onClick={ this.goFirstSlide }
            className="navigation__home" 
            src={ homeImg } 
            alt="home"
          />
          <span className="navigation__separator"></span>
          <span className="navigation__text">PROJECT</span>
        </div>
        <FirstSlide 
          handleClick={ this.goSecondSlide } 
          refSlide={ this.firstSlideRef } 
        />
        <SecondSlide 
          slide={ this.state.slide }
          refSlide={ this.secondSlideRef }
        />
        <ThirdSlide 
          popUp={ this.state.popUp }
          refSlide={ this.thirdSlideRef } 
          showPopUp={ this.showPopUp }
          closePopUp={ this.closePopUp }
        />
        <img className="App__logo" src={ logoImg } alt="logo"/>
      </div>
    );
  }

  componentWillUnmount() {
    document.removeEventListener('touchstart', this.touchstart);
    document.removeEventListener('touchend', this.touchend);
  }
}

export default App;