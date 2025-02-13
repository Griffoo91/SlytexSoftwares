import NavBar from "./components/NavBar" ;
import SignIn from "./components/signin";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import SignUp from "./components/register";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/register" element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;