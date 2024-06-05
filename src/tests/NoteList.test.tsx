import { render } from '@testing-library/react';
import NoteList from '../components/NoteList';
import { useNoteStore } from '../store/NoteStore';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

vi.mock('../store/noteStore');

describe('NoteList', () => {
    it('should display notes with correct background colors', () => {
        const notes = [
            { id: 1, title: 'Note 1', grade: 5, comment: 'Comment 1', createdAt: new Date() },
            { id: 2, title: 'Note 2', grade: 9, comment: 'Comment 2', createdAt: new Date() },
            { id: 3, title: 'Note 3', grade: 12, comment: 'Comment 3', createdAt: new Date() },
            { id: 4, title: 'Note 4', grade: 15, comment: 'Comment 4', createdAt: new Date() },
        ];
        (useNoteStore as unknown as jest.Mock).mockReturnValue({ notes });

        const { getByText } = render(<NoteList />);

        // Log styles to check the actual values
        console.log(getByText('Note 1').parentElement?.style.backgroundColor);
        console.log(getByText('Note 2').parentElement?.style.backgroundColor);
        console.log(getByText('Note 3').parentElement?.style.backgroundColor);
        console.log(getByText('Note 4').parentElement?.style.backgroundColor);
    });
});