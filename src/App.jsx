import React from 'react';
    import './App.css';

    function App() {
      return (
        <div className="app-container">
          <nav className="navbar">
            <div className="nav-left">
              <span className="logo">Apartments Horvat</span>
            </div>
            <div className="nav-right">
              <a href="/">Home</a>
              <a href="/apartments">Apartments</a>
              <a href="/contact">Contact</a>
            </div>
          </nav>
          <header className="header">
            <h1>Apartments Horvat</h1>
          </header>
        </div>
      );
    }

    export default App;
