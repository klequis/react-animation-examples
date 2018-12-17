import React from 'react';
import injectSheet from 'react-jss'
import InputGroup from './InputGroup'

class Skew extends React.Component {
  state = {
    scale: 1,
    scaleX: 1,
    scaleY: 1,
  }

  scaleChange = e => {
    this.setState({
      scale: e.target.value
    })
  }

  scaleXChange = e => {
    this.setState({
      scaleX: e.target.value
    })
  }
  scaleYChange = e => {
    this.setState({
      scaleY: e.target.value
    })
  }

  render() {
    const { classes } = this.props
    const transformStyle = {
      transform: `
        scale(${this.state.scale})
        scaleX(${this.state.scaleX})
        scaleY(${this.state.scaleY})
      `,
    }
    return (
      <div className={classes.wrapper}>
        {/* <InputGroup>
          <label>Scale</label>
          <input
            type='number'
            value={this.state.scale}
            onChange={this.scaleChange}
          />
        </InputGroup>
        <InputGroup>
          <label>ScaleX</label>
          <input
            type='number'
            value={this.state.scaleX}
            onChange={this.scaleXChange}
          />
        </InputGroup>
        <InputGroup className={classes.scale}>
          <label>ScaleY</label>
          <input
            type='number'
            value={this.state.scaleY}
            onChange={this.scaleYChange}
          />
        </InputGroup> */}
        <div className={classes.element}>
        </div>
        <div className={classes.element}>
        </div>
        <div className={classes.element}>
        </div>
      </div>
    );
  }
}

const styles = {
  scale: {
    // marginBottom: 100,
  },
  wrapper: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    // flexDirection: 'column',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  element: {
    backgroundColor: 'blue',
    display: 'inlineBlock',
    color: 'white',
    height: 100,
    fontSize: 1,
    marginLeft: 5,
    marginRight: 5,
    opacity: .7,
    padding: 1,
    width: 100,

    animation: 'skew 3s infinite',
    animationDirection: 'alternate',
    transform: 'skew(20deg)',
  },
  '@keyframes skew': {
    '0%': {
      transform: 'skewX(20deg)',
    },
    '100%': {
      transform: 'skewX(-20deg)',
    }
  }

}

export default injectSheet(styles)(Skew)
