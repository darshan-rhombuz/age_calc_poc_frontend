import React from 'react';
import { AgeCalculatorPage, AgeCalculatorWidget } from '../components/AgeCalculator';

// Example 1: Full page usage (with background)
export const ExampleFullPage = () => {
  return <AgeCalculatorPage />;
};

// Example 2: Widget usage (custom background)
export const ExampleWidget = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <AgeCalculatorWidget />
    </div>
  );
};

// Example 3: In a form or dashboard
export const ExampleInForm = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>User Profile</h1>
      <div style={{ marginBottom: '20px' }}>
        <h2>Calculate Your Age</h2>
        <AgeCalculatorWidget />
      </div>
      <div>
        <h2>Other Form Fields</h2>
        <input type="text" placeholder="Name" style={{ margin: '10px', padding: '10px' }} />
        <input type="email" placeholder="Email" style={{ margin: '10px', padding: '10px' }} />
      </div>
    </div>
  );
};

// Example 4: With custom styling
export const ExampleCustomStyled = () => {
  return (
    <div style={{
      background: '#f0f0f0',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    }}>
      <AgeCalculatorWidget 
        style={{ 
          transform: 'scale(0.9)',
          margin: '0 auto'
        }}
      />
    </div>
  );
};
