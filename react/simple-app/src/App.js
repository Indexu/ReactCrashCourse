import React from 'react';
import './App.css';

import MyComponent from './components/my-component/MyComponent';
import MyStatelessComponent from './components/my-stateless-component/MyStatelessComponent';

class App extends React.Component {
  constructor() {
    super();

    // Initial state
    this.state = {
      title: 'A very simple React app',
      placeholder: 'Write something',
      number: 5,
    };
  }

  handleOnChange = ({ target: { name, value } }) => {
    // State is immutable
    // Use setState to alter the state, causing the React lifecycle to kick in
    // Note: setState is asynchronous, doesn't happen immediately, but looks like it
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { title, placeholder, number } = this.state;
    return (
      <div className="App">
        <header>
          <h1>{title}</h1>
        </header>
        <MyComponent placeholder={placeholder} />
        <MyStatelessComponent number={number} />
      </div>
    );
  }
}

export default App;

/*
 * React lifecycle (http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
 *  - Mounting
 *    - constructor
 *    - getDerivedStateFromProps (uncommon use case)
 *    - render
 *    - componentDidMount
 *  - Updating
 *    - getDerivedStateFromProps (uncommon use case)
 *    - shouldComponentUpdate (not run when forceUpdate() is called)
 *    - getSnapshotBeforeUpdate (very rare use case)
 *    - render
 *    - componentDidUpdate
 *  - Unmounting
 *    - componentWillUnmount
 */
