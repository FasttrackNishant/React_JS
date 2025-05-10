import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import NewsItem from './components/NewsItem';

export default class App extends Component {

  c = 'ROnny';

  render() {

    return (
      <>
        {/* <div>This is MY first class based component {this.c}</div> */}
        <NavBar />
        <News />

      </>

    )
  }
}
