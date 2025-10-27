import React from 'react';
import PropTypes from 'prop-types';
import {
  InputWrapper,
  BirthdateInput,
  CalendarIcon
} from '../AgeCalculator/AgeCalculator.sc';

const DateInput = ({
  value,
  onChange,
  onCalendarToggle,
  inputRef
}) => {
  return (
    <InputWrapper>
      <BirthdateInput
        ref={inputRef}
        id="birthdate"
        type="text"
        placeholder="DD/MM/YYYY"
        value={value}
        onChange={onChange}
        maxLength="12"
      />
      <CalendarIcon
        type="button"
        onClick={onCalendarToggle}
        aria-label="Open calendar"
      >
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </CalendarIcon>
    </InputWrapper>
  );
};

DateInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onCalendarToggle: PropTypes.func.isRequired,
  inputRef: PropTypes.object
};

export default DateInput;
