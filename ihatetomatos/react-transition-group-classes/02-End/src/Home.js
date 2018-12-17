import React from 'react';
import logo from './assets/logo.svg';
import Card from './Card';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import injectSheet from 'react-jss'

const Home = ({ classes, property }) => {

    return(
        <div className={classes.page}>
            <section>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>React Transition Group classes breakdown.</h1>
            </section>

            <TransitionGroup className="card-container">
                <CSSTransition
                    key={property._id}
                    timeout={4500}
                    classNames="slide"
                >
                    <Card property={property} />
                </CSSTransition>
            </TransitionGroup>

        </div>
    )
}

const styles = {
  page: {
    backgroundColor: 'grey',
  }
}
export default injectSheet(styles)(Home)