import React from 'react';
import { useNoteStore } from '../store/NoteStore';

interface NoteDetailProps {
    noteId: number;
}

const NoteDetail: React.FC<NoteDetailProps> = ({ noteId }) => {
    const { notes } = useNoteStore();
    const note = notes.find(n => n.id === noteId);

    if (!note) return <p>Note not found</p>;

    return (
        <div className="note-detail">
            <h2>{note.title}</h2>
            <p>Date: {note.createdAt.toLocaleDateString()}</p>
            <p>Grade: {note.grade}/20</p>
            <p>Comment: {note.comment}</p>
        </div>
    );
};

export default NoteDetail;