import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import AddUser from "./pages/AddUserPage";
import UsersList from "./pages/UsersListPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFoundPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavbarComponent />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/userslist" element={<UsersList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
