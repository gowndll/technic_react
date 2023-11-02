import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" Component={RedPage} />
        <Route path="/blue" Component={BluePage} />
      </Routes>
    </div>
  );
}

export default App;
