import React, { Component } from 'react';
import Slide from './slide.js';

import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import { TimelineMax, Power1 } from "gsap";

const SliderScreens = bindKeyboard(SwipeableViews);

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

    this.styles = {
      wrapper: {
        width: "100vw",
        height: '100vh',
      }
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
      slides.push(<Slide content={this.content[i]} key={i} />)
    }
    return slides
  }

  render(){
    const { index } = this.state;
    return (
      <div style={this.styles.wrapper} className="slider-wrapper">

      <SliderScreens
        resistance={true}
        enableMouseEvents={true}
        hysteresis={0.2}
        index={index}
        onChangeIndex={this.handleChangeIndex}
      >

      {this.createSlides()}

      </SliderScreens>

      </div>

    );
  }

}

export default Slider
