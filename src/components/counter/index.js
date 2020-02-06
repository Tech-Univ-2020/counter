import React from 'react';
import './index.css';

export class Counter extends React.Component {
  state = {
    count: 0
  }

  updateCounter = () => {
    for (let i = 0; i < 10; ++i) {

      // console.log(`Iteration ${i}`);
      this.setState({
        count: this.state.count + 1
      })
      console.log(/*`After iteration ${i}`,*/ this.state.count)
    }

    console.log(/*`After iteration ${i}`,*/ this.state.count)
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
      </div>
    );
  }
}
