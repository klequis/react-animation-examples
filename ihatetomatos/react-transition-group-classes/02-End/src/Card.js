import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const Card = ({ classes, property}) => {
    const {index, picture, city, address, bedrooms, bathrooms, carSpaces} = property;
    return (
        <div id={`card-${index}`} className={classes.card}>
            <img src={picture} className={classes.cardImg} alt={city} />
            <div className="details">
                <span className="index">{index+1}</span>
                <p className="location">
                    {city}<br />
                    {address}
                </p>
                <ul className="features">
                    <li className="icon-bed">{bedrooms} <span>bedrooms</span></li>
                    <li className="icon-bath">{bathrooms} <span>bathrooms</span></li>
                    <li className="icon-car">{carSpaces} <span>parking spots</span></li>
                </ul>
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

const styles = {
  card: {
    border: '3px #f3f3f3 solid',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s linear',
    cursor: 'pointer',
    backgroundColor: '#f3f3f3',
    padding: 10,
    maxWidth: 220,
    textAlign: 'left',
    margin: '0 auto',

    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  cardImg: {
    maxWidth: 'calc(100%)',
    margin: '0 auto',
    display: 'block',
  }
}

export default injectSheet(styles)(Card)