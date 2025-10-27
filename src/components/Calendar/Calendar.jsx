import React from 'react';
import PropTypes from 'prop-types';
import {
  CalendarContainer,
  CalendarHeader,
  CalendarTitle,
  MonthSelect,
  YearSelect,
  CalendarNavButton,
  CalendarGrid,
  CalendarDay,
  CalendarWeekday
} from '../AgeCalculator/AgeCalculator.sc';

const Calendar = ({
  currentDate,
  selectedDate,
  onDateSelect,
  onMonthChange,
  onYearChange,
  onClose
}) => {
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const today = new Date();
    
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    // Add weekday headers
    for (const day of weekdays) {
      days.push(
        <CalendarWeekday key={day}>{day}</CalendarWeekday>
      );
    }
    
    // Generate calendar days
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const isCurrentMonth = date.getMonth() === month;
      const isToday = date.toDateString() === today.toDateString();
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
      
      const dayClasses = [];
      if (!isCurrentMonth) dayClasses.push('other-month');
      if (isToday) dayClasses.push('today');
      if (isSelected) dayClasses.push('selected');
      
      days.push(
        <CalendarDay
          key={i}
          className={dayClasses.join(' ')}
          onClick={() => {
            if (isCurrentMonth) {
              onDateSelect(date.getDate(), date.getMonth() + 1, date.getFullYear());
            }
          }}
        >
          {date.getDate()}
        </CalendarDay>
      );
    }
    
    return days;
  };

  const generateMonthOptions = () => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    return months.map((month) => (
      <option key={month} value={months.indexOf(month)}>
        {month}
      </option>
    ));
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    
    // Generate years from 1900 to current year + 10
    for (let year = 1900; year <= currentYear + 10; year++) {
      years.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    
    return years;
  };

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          <MonthSelect 
            value={currentDate.getMonth()} 
            onChange={onMonthChange}
          >
            {generateMonthOptions()}
          </MonthSelect>
          <YearSelect 
            value={currentDate.getFullYear()} 
            onChange={onYearChange}
          >
            {generateYearOptions()}
          </YearSelect>
        </CalendarTitle>
        <CalendarNavButton onClick={onClose}>
          ✕
        </CalendarNavButton>
      </CalendarHeader>
      <CalendarGrid>
        {generateCalendarDays()}
      </CalendarGrid>
    </CalendarContainer>
  );
};

Calendar.propTypes = {
  currentDate: PropTypes.instanceOf(Date).isRequired,
  selectedDate: PropTypes.instanceOf(Date),
  onDateSelect: PropTypes.func.isRequired,
  onMonthChange: PropTypes.func.isRequired,
  onYearChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Calendar;
