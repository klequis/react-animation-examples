import React from 'react';
import injectSheet from 'react-jss'
import classNames from 'classnames'

const InputGroup = ({ classes, children, className: classNameProp }) => {

  const clsNames = classNames(
    classes.wrapper,
    classNameProp
  )
  return (
    <div className={clsNames}>
      {children}
    </div>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'lightgray',
    padding: 8,
  }
}

export default injectSheet(styles)(InputGroup)