import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import AgeCalculator from './AgeCalculator';
import { theme } from '../../theme/theme';

// Minimal global styles for the component
const ComponentGlobalStyle = createGlobalStyle`
  .age-calculator-wrapper * {
    box-sizing: border-box;
  }
`;

// Wrapper for easy integration
const AgeCalculatorWrapper = styled.div`
  &.age-calculator-wrapper {
    font-family: ${theme.typography.fontFamily};
    background: ${theme.colors.background.main};
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing.lg};
    
    @media (max-width: ${theme.breakpoints.sm}) {
      padding: ${theme.spacing.sm};
    }
  }
`;

// Full page component with background
const AgeCalculatorPage = ({ className = '', style = {} }) => {
  return (
    <>
      <ComponentGlobalStyle />
      <AgeCalculatorWrapper className={`age-calculator-wrapper ${className}`} style={style}>
        <AgeCalculator />
      </AgeCalculatorWrapper>
    </>
  );
};

AgeCalculatorPage.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

// Component for integration (no background, no wrapper)
const AgeCalculatorWidget = ({ className = '', style = {} }) => {
  return (
    <div className={className} style={style}>
      <AgeCalculator />
    </div>
  );
};

AgeCalculatorWidget.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

export { AgeCalculatorPage, AgeCalculatorWidget };
export default AgeCalculatorPage;
