// src/Cars.jsx

import PropTypes from 'prop-types';
import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import MyContext from './comoponets/myContext';

function Cars() {
  return (
    <div>
      <MyContext.Consumer>
        {
          value => (
            <div>
              <div>
                <img
                  className={value.red ? 'car-right' : 'car-left'}
                  src={carRed}
                  alt="red car"
                  />
                <button
                  onClick={() => value.moveCar('red', !value.red)}
                  type="button"
                >
                  Move
                </button>
              </div>
              <div>
        <img
          className={value.blue ? 'car-right' : 'car-left'}
          src={carBlue}
          alt="blue car"
        />
        <button
          onClick={() => value.moveCar('blue', !value.blue)}
          type="button"
        >
          Move
        </button>
              </div>
      <div>
        <img
          className={value.yellow ? 'car-right' : 'car-left'}
          src={carYellow}
          alt="yellow car"
        />
        <button
          onClick={() => value.moveCar('yellow', !value.yellow)}
          type="button"
        >
          Move
        </button>
      </div>
            </div>
          )
        }
      </MyContext.Consumer>
    </div>
  );
}

export default Cars;
