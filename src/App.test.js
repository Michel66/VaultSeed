// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders VaultSeed title', () => {
    render(<App />);
    const titleElement = screen.getByText(/VaultSeed/i);
    expect(titleElement).toBeInTheDocument();
});
