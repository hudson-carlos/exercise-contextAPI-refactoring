import React from 'react';
import './App.css';
import Cars from './Cars';
import Mycontext from './comoponets/myContext';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: false,
      blue: false,
      yellow: false,
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      ...this.state,
      [car]: side,
    });
  }

  render (){
    const valueContext = {
      ...this.state,
      moveCar: this.moveCar,
    };
    return (
      <Mycontext.Provider value={valueContext}>
        <Cars />
      </Mycontext.Provider>
    );
  }
}

export default App;
