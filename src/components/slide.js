import React, { Component } from 'react';

class Slide extends Component {

  constructor(props){
    super(props);
    this.content = props.slidesArray;
  }

	render() {
		return (

      <div
        id={'slide-'+(this.content.number-1)}
        className={'slider-slide slide-'+(this.content.number-1)}
        >

        <div className="slider-slide-top">

          <div className="number-icon-wrapper">
            <div
              className="number-icon slide-in"
              style={this.content.iconBg}
              >
              <span className="number">
                {this.content.number}
              </span>
            </div>
          </div>

          <header className="headline-wrapper">
              <h1 className="headline slide-in">
                {this.content.headline}
              </h1>
          </header>

          <div className="copy-wrapper">
            <p className="copy slide-in">
              {this.content.copy}
            </p>
          </div>

        </div>

        <div className="slider-slide-bottom" style={this.content.bottomBg}>
          <div className="context-icon">
            <span className="icon slide-in-2">
              <img src={this.content.icon} alt="icon" />
            </span>
          </div>
        </div>

      </div>

		);
	}
}

export default Slide;
