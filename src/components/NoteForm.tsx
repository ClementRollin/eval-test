import React, { useState } from 'react';
import { useNoteStore } from '../store/NoteStore';

const NoteForm = () => {
    const { addNote } = useNoteStore();
    const [title, setTitle] = useState('');
    const [grade, setGrade] = useState<number | string>('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addNote(title, parseFloat(grade as string), comment);
        setTitle('');
        setGrade('');
        setComment('');
    };

    return (
        <form onSubmit={handleSubmit} className="note-form">
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
            />
            <input
                type="number"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                placeholder="Grade"
                required
            />
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Comment"
                required
            />
            <button type="submit">Add Note</button>
        </form>
    );
};

export default NoteForm;