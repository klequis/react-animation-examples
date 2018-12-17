import React from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';

class Fade extends React.Component {
  state = {
    show: false,
//     entered: false,
  };

  render() {
    const { show } = this.state;
    return (
      <div id='div-1' style={{ paddingTop: '2rem', backgroundColor: 'lightgrey' }}>

        <button
          onClick={() => {
            this.setState(state => ({
              show: !state.show,
            }));
          }}
        >
          Toggle
        </button>

        <div id='div-2' style={{ marginTop: '1rem', backgroundColor: 'darkgrey' }}>
          Wait for it:{'  '}
          <Transition
            in={show}
            timeout={1000}
            unmountOnExit
          >
            {state => {
              switch (state) {
                case 'entering':
                  return 'Entering…';
                case 'entered':
                  return 'Entered!';
                case 'exiting':
                  return 'Exiting…';
                case 'exited':
                  return 'Exited!';
                default:

              }
            }}
          </Transition>
        </div>
      </div>
    );
  }
}

export default Fade