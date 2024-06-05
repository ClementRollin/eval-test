import { create } from 'zustand';

interface Note {
    id: number;
    title: string;
    grade: number;
    comment: string;
    createdAt: Date;
}

interface NoteStore {
    notes: Note[];
    addNote: (title: string, grade: number, comment: string) => void;
    updateNote: (id: number, title: string, grade: number, comment: string) => void;
    deleteNote: (id: number) => void;
}

export const useNoteStore = create<NoteStore>((set) => ({
    notes: [],
    addNote: (title, grade, comment) =>
        set((state) => ({
            notes: [
                ...state.notes,
                { id: Date.now(), title, grade, comment, createdAt: new Date() }
            ],
        })),
    updateNote: (id, title, grade, comment) =>
        set((state) => ({
            notes: state.notes.map(note =>
                note.id === id ? { ...note, title, grade, comment } : note
            ),
        })),
    deleteNote: (id) =>
        set((state) => ({
            notes: state.notes.filter(note => note.id !== id),
        })),
}));