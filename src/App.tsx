import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './style.css';

const App = () => {
    return (
        <div className="app-container">
            <h1 className="text-center">Note Management</h1>
            <NoteForm />
            <NoteList />
        </div>
    );
};

export default App;