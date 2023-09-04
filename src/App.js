import './App.css';
import NavigationComponent from './routes/Navigation';
import RoutesComponent from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesComponent></RoutesComponent>
      </BrowserRouter>

    </div>
  );
}

export default App;
