import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  text-align: left;
  margin: 0 auto;
  padding: 0;
  display: inline-block;
`;

const ListItem = styled.li`
  color: rgb(220, 220, 220);
  padding: 0.25em 0;
`;

const CurrencyName = styled.span`
  font-weight: bold;
  padding-right: 1em;
  display: inline-block;
  width: 3em;
`;

const CurrencyList = ({ data, baseCurrency }) => (
  <List>
    {data.map(({ shortName, value }) => (
      <ListItem key={shortName}>
        <CurrencyName>{shortName}</CurrencyName>
        <span>
          {value} {baseCurrency}
        </span>
      </ListItem>
    ))}
  </List>
);

CurrencyList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      shortName: PropTypes.string,
      value: PropTypes.number,
    })
  ).isRequired,
  baseCurrency: PropTypes.string.isRequired,
};

export default CurrencyList;
