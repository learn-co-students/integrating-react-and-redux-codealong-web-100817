import React, { Component } from 'react';
import Counter from './components/Counter';
// import changeCount from './reducers/changeCount';
// import createStore from './createStore';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter store={this.props.store} />
      </div>
    );
  }
}

export default App;
