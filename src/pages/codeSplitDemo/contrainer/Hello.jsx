import React, { Component } from 'react';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dom: null
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick = () => {
    import('../components/math')
      .then(({ add }) => {
        // Use moduleA
        console.log(add(2, 3))
        this.setState({
          dom: add(2, 3, 23)
        })
      })
      .catch(err => {
        // Handle failure
        console.log(err)
      });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>2 + 3 + 23 =</button>
        <h1>{this.state.dom}</h1>
      </div>
    );
  }
}
export default Hello;