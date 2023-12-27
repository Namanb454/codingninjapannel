import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import Events from "./pages/Events";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>
        <Route path="/events" element={<PrivateRoute />}>
          <Route path="" element={<Events />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
