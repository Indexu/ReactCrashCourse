import React, { Component } from 'react';
import './App.css';

import CustomInput from './components/CustomInput';

const generateDummyData = rows => {
  const data = [];

  for (let i = 0; i < rows; i++) {
    data.push({
      id: i,
      value: `Row number ${i}`,
    });
  }

  return data;
};

class App extends Component {
  // Notice we have no constructor

  state = {
    title: 'React patterns and tips',
    subTitle: 'Common methods',
    data: generateDummyData(20),
    titleInputVisible: false,
    subTitleInputVisible: false,
    blueVisible: true,
    dataVisible: false,
  };

  genericHandleOnChange = ({ target: { name, value } }) => {
    // Use parameter object destructuring to extract only event.target.name and event.target.value
    // Assign the state member with the supplied name with the supplied value
    // This depends on the name prop/html attribute of form fields (i.e. <input name="someName" />)
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      title,
      subTitle,
      data,
      titleInputVisible,
      subTitleInputVisible,
      blueVisible,
      dataVisible,
    } = this.state;

    return (
      <div className="App">
        <header>
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
        </header>

        <div>
          <button onClick={() => this.setState({ titleInputVisible: !titleInputVisible })}>
            Toggle title input field
          </button>
          <button onClick={() => this.setState({ subTitleInputVisible: !subTitleInputVisible })}>
            Toggle sub-title input field
          </button>
          <button onClick={() => this.setState({ blueVisible: !blueVisible })}>
            Toggle blue/red
          </button>
          <button onClick={() => this.setState({ dataVisible: !dataVisible })}>Toggle data</button>
        </div>

        <div>
          {titleInputVisible && (
            <CustomInput name="title" value={title} onChange={this.genericHandleOnChange} />
          )}
          {subTitleInputVisible && (
            <CustomInput name="subTitle" value={subTitle} onChange={this.genericHandleOnChange} />
          )}
        </div>

        <div>
          {blueVisible ? (
            <span className="blueText">Blue text!</span>
          ) : (
            <span className="redText">Red text!</span>
          )}
        </div>

        <div>
          {dataVisible && (
            <ul>
              {data.map(({ id, value }) => (
                <li key={id}>{value}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default App;
