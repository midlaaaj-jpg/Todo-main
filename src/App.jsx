import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";
import Logout from "./components/Logout";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
    </>
  );
}

export default App;