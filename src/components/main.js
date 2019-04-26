import React, { Component } from 'react';
// import { Switch, Route } from "react-router-dom";
import Slider from './slider.js';

import SlideData from '../mock-api.js';

// TODO this should be automated or a better solution
// const baseUrl = '/';
// const baseUrl = '/uber-slider/';

class Main extends Component {

  render(){
    return(

      <main>

        <Slider content={SlideData.slidesArray0} currentIndex={0}/>

      </main>

    )
  }
}

export default Main


// <Switch>
//
//   <Route
//     exact
//     key='0'
//     path={baseUrl}
//     render={(props) => (<Slider content={SlideData.slidesArray0} currentIndex={0} {...props}/>)}
//   />
//
//   <Route
//     exact
//     key='01'
//     path={baseUrl+'01'}
//     render={(props) => (<Slider content={SlideData.slidesArray0} currentIndex={0} {...props}/>)}
//   />
//
//   <Route
//     exact
//     key='11'
//     path={baseUrl+'11'}
//     render={(props) => (<Slider content={SlideData.slidesArray1} currentIndex={0} {...props}/>)}
//   />
//
//   <Route
//     exact
//     key='21'
//     path={baseUrl+'21'}
//     render={(props) => (<Slider content={SlideData.slidesArray2} currentIndex={0} {...props}/>)}
//   />
//
//
// </Switch>
