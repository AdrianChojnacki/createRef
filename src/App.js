import React, { createRef, PureComponent } from 'react';

import './App.css';

class App extends PureComponent {
  textInput = createRef();
  paragraphElement = createRef();

  render() {
    console.log(this.textInput);
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
      </div>
    );
  }

  focusTextInput = () => this.textInput.current.focus();
  addChar = () => this.paragraphElement.current.textContent += '!';
}

export default App;
