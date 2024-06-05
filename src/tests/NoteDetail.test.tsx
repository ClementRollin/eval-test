import { render, screen } from '@testing-library/react';
import NoteDetail from '../components/NoteDetail';
import { useNoteStore } from '../store/NoteStore';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

vi.mock('../store/noteStore');

const mockNote = {
    id: 1,
    title: 'Test Note',
    grade: 15,
    comment: 'This is a test comment',
    createdAt: new Date('2023-01-01T00:00:00')
};

describe('NoteDetail', () => {
    beforeEach(() => {
        (useNoteStore as unknown as jest.Mock).mockReturnValue({
            notes: [mockNote]
        });
    });

    it('renders the details of a note', () => {
        render(<NoteDetail noteId={1} />);

        expect(screen.getByText(/test note/i)).toBeInTheDocument();

        // Adjust the expected date format to match the actual rendered format
        expect(screen.getByText(/01\/01\/2023/i)).toBeInTheDocument();

        expect(screen.getByText(/15\/20/i)).toBeInTheDocument();
        expect(screen.getByText(/this is a test comment/i)).toBeInTheDocument();
    });

    it('shows "Note not found" if noteId does not exist', () => {
        render(<NoteDetail noteId={999} />);

        expect(screen.getByText(/note not found/i)).toBeInTheDocument();
    });
});