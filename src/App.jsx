import NavBar from "./components/NavBar" ;
import SignIn from "./components/signin";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import SignUp from "./components/register";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
      <NavBar />
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/register" element={<SignUp/>} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;