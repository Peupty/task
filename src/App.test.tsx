import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('should render App component', () => {
    render(<App />)
    expect(screen.getByText('Export')).toBeInTheDocument()
});