import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Slider from './slider.js';

class Main extends Component {
  render(){
    return(

      <main>
        <Switch>
          <Route
            exact
            key='1'
            path='/'
            render={(props) => (<Slider currentIndex={0} {...props}/>)}
          />
          <Route
            exact
            key='1'
            path='/1'
            render={(props) => (<Slider currentIndex={0} {...props}/>)}
          />
          <Route
            exact
            key='2'
            path='/2'
            render={(props) => (<Slider currentIndex={1} {...props}/>)}
          />
          <Route
            exact
            key='3'
            path='/3'
            render={(props) => (<Slider currentIndex={2} {...props}/>)}
          />
        </Switch>
      </main>

    )
  }
}

export default Main
