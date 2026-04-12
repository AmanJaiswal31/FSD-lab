import { useState } from 'react';

function AddStudent() {
  const [form, setForm] = useState({ name: '', email: '', course: '' });

  const handleSubmit = async () => {
    await fetch('http://localhost:3000/student/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    alert('Student Added!');
    setForm({ name: '', email: '', course: '' });
  };

  return (
    <div>
      <h3>Add Student</h3>
      <input placeholder="Name" value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })} /><br/>
      <input placeholder="Email" value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })} /><br/>
      <input placeholder="Course" value={form.course}
        onChange={e => setForm({ ...form, course: e.target.value })} /><br/>
      <button onClick={handleSubmit}>Add Student</button>
    </div>
  );
}

export default AddStudent;