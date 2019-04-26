import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Slider from './slider.js';

import SlideData from '../mock-api.js';

// TODO this should be automated or a better solution
// const baseUrl = '/';
const baseUrl = '/uber-slider/';

class Main extends Component {

  render(){
    return(

      <main>

        <Switch>

          {/* TODO: DRY this out or refactor */}

          {/* Default */}
          <Route
            exact
            key='0'
            path={baseUrl}
            render={(props) => (<Slider content={SlideData.slidesArray0} currentIndex={0} {...props}/>)}
          />

          {/* Slider wc0*/}
          <Route
            exact
            key='01'
            path={baseUrl+'01'}
            render={(props) => (<Slider content={SlideData.slidesArray0} currentIndex={0} {...props}/>)}
          />
          <Route
            exact
            key='02'
            path={baseUrl+'02'}
            render={(props) => (<Slider content={SlideData.slidesArray0} currentIndex={1} {...props}/>)}
          />
          <Route
            exact
            key='03'
            path={baseUrl+'03'}
            render={(props) => (<Slider content={SlideData.slidesArray0} currentIndex={2} {...props}/>)}
          />

          {/* Slider wc1*/}
          <Route
            exact
            key='11'
            path={baseUrl+'11'}
            render={(props) => (<Slider content={SlideData.slidesArray1} currentIndex={0} {...props}/>)}
          />
          <Route
            exact
            key='12'
            path={baseUrl+'12'}
            render={(props) => (<Slider content={SlideData.slidesArray1} currentIndex={1} {...props}/>)}
          />
          <Route
            exact
            key='13'
            path={baseUrl+'13'}
            render={(props) => (<Slider content={SlideData.slidesArray1} currentIndex={2} {...props}/>)}
          />
          <Route
            exact
            key='14'
            path={baseUrl+'14'}
            render={(props) => (<Slider content={SlideData.slidesArray1} currentIndex={3} {...props}/>)}
          />

          {/* Slider wc2*/}
          <Route
            exact
            key='21'
            path={baseUrl+'21'}
            render={(props) => (<Slider content={SlideData.slidesArray2} currentIndex={0} {...props}/>)}
          />
          <Route
            exact
            key='22'
            path={baseUrl+'22'}
            render={(props) => (<Slider content={SlideData.slidesArray2} currentIndex={1} {...props}/>)}
          />
          <Route
            exact
            key='23'
            path={baseUrl+'23'}
            render={(props) => (<Slider content={SlideData.slidesArray2} currentIndex={2} {...props}/>)}
          />
          <Route
            exact
            key='24'
            path={baseUrl+'24'}
            render={(props) => (<Slider content={SlideData.slidesArray2} currentIndex={3} {...props}/>)}
          />

        </Switch>

      </main>

    )
  }
}

export default Main
