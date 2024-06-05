import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

describe('App', () => {
    it('renders the App component', () => {
        render(<App />);

        // Check if the main title is present
        expect(screen.getByText(/note management/i)).toBeInTheDocument();

        // Check if the NoteForm is rendered
        expect(screen.getByPlaceholderText(/title/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/grade/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/comment/i)).toBeInTheDocument();
    });
});