import React, { Component } from 'react';
import ExamsList from './Components/ExamsList';
import ExamsForm from './Components/ExamsForm';
import "./App.css"

class App extends Component {
  render() {
    return (
      <div>
        <ExamsForm/>
        <ExamsList/>
      </div>
    );
  }
}

export default App;
