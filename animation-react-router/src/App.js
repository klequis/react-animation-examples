/*
 * Check out the article explaining this code in detail
 * at https://medium.com/@stephen.cook/animations-with-react-router-8e97222e25e1
 */

import React from 'react';
import { HashRouter, Switch, Link, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './styles.css';

const Container = () => (
  <React.Fragment>
    <div className='container'>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              classNames='fade'
              timeout={600}
            >
              <Switch location={location}>
                <Route
                  path='/penguin'
                  render={() => (
                    <Link className='link' to='/lion'>
                      🐧→🦁
                    </Link>
                  )}
                />
                <Route
                  path='/lion'
                  render={() => (
                    <Link className='link' to='/chimp'>
                      🦁→🐵
                    </Link>
                  )}
                />
                <Route
                  path='/chimp'
                  render={() => (
                    <Link className='link' to='/finch'>
                      🐵→🐤
                    </Link>
                  )}
                />
                <Route
                  path='/finch'
                  render={() => (
                    <Link className='link' to='/bee'>
                      🐤→🐝
                    </Link>
                  )}
                />
                <Route
                  path='/bee'
                  render={() => (
                    <Link className='link' to='/penguin'>
                      🐝→🐧
                    </Link>
                  )}
                />
                <Route
                  path='/'
                  render={() => (
                    <Link className='link white' to='/penguin'>
                      <img
                        src='https://pbs.twimg.com/profile_images/702439715270729728/vMmnId56_400x400.jpg'
                        width='96px'
                        height='96px'
                        alt='emojii'
                      />
                    </Link>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
    <p>
      (the page will <em>flash red</em> when 3+ pages are visible)
    </p>
  </React.Fragment>
);

const App = () => (
  <HashRouter>
    <Container />
  </HashRouter>
)

export default App

