import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import SquareComponent from './SquareComponent';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="app-header">
        <p className="heading-text">Reac Tic Tac</p>
        <div className="row jc-center">
          <SquareComponent className="b-bottom-right" />
          <SquareComponent className="b-bottom-right" />
          <SquareComponent className="b-bottom" />
        </div>
        <div className="row jc-center">
          <SquareComponent className="b-bottom-right" />
          <SquareComponent className="b-bottom-right" />
          <SquareComponent className="b-bottom" />
        </div>
        <div className="row jc-center">
          <SquareComponent className="b-right" />
          <SquareComponent className="b-right" />
          <SquareComponent className="b-right" />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
