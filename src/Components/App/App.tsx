import { BrowserRouter } from 'react-router-dom';
import Router from '../Router/Router';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
