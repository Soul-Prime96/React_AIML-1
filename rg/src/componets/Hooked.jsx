import React, { useState, useEffect } from 'react';

const Hooked = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // useEffect for initial data fetching
  useEffect(() => {
    // Simulating an API call
    const fetchData = async () => {
      const mockData = [{ id: 1, name: 'ABCD', email: 'abcd@gmail.com' }];
      setUsers(mockData);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setError('All fields are required!');
      setSuccess(false);
      return;
    }
    setError('');
    setSuccess(true);
    setUsers([...users, { ...formData }]);
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px' }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} /><br/>
        <input name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} /><br/>
        <input name="password" type="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} /><br/>
        <button type="submit">Register</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Registration Successful!</p>}
      
      <h3>Registered Users</h3>
      <ul>
        {users.map((u, i) => <li key={i}>{u.name} - {u.email}</li>)}
      </ul>
    </div>
  );
};

export default Hooked;