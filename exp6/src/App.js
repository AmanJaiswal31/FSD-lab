import AddStudent from './components/AddStudent';
import ViewStudents from './components/ViewStudents';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Student Portfolio</h1>
      <AddStudent />
      <hr />
      <ViewStudents />
    </div>
  );
}

export default App;