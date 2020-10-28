// import logo from './logo.svg';
import './styles.css';
import Profile from './profile/Profile';
import Interest from './interest/Interest';
import Learn from './learn/Learn';
import Expectations from './expetations/Expetations';


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="c1">
          <Profile />
        </div>
        <div className="c2">
          <Interest />
        </div>
        <div className="c3">
          <Learn />
        </div>
      </div>
      <div className="row">
        <div className="c4">
          <Expectations />
        </div>
        <div className="c5"></div>
      </div>
    </div>
  );
}

export default App;
