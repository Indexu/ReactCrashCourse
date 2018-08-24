import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BasicInput from './components/BasicInput/BasicInput';

const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  height: 100%;
  width: 80%;
`;

const Title = styled.h1`
  color: blue;
  text-align: center;
`;

const Paragraph = styled.p`
  color: rgb(20, 20, 20);
  text-align: center;
`;

class App extends React.Component {
  state = {
    content: 'Some content',
  };

  handleOnChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { content } = this.state;
    const { title } = this.props;

    return (
      <Container>
        <Title>{title}</Title>
        <Paragraph>{content}</Paragraph>
        <BasicInput name="content" onChange={this.handleOnChange} value={content} placeholder="Example content..." />
      </Container>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
};
App.defaultProps = {
  title: 'Default Title',
};

export default App;
