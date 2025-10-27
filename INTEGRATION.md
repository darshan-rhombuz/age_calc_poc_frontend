# Age Calculator - Integration Guide

This Age Calculator component is designed to be easily integrated into any React application.

## Quick Integration

### Option 1: Full Page Component (with background)
```jsx
import { AgeCalculatorPage } from './components/AgeCalculator';

function App() {
  return <AgeCalculatorPage />;
}
```

### Option 2: Widget Component (no background)
```jsx
import { AgeCalculatorWidget } from './components/AgeCalculator';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <AgeCalculatorWidget />
    </div>
  );
}
```

### Option 3: Custom Styling
```jsx
import { AgeCalculatorWidget } from './components/AgeCalculator';

function App() {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #D946EF 0%, #EC4899 50%, #F59E0B 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <AgeCalculatorWidget />
    </div>
  );
}
```

## Features

- ✅ **Smart Input Formatting**: Handles multiple input formats
  - `02011994` → `02 / 01 / 1994`
  - `010194` → `01 / 01 / 2094`
  - Sequential typing: `02` → `02 / ` → `02 / 01 / ` → `02 / 01 / 1994`

- ✅ **Interactive Calendar**: Click calendar icon for date picker
- ✅ **Debounced Input**: 500ms delay for smooth editing
- ✅ **Responsive Design**: Works on all screen sizes
- ✅ **Magenta Theme**: Beautiful gradient background
- ✅ **Modular Architecture**: Easy to customize and integrate

## Input Formats Supported

1. **8-digit format**: `02011994` → `02 / 01 / 1994`
2. **6-digit format**: `010194` → `01 / 01 / 2094`
3. **Sequential typing**: Type `02`, then `01`, then `1994`
4. **Calendar picker**: Click the calendar icon

## Styling

The component uses styled-components and can be customized by:
1. Modifying the theme in `src/theme/theme.js`
2. Overriding styles with CSS-in-JS
3. Using the modular version for custom backgrounds

## Dependencies

- React 18+
- styled-components 6+
- prop-types (for development)

## File Structure

```
src/
├── components/
│   ├── AgeCalculator/
│   │   ├── AgeCalculator.jsx (Main component)
│   │   ├── AgeCalculator.styles.js (Styled components)
│   │   ├── AgeCalculatorWrapper.jsx (Integration wrappers)
│   │   └── index.js (Exports)
│   ├── Calendar/ (Calendar picker)
│   ├── DateInput/ (Input field)
│   └── ResultDisplay/ (Results display)
├── services/
│   └── ageService.js (Age calculation logic)
└── theme/
    └── theme.js (Global theme)
```
