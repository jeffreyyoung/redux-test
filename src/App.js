import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import model from './redux/model';

export default connect(state => {
  return {
    ...state,
    actions: model.actions
  }
})(class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <button onClick={() => console.log('hi') || this.props.actions.todos.loadTodos()}>Load todos</button>
        <p>{this.props.todos.todos.join(', ')}</p>
        {this.props.todos.loading && <h1>loading</h1>}
      </div>
    );
  }
});

