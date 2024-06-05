import { useNoteStore } from '../store/NoteStore';

const NoteList = () => {
    const { notes } = useNoteStore();

    const getBackgroundColorClass = (grade: number) => {
        if (grade < 8) return 'note-red';
        if (grade < 10) return 'note-orange';
        if (grade < 13) return 'note-yellow';
        return 'note-green';
    };

    return (
        <div className="note-list">
            {notes.map(note => (
                <div
                    key={note.id}
                    className={`note-item ${getBackgroundColorClass(note.grade)}`}
                >
                    <h3>{note.title}</h3>
                    <p>{note.createdAt.toLocaleDateString()}</p>
                    <p>Note: {note.grade}/20</p>
                    <p>{note.comment.slice(0, 20)}...</p>
                </div>
            ))}
        </div>
    );
};

export default NoteList;