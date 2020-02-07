import React from 'react';
import './index.css';

export class Counter extends React.Component {
  state = {
    count: 0,
  }

  updateCounter = () => {
    this.setState((currentState) => {
      return {
        count: currentState.count + 1
      }
    })
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
          Update
           </button>
        {
          this.state.count === 3 &&
          <div class='party'>Yeah, it's a party!</div>
        }
      </div>
    );
  }
}
