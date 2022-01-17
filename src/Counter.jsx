import React, { PureComponent } from 'react';

class Counter extends PureComponent {
  state = {
    counter: 0,
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <p>Wartość licznika wynosi: {counter}</p>
        <button onClick={this.asyncIncreaseCounterValue}>
          Pobier asynchroniczne dane
        </button>
      </div>
    );
  }

  asyncIncreaseCounterValue = () => setTimeout(
    () => {
      this.setState(prevState => ({
        counter: prevState.counter + 1,
      }));
    },
    3000
  );
}

export default Counter;