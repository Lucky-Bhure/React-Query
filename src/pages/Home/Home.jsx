import React from 'react'
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <div style={styles.container}>
        <h1 style={styles.title}>Welcome to TanStack!</h1>
        <p style={styles.description}>
          TanStack provides you with the best tools for building modern, responsive, and feature-rich web applications.
        </p>
        <NavLink to={"https://tanstack.com/query/latest"} target="_blank">
        <button style={styles.button}>Explore</button>
        </NavLink>
      </div>
    </main>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '70vh',
    padding: '20px',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: '1.2rem',
    color: '#666',
    textAlign: 'center',
    maxWidth: '600px',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Home