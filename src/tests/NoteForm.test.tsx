import { render, fireEvent } from '@testing-library/react';
import NoteForm from '../components/NoteForm';
import { useNoteStore } from '../store/NoteStore';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

vi.mock('../store/noteStore');

describe('NoteForm', () => {
    it('should add a note', () => {
        const addNote = vi.fn();
        (useNoteStore as unknown as jest.Mock).mockReturnValue({ addNote });

        const { getByPlaceholderText, getByText } = render(<NoteForm />);

        fireEvent.change(getByPlaceholderText('Title'), { target: { value: 'Test Note' } });
        fireEvent.change(getByPlaceholderText('Grade'), { target: { value: '15' } });
        fireEvent.change(getByPlaceholderText('Comment'), { target: { value: 'This is a test comment' } });

        fireEvent.click(getByText('Add Note'));

        expect(addNote).toHaveBeenCalledWith('Test Note', 15, 'This is a test comment');
    });
});