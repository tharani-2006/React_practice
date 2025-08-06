import React, { useState, useEffect } from 'react';

function TimerApp() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval); // 🧹 Cleanup
    };
  }, [running]); 
  return (
    <div style={styles.container}>
      <h1 style={styles.timer}>⏱️ Timer: {seconds} seconds</h1>
      <button onClick={() => setRunning(!running)} style={styles.button}>
        {running ? '⏸ Pause' : '▶️ Resume'}
      </button>
      <button onClick={() => { setSeconds(0); setRunning(false); }} style={styles.reset}>
        🔄 Reset
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial',
  },
  timer: {
    fontSize: '2rem',
    color: '#333',
  },
  button: {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  reset: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  }
};

export default TimerApp;
