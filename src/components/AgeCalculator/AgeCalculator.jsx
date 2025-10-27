import React, { useState, useRef, useEffect, useCallback } from 'react';
import { calculateAgeFromAPI } from '../../services/ageService';
import Calendar from '../Calendar/Calendar';
import ResultDisplay from '../ResultDisplay/ResultDisplay';
import DateInput from '../DateInput/DateInput';
import {
  CalculatorContainer,
  CalculatorTitle,
  AgeForm,
  FormLabel,
  SubmitBtn,
  ErrorMessage
} from './AgeCalculator.sc';

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [rawInput, setRawInput] = useState('');
  const inputRef = useRef(null);
  const calendarRef = useRef(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target) && 
          inputRef.current && !inputRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    if (showCalendar) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCalendar]);

  // Cleanup debounce timer on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  const formatSlashInput = (value) => {
    const parts = value.split('/');
    if (parts.length !== 3) return value;
    
    const [day, month, year] = parts;
    const paddedDay = day.padStart(2, '0');
    const paddedMonth = month.padStart(2, '0');
    
    let fullYear = year;
    if (year.length === 2) {
      const yearNum = Number.parseInt(year, 10);
      fullYear = yearNum <= 30 ? `20${year}` : `19${year}`;
    }
    
    return `${paddedDay}/${paddedMonth}/${fullYear}`;
  };

  const formatDigitsInput = (digitsOnly) => {
    if (digitsOnly.length === 8) {
      const day = digitsOnly.substring(0, 2);
      const month = digitsOnly.substring(2, 4);
      const year = digitsOnly.substring(4, 8);
      return `${day}/${month}/${year}`;
    }
    
    if (digitsOnly.length === 6) {
      const day = digitsOnly.substring(0, 2);
      const month = digitsOnly.substring(2, 4);
      const year = digitsOnly.substring(4, 6);
      const fullYear = Number.parseInt(year, 10) <= 30 ? `20${year}` : `19${year}`;
      return `${day}/${month}/${fullYear}`;
    }
    
    if (digitsOnly.length === 4) {
      const year = Number.parseInt(digitsOnly, 10);
      if (year >= 1900 && year <= 2100) {
        return digitsOnly;
      }
    }
    
    let formatted = '';
    if (digitsOnly.length >= 1) {
      formatted = digitsOnly.substring(0, 2);
    }
    if (digitsOnly.length >= 3) {
      formatted += '/' + digitsOnly.substring(2, 4);
    }
    if (digitsOnly.length >= 5) {
      formatted += '/' + digitsOnly.substring(4, 8);
    }
    
    return formatted;
  };

  const formatDateInput = (value) => {
    if (value.includes('/')) {
      return formatSlashInput(value);
    }
    
    const digitsOnly = value.replaceAll(/\D/g, '');
    return formatDigitsInput(digitsOnly);
  };

  const debouncedFormatInput = useCallback((value) => {
    const formatted = formatDateInput(value);
    setBirthdate(formatted);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setRawInput(value);
    
    if (error) setError(null);
    if (age) setAge(null);
    
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    
    debounceRef.current = setTimeout(() => {
      debouncedFormatInput(value);
      setRawInput(''); 
    }, 500);
  };

  const isFormValid = () => {
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    return dateRegex.test(birthdate);
  };

  const handleCalendarToggle = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateSelect = (day, month, year) => {
    const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    setBirthdate(formattedDate);
    setRawInput(formattedDate);
    setSelectedDate(new Date(year, month - 1, day));
    setShowCalendar(false);
    
    if (error) setError(null);
    if (age) setAge(null);
  };

  const handleMonthChange = (e) => {
    const month = Number.parseInt(e.target.value, 10);
    setCurrentDate(prev => new Date(prev.getFullYear(), month, 1));
  };

  const handleYearChange = (e) => {
    const year = Number.parseInt(e.target.value, 10);
    setCurrentDate(prev => new Date(year, prev.getMonth(), 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      setError('Please enter a complete date in DD/MM/YYYY format.');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setAge(null);
    
    try {
      const result = await calculateAgeFromAPI(birthdate);
      setAge(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CalculatorContainer>
      <CalculatorTitle>Age Calculator</CalculatorTitle>
      
      <AgeForm onSubmit={handleSubmit}>
        <FormLabel htmlFor="birthdate">
          Enter your birthdate
        </FormLabel>
        
        <div style={{ position: 'relative' }} ref={calendarRef}>
          <DateInput
            value={rawInput || birthdate}
            onChange={handleInputChange}
            onCalendarToggle={handleCalendarToggle}
            inputRef={inputRef}
          />
          
          {showCalendar && (
            <Calendar
              currentDate={currentDate}
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
              onMonthChange={handleMonthChange}
              onYearChange={handleYearChange}
              onClose={() => setShowCalendar(false)}
            />
          )}
        </div>
        
        <SubmitBtn
          type="submit"
          disabled={isLoading || !isFormValid()}
        >
          {isLoading ? 'CALCULATING...' : 'CALCULATE AGE'}
        </SubmitBtn>
      </AgeForm>
      
      {error && (
        <ErrorMessage>
          {error}
        </ErrorMessage>
      )}
      
      <ResultDisplay age={age} />
    </CalculatorContainer>
  );
};

export default AgeCalculator;