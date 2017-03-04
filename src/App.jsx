import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'October 1, 2017',
      newDeadline: ''

    }
  }

changeDeadline() {
  this.setState({deadline: this.state.newDeadline});
}
  render() {
    return (
      <div>
        <div className="Header">
          Volkhv. <code className="Right">[demo app = "Odlicznik"]</code>
        </div>
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock
          deadline={this.state.deadline}
        />
        <Form inline>
          <FormControl
            className="Deadline-input"
            placeholder='new date'
            onChange={event => this.setState({newDeadline: event.target.value})}
            />
          <Button onClick={() => this.changeDeadline()}>
            Submit
          </Button>
        </Form>
      </div>
      <div className="Footer">

          <li>Uwaga! Odlicznik działa tylko z datami w formacie amerykańskim: [miesiąc] [dzien], [rok].</li>
          <li>Datę należy podawać w języku angielskim.</li>

      </div>
    </div>


    )
  }
}

export default App;
