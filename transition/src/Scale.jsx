import React from 'react';
import injectSheet from 'react-jss'
// import keycode from 'keycode'

// import { CSSTransition } from 'react-transition-group';
import InputGroup from './InputGroup'

class Scale extends React.Component {
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
        <InputGroup>
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
        </InputGroup>
        <div
          style={transformStyle}
          className={classes.element1}
        >
        </div>
        <div style={transformStyle} className={classes.element2}>
        </div>
      </div>
    );
  }
}

const styles = {
  scale: {
    marginBottom: 100,
  },
  wrapper: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  element1: {
    border: '1px solid red',
    // flexBasis: '20%',
    backgroundColor: 'rgba(255, 0, 0, .5)',
    height: 20,
    width: 20,
    fontSize: 1,
    padding: 1,
    color: 'white',
    lineHeight: 2,
  },
  element2: {
    border: '1px solid blue',
    // flexBasis: '20%',
    backgroundColor: 'rgba(0, 0, 255, .5)',
    height: 20,
    width: 20,
    fontSize: 1,
    padding: 1,
    color: 'white',
    lineHeight: 2,
  }


}

export default injectSheet(styles)(Scale)
