import React from 'react';
import injectSheet from 'react-jss'

import { CSSTransition } from 'react-transition-group';

import './CSSTransitionEx.css';

class CSSTransitionEx extends React.Component {
  state = {
    name: '',
    showValidationMessage: false,
    showValidationButton: false,
  };

  render() {

    const {
      name,
      showValidationMessage,
      showValidationButton,
    } = this.state;

    return (
      <div style={{ paddingTop: '2rem' }}>
        <form style={{ marginTop: '1rem' }}>
            <label>Your name</label>
            <input
              type="text"
              value={name}
              onFocus={() => {
                this.setState({
                  showValidationMessage: false,
                });
              }}
              onChange={event => {
                this.setState({
                  name: event.target.value,
                  showValidationButton: true,
                });
              }}
            />
            <CSSTransition
              in={showValidationMessage}
              timeout={300}
              classNames="message"
              unmountOnExit
              onExited={() => {
                this.setState({
                  showValidationButton: true,
                });
              }}
            >
              {state => (
                <div>
                  Your name rocks!
                  <CSSTransition
                    in={state === 'entered'}
                    timeout={300}
                    classNames="star"
                    unmountOnExit
                  >
                    <span className='star'>⭐</span>
                  </CSSTransition>
                </div>
              )}
            </CSSTransition>
        </form>
        {showValidationButton ? (
          <button
            onClick={() => {
              this.setState(state => ({
                showValidationButton: false,
                showValidationMessage: true,
              }));
            }}
          >
            Validate form
          </button>
        ) : null}
      </div>
    );
  }
}

const styles = {
  'message-enter': {
    opacity: '0.01',
    transform: 'scale(0.9) translateY(50%)',
  },
  'message-enter-active': {
    opacity: 1,
    transform: 'scale(1) translateY(0%)',
    transition: 'all 300ms ease-out',
  },
  'message-exit': {
    opacity: 1,
    transform: 'scale(1) translateY(0%)'
  },
  'message-exit-active': {
    opacity: 0.01,
    transform: 'scale(0.9) translateY(50%)',
    transition: 'all 300ms ease-out',
  },
  star: {
    display: 'inline-block',
    marginLeft: '0.5rem',
    transform: 'scale(1.25)',
  },
  'star-enter': {
    opacity: '0.01',
    transform: 'translateY(-100%) scale(0.75)'
  },
  'star-enter-active': {
    opacity: 1,
    transform: 'translateY(0%) scale(1.25)',
    transition: 'all 300ms ease-out',
  },
  'star-exit': {
    opacity: 1,
    transform: 'scale(1.25)',
  },
  'star-exit-active': {
    opacity: 0,
    transform: 'scale(4)',
    transition: 'all 300ms ease-in',
  }
}

export default injectSheet(styles)(CSSTransitionEx)
