import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from  './pages/home/Home'
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/register" element={ <Register /> }/>
        <Route path="/" element={ <Home /> }/>
        <Route path="/profile" element={ <Profile /> }/>
      </Routes>
    </Router>
  )

}

export default App;
