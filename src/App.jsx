import NavBar from './components/NavBar';
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      
      <div className="container mt-4">
        <h1>Bem-vindo à Loja!</h1>
        <p>Explore nossas categorias e produtos incríveis.</p>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
