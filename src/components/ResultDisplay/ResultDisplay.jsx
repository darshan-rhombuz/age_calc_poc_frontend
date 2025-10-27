import React from 'react';
import PropTypes from 'prop-types';
import {
  ResultDisplay as StyledResultDisplay,
  ResultItem,
  ResultNumber,
  ResultLabel
} from '../AgeCalculator/AgeCalculator.sc';

const ResultDisplay = ({ age }) => {
  if (!age) return null;

  return (
    <StyledResultDisplay>
      <ResultItem>
        <ResultNumber>{age.years}</ResultNumber>
        <ResultLabel>Years</ResultLabel>
      </ResultItem>
      <ResultItem>
        <ResultNumber>{age.months}</ResultNumber>
        <ResultLabel>Months</ResultLabel>
      </ResultItem>
      <ResultItem>
        <ResultNumber>{age.days}</ResultNumber>
        <ResultLabel>Days</ResultLabel>
      </ResultItem>
    </StyledResultDisplay>
  );
};

ResultDisplay.propTypes = {
  age: PropTypes.shape({
    years: PropTypes.number,
    months: PropTypes.number,
    days: PropTypes.number
  })
};

export default ResultDisplay;
