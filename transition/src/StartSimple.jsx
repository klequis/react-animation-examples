import React from 'react';
import injectSheet from 'react-jss'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group';

class StartSimple extends React.Component {
  state = {
    ripple: false,
  }
  divClick = () => {
    console.log('divClick()');

    this.setState({
      ripple: true,
    })
  }
  setRipple = () => {
    this.setState({
      ripple: true
    })
  }
  render() {
    const clsNames = classNames('btn', 'hover', 'ripple')
    const { children, classes } = this.props
    console.log('ripple:', this.state.ripple)

    return (
      <div>
        <button onClick={this.setRipple}>Ripple</button>
        <CSSTransition
          in={this.state.ripple}
          timeout={300}
          classNames='simple'
          // onClick={this.buttonClick}
          onClick={this.divClick}
          onExited={() => {
            this.setState({
              ripple: false
            })
          }}
        >
          {state => (
            <div className={classes.simple}>Just a div</div>
          )}

        </CSSTransition>
      </div>
    )
  }

}

const styles = {
  'simple': {
    padding: 15,
  },
  'simple-enter': {
    backgroundColor: 'red',
  },
  'simple-enter-active': {
    backgroundColor: 'green',
  },
  'simple-exit': {
    backgroundColor: 'blue',
  },
  'simple-exit-active': {
    backgroundColor: 'orange',
  }

}

export default injectSheet(styles)(StartSimple)