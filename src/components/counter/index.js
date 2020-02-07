import React from 'react';
import './index.css';

export class Counter extends React.Component {
  state = {
    count: 0
  }

  updateCounter = () => {

    for (let i = 0; i < 10; i = i + 1) {
      this.setState((currentState) => {
        return {
          count: currentState.count + 1
        }
      })
    }
  }

  render() {

    return (
      <div className='container'>
        <div className='value'>
          {this.state.count}
        </div>
        <button
          onClick={this.updateCounter}
          className='update'
        >
          Update times 10
           </button>
      </div>
    );
  }
}
