import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import data from './data/data'
import { CSSTransition } from "react-transition-group";
import injectSheet from 'react-jss'

// class component
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      appearHome: true,
      property: data.properties[0]
    }
  }

  toggleAppear = () => {
    this.setState({
      appearHome: !this.state.appearHome
    })
  }

  nextProperty = () => {
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  render() {
    const {appearHome, property} = this.state;
    return (
      <div className="App">
        <button onClick={() => this.toggleAppear()}>Appear: {`${appearHome}`}</button>
        <button onClick={() => this.nextProperty()} disabled={property.index === data.properties.length-1}>Next</button>
        <button onClick={() => this.prevProperty()} disabled={property.index === 0}>Prev</button>

        <CSSTransition
          in={appearHome}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <Home property={property} />
        </CSSTransition>
      </div>
    );
  }
}

const styles = {

  /* appear - on page load */
  'fade-appear': {
    opacity: 0,
    zIndex: 1,
  },
  'fade-appear.fade-appear-active': {
  opacity: 1,
  transition: 'opacity 1000ms linear',
  },

  /* enter */
  'fade-enter': {
    opacity: 0,
    zIndex: 1,
  },
  'fade-enter.fade-enter-active': {
    opacity: 1,
    transition: 'opacity 5000ms linear 5000ms',
  },

  /* exit */
  'fade-exit': {
    opacity: 1,
  },
  'fade-exit.fade-exit-active': {
    opacity: 0,
    transition: 'opacity 5000ms linear',
  },
  'fade-exit-done': {
    opacity: 0,
  },


}

export default injectSheet(styles)(App)
