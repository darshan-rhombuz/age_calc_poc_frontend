# Age Calculator

A modern, responsive React component for calculating age with smart input formatting and beautiful UI.

## Features

- **Smart Input Formatting**: Automatically formats dates as you type
- **Multiple Input Formats**: Supports various date input patterns
- **Interactive Calendar**: Click-to-select date picker
- **Debounced Input**: Smooth editing experience with 500ms delay
- **Responsive Design**: Works on all screen sizes
- **Magenta Theme**: Beautiful gradient background
- **Modular Architecture**: Easy to integrate into any React app

## Quick Start

### Installation

```bash
npm install react styled-components prop-types
```

### Usage

#### Full Page Component
```jsx
import { AgeCalculatorPage } from './components/AgeCalculator';

function App() {
  return <AgeCalculatorPage />;
}
```

#### Widget Component
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

## Input Formats Supported

| Input | Output | Description |
|-------|--------|-------------|
| `02011994` | `02/01/1994` | 8-digit format |
| `010194` | `01/01/1994` | 6-digit format (94 → 1994) |
| `010130` | `01/01/2030` | 6-digit format (30 → 2030) |
| `02/01/1994` | `02/01/1994` | Already formatted |
| Sequential typing | Auto-formatted | Type `02`, then `01`, then `1994` |

## Year Conversion Logic

- **Years 00-30**: Converted to 20xx (e.g., `30` → `2030`)
- **Years 31-99**: Converted to 19xx (e.g., `99` → `1999`)

## Components

### AgeCalculatorPage
Full-page component with background and styling.

### AgeCalculatorWidget
Modular component for integration without background.

### Props
- `className` (string): Custom CSS class
- `style` (object): Custom inline styles

## Styling

The component uses styled-components with a comprehensive theme system. Customize by modifying `src/theme/theme.js`.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## License

MIT# age_POC
# age_POC
