import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import LeaderBoard from "./screens/Leaderboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<><LoginScreen/></>}/>
          <Route exact path="/leaderboard" element={<><LeaderBoard/></>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
