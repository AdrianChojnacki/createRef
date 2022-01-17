import React, { createRef, PureComponent } from 'react';

import Counter from './Counter';

import './App.css';

class App extends PureComponent {
  state = {
    isCounterVisible: true,
  }

  textInput = createRef();
  paragraphElement = createRef();

  render() {
    const counterElement = this.state.isCounterVisible
      ? <Counter />
      :null;
  
    return (
      <div>
        <input
          ref={this.textInput}
          type="text"
        />
        <p ref={this.paragraphElement}>
          Hello
        </p>
        <button onClick={this.focusTextInput}>
          Ustaw focus na input
        </button>
        <button onClick={this.addChar}>
          Dodaj wykrzyknik
        </button>
        <button onClick={this.toggleVisibilityCounter}>
          Pokaż/Ukryj Counter
        </button>
        {counterElement}
      </div>
    );
  }

  focusTextInput = () => this.textInput.current.focus();
  addChar = () => this.paragraphElement.current.textContent += '!';

  toggleVisibilityCounter = () => this.setState(prevState => ({
    isCounterVisible: !prevState.isCounterVisible,
  }));
}

export default App;
