import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home";
import Update from "./components/Update";
import Employee from "./components/Employess";
function App() {
  return (
    <Router>
      <div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/edit/:id" element={<Update />} />
            <Route path="/departments/:id/employess" element={<Employee />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
