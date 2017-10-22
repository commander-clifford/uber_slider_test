import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import { TimelineMax, Power1 } from "gsap";

import paintDrop from './img/paint-drop.svg';
import painterPalette from './img/painter-palette.svg';
import colorDropper from './img/color-dropper.svg';

import './App.css';

// unique styles for unique slides
const styles = {
	slide_0_icon: { backgroundImage: "linear-gradient(45deg, #7E09FC 0%, #09E3FF 100%)" }, /* purple -> teal */
	slide_0_bottom: { backgroundImage: "linear-gradient(90deg, #7E09FC 0%, #09E3FF 100%)" }, /* purple -> teal */
	slide_1_icon: { backgroundImage: "linear-gradient(45deg, #09E3FF 0%, #F3F915 100%)" }, /* teal -> yellow */
	slide_1_bottom: { backgroundImage: "linear-gradient(90deg, #09E3FF 0%, #F3F915 100%)" }, /* teal -> yellow */
	slide_2_icon: { backgroundImage: "linear-gradient(45deg, #F3F915 0%, #FF0D6D 100%)" }, /* yellow -> pinkred */
	slide_2_bottom: { backgroundImage: "linear-gradient(90deg, #F3F915 0%, #FF0D6D 100%)" }, /* yellow -> pinkred */
};

//
const content = {
	slide_0: {
		number: "1",
		headline: "Gradients",
		copy: "Start, end, angle"
	},
	slide_1: {
		number: "2",
		headline: "Presets",
		copy: "Manage presets"
	},
	slide_2: {
		number: "3",
		headline: "Colors",
		copy: "Pick and color"
	}
};

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

class SliderScreensComponent extends Component {

	state = {
		index: 0,
	};

	handleChangeIndex = index => {

		this.setState({ index }); // set||reset index

		// compare previousIndex to currentIndex to determine if toTheRight or toTheLeft
		if (previousIndex < index) {
			changeSlide('toTheRight',index);
		} else {
			changeSlide('toTheLeft',index);
		}

		previousIndex = index;

	};

	render() {
		const { index } = this.state;
		return (
			<div className="slider-wrapper">
				<SliderScreens
					resistance={true}
					enableMouseEvents={true}
					hysteresis={0.2}
					index={index}
					onChangeIndex={this.handleChangeIndex}
				>

					// TODO: this could be looped to be more modular
					<div id="slide-0" className="slider-slide slide-0">

						<div className="slider-slide-top">

							<div className="number-icon-wrapper">
								<div className="number-icon slide-in" style={Object.assign({}, styles.slide_0_icon)}>
									<span className="number">
										{ content.slide_0.number }
									</span>
								</div>
							</div>

							<header className="headline-wrapper">
									<h1 className="headline slide-in">
										{ content.slide_0.headline }
									</h1>
							</header>

							<div className="copy-wrapper">
								<p className="copy slide-in">
									{ content.slide_0.copy }
								</p>
							</div>
						</div>

						<div className="slider-slide-bottom" style={Object.assign({}, styles.slide_0_bottom)}>
							<div className="context-icon">
								<span className="icon slide-in-2">
									<img src={paintDrop} alt="paintDrop" />
								</span>
							</div>
						</div>

					</div>

					<div id="slide-1" className="slider-slide slide-1">

						<div className="slider-slide-top">

							<div className="number-icon-wrapper">
								<div className="number-icon slide-in" style={Object.assign({}, styles.slide_1_icon)}>
									<span className="number">
										{ content.slide_1.number }
									</span>
								</div>
							</div>

							<header className="headline-wrapper">
								<h1 className="headline slide-in">
									{ content.slide_1.headline }
								</h1>
							</header>

							<div className="copy-wrapper">
								<p className="copy slide-in">
									{ content.slide_1.copy }
								</p>
							</div>
						</div>

						<div className="slider-slide-bottom" style={Object.assign({}, styles.slide_1_bottom)}>
							<div className="context-icon">
								<span className="icon slide-in-2">
									<img src={painterPalette} alt="painterPalette" />
								</span>
							</div>
						</div>

					</div>

					<div id="slide-2" className="slider-slide slide-2">

						<div className="slider-slide-top">

							<div className="number-icon-wrapper">
								<div className="number-icon slide-in" style={Object.assign({}, styles.slide_2_icon)}>
									<span className="number">
										{ content.slide_2.number }
									</span>
								</div>
							</div>

							<header className="headline-wrapper">
								<h1 className="headline slide-in">
									{ content.slide_2.headline }
								</h1>
							</header>

							<div className="copy-wrapper">
								<p className="copy slide-in">
									{ content.slide_2.copy }
								</p>
							</div>
						</div>

						<div className="slider-slide-bottom" style={Object.assign({}, styles.slide_2_bottom)}>
							<div className="context-icon">
								<span className="icon slide-in-2">
									<img src={colorDropper} alt="colorDropper" />
								</span>
							</div>
						</div>

					</div>

				</SliderScreens>
			</div>
		);
	}


}

export default SliderScreensComponent;
