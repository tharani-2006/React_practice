import React, { useState } from 'react';

const Form = () => {
  const [form, setForm] = useState({ name: '', email: '' });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email) {
      setError("All fields are required!");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Invalid email format!");
      return;
    }
    setError("");
    alert(`Form submitted: ${form.name}, ${form.email}`);
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" // required for dynamic update
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <input 
          type="email" 
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <button type="submit">Submit</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Form;
