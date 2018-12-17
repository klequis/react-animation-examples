import React from 'react';

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
                    <div className='star'>⭐</div>
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

export default CSSTransitionEx
