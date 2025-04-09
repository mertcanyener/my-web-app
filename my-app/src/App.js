import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mertcan Yener
        </p>
        <a
          className="social-link"
          href="https://www.linkedin.com/in/mertcanyener-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedn
        </a>
        <a
          className="social-link"
          href="https://github.com/mertcanyener"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
        className="social-link"
        href="https://medium.com/@mertcanyener00"
        target="_blank"
        rel="noopener noreferrer"
        >
          Medium
        </a>
      </header>
    </div>
  );
}

export default App;
