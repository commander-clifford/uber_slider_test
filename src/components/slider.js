import React, { Component } from 'react';
import Slide from './slide.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SwipeableRoutes from "react-swipeable-routes";
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import { TimelineMax, Power1 } from "gsap";

const SliderScreens = bindKeyboard(SwipeableViews);

const STYLES = {
  wrapper: {
    width: "100vw",
    height: '100vh',
  }
};

let previousIndex = 0;

let changeSlide = function(direction, index) {

  console.log(direction + ' to ' + index); // sanity check

  // determine travelDistance and if value will be negative
  let travelDistance = 40;
  if (window.outerWidth >= 480 ) { travelDistance = travelDistance*2; } // double it on bigger screen
  if (direction === 'toTheLeft') { travelDistance = travelDistance-travelDistance-travelDistance; } // left gets negative axis

  // clear all active states
  for (var i = 0; i < document.getElementsByClassName('slider-slide').length; i++) {
    document.getElementsByClassName('slider-slide')[i].classList.remove('active','toTheRight','toTheLeft');
  }

  document.getElementById('slide-'+index).classList.add('active',direction); // make current slide active

  // get the animated elements
  let slideInsInHeader = document.querySelector('.active.'+direction+'#slide-'+index).getElementsByClassName( 'slide-in' ); // get animated elements of active slide
  let slideInIcon = document.querySelector('.active.'+direction+'#slide-'+index).getElementsByClassName( 'slide-in-2' )[0]; // get animated elements of active slide

  // GSAP Magic
  let slideStaggerTimeLine = new TimelineMax({}); // define new timeline
  // stagger in the animated elements from either side,
  //  - each element takes 0.24 seconds to complete and are staggered by 0.08
  //  - icon element sliding in at the same time as last element from previous group but from 1.8 the distance to increase the parallax feel
  slideStaggerTimeLine.staggerFrom( slideInsInHeader, 0.24, { x: travelDistance, ease:Power1.easeOut }, 0.08 )
  .from( slideInIcon, 0.24, {  x: travelDistance*1.8, ease:Power1.easeOut }, '-=0.24' );
  slideStaggerTimeLine.play();

}

class Slider extends Component {

  constructor(props){
    super(props);
    this.index = props.currentIndex;
    this.content = props.content;
    this.state = {
      index: this.index ? this.index : 0,
    };
  }

  handleChangeIndex = index => {

    this.setState({ index }); // set||reset index

    // compare previousIndex to currentIndex to determine if toTheRight or toTheLeft
    if (previousIndex < index) {
      changeSlide('toTheRight',index);
    } else {
      changeSlide('toTheLeft',index);
    }

    // set previousIndex to be compared on next slide
    previousIndex = index;

  };

  createSlides = () => {
    let slides = []
    for (let i = 0; i < this.content.length; i++) {
      slides.push(
        <Route
          path={'/'+i}
          component={<Slide content={this.content[i]} key={i} />} />
      )
    }
    return slides
  }

  render(){
    const { index } = this.state;
    const slide1 = () => (<Slide content={this.content[0]} key={0} />);
    const slide2 = () => (<Slide content={this.content[1]} key={1} />);
    const slide3 = () => (<Slide content={this.content[2]} key={2} />);
    return (

      <Router>
        <div style={STYLES.wrapper} className="slider-wrapper">

          <SwipeableRoutes
            resistance={true}
            enableMouseEvents={true}
            hysteresis={0.2}
            index={index}
            onChangeIndex={this.handleChangeIndex}
          >

          <Route path={'/1'} component={slide1} />
          <Route path={'/2'} component={slide2} />
          <Route path={'/3'} component={slide3} />

          </SwipeableRoutes>

        </div>
      </Router>

    );
  }

}

export default Slider
