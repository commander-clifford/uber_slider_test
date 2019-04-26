import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Slider from './slider.js';

import SlideData from '../mock-api.js'

class Main extends Component {
  render(){
    return(

      <main>

        <Switch>

          {/* TODO: DRY this out or refactor */}

          {/* Default */}
          <Route
            exact
            key='1'
            path='/'
            render={(props) => (<Slider content={SlideData.slidesArray0} currentIndex={0} {...props}/>)}
          />

          {/* Slider wc0*/}
          <Route
            exact
            key='01'
            path='/01'
            render={(props) => (<Slider content={SlideData.slidesArray0} currentIndex={0} {...props}/>)}
          />
          <Route
            exact
            key='02'
            path='/02'
            render={(props) => (<Slider content={SlideData.slidesArray0} currentIndex={1} {...props}/>)}
          />
          <Route
            exact
            key='03'
            path='/03'
            render={(props) => (<Slider content={SlideData.slidesArray0} currentIndex={2} {...props}/>)}
          />

          {/* Slider wc1*/}
          <Route
            exact
            key='11'
            path='/11'
            render={(props) => (<Slider content={SlideData.slidesArray1} currentIndex={0} {...props}/>)}
          />
          <Route
            exact
            key='12'
            path='/12'
            render={(props) => (<Slider content={SlideData.slidesArray1} currentIndex={1} {...props}/>)}
          />
          <Route
            exact
            key='13'
            path='/13'
            render={(props) => (<Slider content={SlideData.slidesArray1} currentIndex={2} {...props}/>)}
          />
          <Route
            exact
            key='14'
            path='/14'
            render={(props) => (<Slider content={SlideData.slidesArray1} currentIndex={3} {...props}/>)}
          />

          {/* Slider wc2*/}
          <Route
            exact
            key='21'
            path='/21'
            render={(props) => (<Slider content={SlideData.slidesArray2} currentIndex={0} {...props}/>)}
          />
          <Route
            exact
            key='22'
            path='/22'
            render={(props) => (<Slider content={SlideData.slidesArray2} currentIndex={1} {...props}/>)}
          />
          <Route
            exact
            key='23'
            path='/23'
            render={(props) => (<Slider content={SlideData.slidesArray2} currentIndex={2} {...props}/>)}
          />
          <Route
            exact
            key='24'
            path='/24'
            render={(props) => (<Slider content={SlideData.slidesArray2} currentIndex={3} {...props}/>)}
          />

        </Switch>

      </main>

    )
  }
}

export default Main
