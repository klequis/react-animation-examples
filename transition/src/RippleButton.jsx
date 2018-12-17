import React from 'react';
import injectSheet from 'react-jss'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group';

class RippleButton extends React.Component {
  state = {
    ripple: false,
  }
  buttonClick = () => {
    this.setState({
      ripple: true,
    })
  }
  render() {
    const clsNames = classNames('btn', 'hover', 'ripple')
    const { children, classes } = this.props
    return (
      <CSSTransition
        in={this.state.ripple}
        timeout={300}
        classNames='ripple'
        onClick={this.buttonClick}
        onExited={() => {
          this.setState({
            ripple: false
          })
        }}
      >
        {state => (
          <div>Just a div</div>
        )}

      </CSSTransition>
    )
  }

}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'lightgray',
    padding: 16,
  },
  btn: {
    backgroundColor: '#1D27E7',
    color: '#fff',
    minWidth: 160,
    fontSize: '1.3rem',
    padding: '10px 20px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'inline-flex',
    alignitems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textDecoration: 'none',
    transition: '0.3s',
    borderRadius: 4,
    border: '2px solid #1D27E7',
    outline: 'none',
    whiteSpace: 'nowrap',
    fontWeight: 500,
    verticalAlign: 'middle',
    margin: 5,
    boxShadow: `0 0 2px -2px rgba(29, 39, 231, .1),
      0 0 3px 0 rgba(29, 39, 231, .1),
      0 0 5px 0 rgba(29, 39, 231, .1),
      0 2px 2px -4px rgba(29, 39, 231, .1),
      0 4px 8px 0 rgba(29, 39, 231, .1),
      0 2px 15px 0 rgba(29, 39, 231, .1)`,
    '&:hover': {
      backgroundColor: '#131BB4',
      borderColor: '#131BB4',
      color: '#fff',
    },
  },
  ripple: {
    position: 'relative',
    overflow: 'hidden',
    transform: 'translate3d(0, 0, 0)',
  },
  'ripple-exit': {
    content: "",
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
    transform: 'scale(10, 10)',
    opacity: 0,
    transition: 'transform .5s, opacity 1s'
  },
  'ripple-active': {

  },
  'ripple-after': {
    transform: 'scale(0, 0)',
    opacity: .3,
    transition: '0s',
  }

}

export default injectSheet(styles)(RippleButton)