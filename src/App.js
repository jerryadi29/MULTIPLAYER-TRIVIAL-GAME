import LeaderBoardComponent from './component/leaderboard';
import './App.css';
import { LoginComponent } from './component/login';
import { RegistrationComponent } from './component/registration';

function App() {
  return (
    <div className="App">

      <RegistrationComponent></RegistrationComponent>
        {/* <LoginComponent></LoginComponent> */}
        {/* <LeaderBoardComponent>
        </LeaderBoardComponent> */}
    </div>
  );
}

export default App;
