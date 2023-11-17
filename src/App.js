import './App.css';
import RoutesComponent from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
import { FeedBackContextProvider } from './context/feedbackProvider'
import { GameContextProvider } from './context/gameProvider';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <GameContextProvider>
          <FeedBackContextProvider>
            <RoutesComponent></RoutesComponent>
          </FeedBackContextProvider>
          </GameContextProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
