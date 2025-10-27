import styled from 'styled-components';
import { theme } from '../../theme/theme';

// Main Container - Smaller and more modular
export const CalculatorContainer = styled.div`
  background: ${theme.colors.background.card};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.colors.shadow.lg};
  width: 100%;
  max-width: 500px;
  padding: ${theme.spacing.xl};
  margin: 0 auto;
  font-family: ${theme.typography.fontFamily};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: auto;

  @media (max-width: ${theme.breakpoints.sm}) {
    margin: ${theme.spacing.sm};
    padding: ${theme.spacing.lg};
    max-width: 100%;
  }
`;

export const CalculatorTitle = styled.h1`
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: ${theme.spacing['2xl']};
  line-height: 1.2;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`;

// Form Styles
export const AgeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`;

export const FormLabel = styled.label`
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  text-transform: uppercase;
  color: ${theme.colors.text.secondary};
  letter-spacing: 0.05em;
  margin-bottom: ${theme.spacing.sm};
`;

// Input Styles
export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const BirthdateInput = styled.input`
  width: 100%;
  padding: ${theme.spacing.md} ${theme.spacing['2xl']} ${theme.spacing.md} ${theme.spacing.md};
  border: 2px solid ${theme.colors.border.default};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;
  background: ${theme.colors.background.input};

  &:focus {
    outline: none;
    border-color: ${theme.colors.border.focus};
    box-shadow: 0 0 0 3px ${theme.colors.primary}20;
  }

  &::placeholder {
    color: ${theme.colors.text.light};
  }
`;

export const CalendarIcon = styled.button`
  position: absolute;
  right: ${theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: ${theme.colors.text.secondary};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${theme.colors.primary};
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

// Calendar Styles
export const CalendarContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${theme.colors.background.card};
  border: 2px solid ${theme.colors.border.default};
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.colors.shadow.lg};
  z-index: 10;
  margin-top: ${theme.spacing.xs};
  padding: ${theme.spacing.lg};
  min-width: 300px;

  @media (max-width: ${theme.breakpoints.sm}) {
    min-width: 280px;
  }
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.lg};
  gap: ${theme.spacing.lg};
`;

export const CalendarTitle = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  align-items: center;
`;

export const MonthSelect = styled.select`
  border: 1px solid ${theme.colors.border.default};
  border-radius: ${theme.borderRadius.sm};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  font-size: ${theme.typography.fontSize.sm};
  background: ${theme.colors.background.card};
  cursor: pointer;
  color: ${theme.colors.text.primary};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.border.focus};
  }
`;

export const YearSelect = styled.select`
  border: 1px solid ${theme.colors.border.default};
  border-radius: ${theme.borderRadius.sm};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  font-size: ${theme.typography.fontSize.sm};
  background: ${theme.colors.background.card};
  cursor: pointer;
  color: ${theme.colors.text.primary};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.border.focus};
  }
`;

export const CalendarNavButton = styled.button`
  background: ${theme.colors.background.input};
  border: 1px solid ${theme.colors.border.default};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.fontSize.base};
  cursor: pointer;
  color: ${theme.colors.text.primary};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  min-width: 32px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${theme.colors.border.default};
    color: ${theme.colors.primary};
  }
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${theme.spacing.xs};
`;

export const CalendarDay = styled.button`
  background: none;
  border: none;
  padding: ${theme.spacing.sm};
  cursor: pointer;
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.primary};
  min-height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${theme.colors.background.input};
  }

  &.selected {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.text.white};
  }

  &.other-month {
    color: ${theme.colors.text.light};
  }

  &.today {
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.primary};
    background-color: ${theme.colors.primary}20;
  }
`;

export const CalendarWeekday = styled.div`
  text-align: center;
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.secondary};
  padding: ${theme.spacing.sm} ${theme.spacing.xs};
  min-height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Button Styles
export const SubmitBtn = styled.button`
  width: 100%;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
  color: ${theme.colors.text.white};
  font-weight: ${theme.typography.fontWeight.bold};
  font-size: ${theme.typography.fontSize.base};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border: none;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: ${theme.colors.shadow.sm};

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: ${theme.colors.shadow.md};
  }

  &:disabled {
    background: ${theme.colors.text.light};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

// Result Styles
export const ResultDisplay = styled.div`
  border-top: 1px solid ${theme.colors.border.default};
  padding-top: ${theme.spacing.lg};
  margin-top: ${theme.spacing.lg};
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.md};
  }
`;

export const ResultItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ResultNumber = styled.p`
  font-size: ${theme.typography.fontSize['5xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin: 0;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.typography.fontSize['4xl']};
  }
`;

export const ResultLabel = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.secondary};
  margin: ${theme.spacing.xs} 0 0 0;
  font-weight: ${theme.typography.fontWeight.medium};
`;

// Error Styles
export const ErrorMessage = styled.div`
  background-color: ${theme.colors.background.error};
  border: 1px solid ${theme.colors.border.error};
  color: ${theme.colors.text.error};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.sm};
  margin-top: ${theme.spacing.lg};
  text-align: center;
`;
