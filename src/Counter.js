import { Component } from 'react';


export default class Counter extends Component {

  state = {
    counter: 0,
    name: 'Joe'
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  handleInputChange = ({ target }) => {
    this.setState({
      name: target.value
    });
  };

  render() {
    const { counter, name } = this.state;

    return (
      <div className="Counter">

        <p>Count is: {counter}</p>

        <p><button onClick={this.handleClick}>+</button></p>

        <p><input value={name} onChange={this.handleInputChange} /></p>

        <p>Hello {name}!</p>
      </div >
    );
  };
}