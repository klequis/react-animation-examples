import React, { Component } from 'react';
import injectSheet from 'react-jss'
import logo from './logo.svg';

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.app}>
        <nav className={classes.nav}>
          <a href='#' className={classes.navItem}>Home</a>
          <a href='#' className={classes.navItem}>About</a>
          <a href='#' className={classes.navItem}>Contact Us</a>
          <a href='#' className={classes.navItem}>Links</a>
        </nav>
        <header className={classes.appHeader}>
          <img src={logo} className={classes.appLogo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={classes.appLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

const styles = {
  nav: {
    backgroundColor: '#282c34',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  navItem: {
    color: '#fff',
    backgroundColor: '#282c34',
    padding: 16,
    transition: 'all 0.5s ease-in-out',
    '&:hover': {
      color: '#333',
      backgroundColor: '#fff',
    },
    '&:focus': {
      color: '#333',
      backgroundColor: '#fff',
    },

  },
  app: {
    textAlign: 'center',
  },
  appLogo: {
    animation: 'App-logo-spin infinite 20s linear',
    height: '40vmin',
  },
  appHeader: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  appLink: {
    color: '#61dafb',
  },

  '@keyframes App-logo-spin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },

  a: {
    color: '#fff',
    backgroundColor: '#282c34',
    padding: 16,
    transition: 'all 0.5s ease-in-out'

  },
  'a:hover': {
    color: '#333',
    backgroundColor: '#fff',
  },
  'a:focus': {
    color: '#333',
    backgroundColor: '#fff',
  }
}

export default injectSheet(styles)(App)
