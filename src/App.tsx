import "../node_modules/mini.css/dist/mini-dark.min.css";
import "./App.css";
import ProjectsPage from "./projects/ProjectsPage";
import ProjectPage from "./projects/ProjectPage";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Homepage from "./home/Homepage";

function App() {
  return (
    <Router>
      <header className="sticky">
        <span className="logo">
          <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
        </span>
        <NavLink to="/" className="button rounded">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/projects" className="button rounded">
          Projects
        </NavLink>
      </header>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Homepage />} />
          <Route
            path="/projects"
            element={<ProjectsPage />} />
          <Route
            path="/projects/:id"
            element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
