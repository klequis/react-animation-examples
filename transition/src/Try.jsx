import React from 'react';
import injectSheet from 'react-jss'

import { CSSTransition } from 'react-transition-group';


class Scale extends React.Component {
  state = {
    scaleX: 0,
    scaleY: 0,
  }
  scaleChange = (e) => {

  }
  render() {
    const { classes } = this.props

    return (
      <div className={classes.wrapper}>
        <div className={classes.element1}>
          hi
        </div>

      </div>
    );
  }
}

const styles = {
  wrapper: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  element1: {
    border: '1px solid white',
    // flexBasis: '20%',
    backgroundColor: 'blue',
    // height: 20,
    width: 20,
    // transform: 'scale(2)',
    fontSize: 1,
    padding: 1,
    color: 'white',
    lineHeight: 2,
  },

}

export default injectSheet(styles)(Scale)
