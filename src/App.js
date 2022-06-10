import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./components/pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/users/:userId" element={<User />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
