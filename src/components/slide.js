import React, { Component } from 'react';

class Slide extends Component {

  constructor(props){
    super(props);
    this.content = props.slidesArray;

    this.styles = {
      slide: {
        width: "100vw",
        height: '100vh',
      },
      slideTop: {
        background: 'white',
				height: '55vh',
      },
      slideBottom: {
				height: '45vh',
			},
      numberIconWrapper: {
        // padding: '10vh 0 0 0', //
        // @media screen and (min-height: $smallScreen) {}
        padding: '18vh 0 0 0'
      },
      numberIcon: {
  			margin: '0 auto',
  			borderRadius: '50%',
  			// width: '10vh',
  			// height: '10vh',
        // @media screen and (min-height: $smallScreen) {}
  			width: '8vh',
  			height: '8vh',
      },
      number: {
        display: 'block',
				textAlign: 'center',
				color: 'white',
				// font-size: '5vh',
				// line-height: '10vh',
				// @media screen and (min-height: $smallScreen) {
					fontSize: '4vh',
					lineHeight: '8vh',
      },
      headline: {
        fontFamily: 'Work Sans, sans-serif',
  			textAlign: 'center',
  			lineHeight: '1.5',
  			margin: '1vh 0 .5vh',
  			// fontSize: '12vh',
  			// @media screen and (min-height: $smallScreen) {
  				fontSize: '6vh',
      },
      copy: {
        textAlign: 'center',
  			color: '#A9A9A9',
  			margin: '0 0',
  			// fontSize: '6vh',
  			// @media screen and (min-height: $smallScreen) {
  				fontSize: '2.5vh',
      },
      contextIcon: {
        display: 'flex',
    		alignItems: 'center',
    		justifyContent: 'center',
    		height: '100%',
      },
      theIcon: {
        // width: '18vh',
  			// @media screen and (min-height: $smallScreen) {
  				width: '14vh'
      },
    };


  }

	render() {
		return (

      <div
        id={'slide-'+(this.content.number-1)}
        className={'slider-slide slide-'+(this.content.number-1)}
        style={this.styles.slide}
        >

        <div className="slider-slide-top" style={this.styles.slideTop}>

          <div className="number-icon-wrapper" style={this.styles.numberIconWrapper}>
            <div
              className="number-icon slide-in"
              style={{...this.styles.numberIcon,...this.content.iconBg}}
              >
              <span className="number" style={this.styles.number}>
                {this.content.number}
              </span>
            </div>
          </div>

          <header className="headline-wrapper">
              <h1 className="headline slide-in" style={this.styles.headline}>
                {this.content.headline}
              </h1>
          </header>

          <div className="copy-wrapper">
            <p className="copy slide-in" style={this.styles.copy}>
              {this.content.copy}
            </p>
          </div>

        </div>

        <div className="slider-slide-bottom" style={{...this.styles.slideBottom,...this.content.bottomBg}}>
          <div className="context-icon" style={this.styles.contextIcon}>
            <span className="icon slide-in-2" style={this.styles.theIcon}>
              <img src={this.content.icon} alt="icon" />
            </span>
          </div>
        </div>

      </div>

		);
	}
}

export default Slide;
