import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import AppRouters from './routes';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <AppRouters />
      </BrowserRouter>
    </div>
  );
}

export default App;
