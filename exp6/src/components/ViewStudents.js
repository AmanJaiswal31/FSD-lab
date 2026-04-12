import { useEffect, useState } from 'react';

function ViewStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/student/view')
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  const deleteStudent = async (id) => {
    await fetch(`http://localhost:3000/student/delete/${id}`, {
      method: 'DELETE'
    });
    setStudents(students.filter(s => s._id !== id));
  };

  return (
    <div>
      <h3>All Students</h3>
      {students.map(s => (
        <div key={s._id}>
          <b>{s.name}</b> | {s.email} | {s.course}
          <button onClick={() => deleteStudent(s._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ViewStudents;