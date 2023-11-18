import './App.css';
import PersonList from './components/PersonList';

function App() {
  return (
      <div>
          <table>
              <h1 style={{ backgroundColor: 'green', textAlign: 'center' }}>User List</h1>
              <PersonList />
          </table>
          
    </div>
  );
}

export default App;
