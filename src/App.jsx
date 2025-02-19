import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import ProtectedRoute from "./Components/ProtectedRoutes"; 
import UserProfile from "./Components/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />, 
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    element: <ProtectedRoute />,  
    children: [
      {
        path: "/userProfile",
        element: <UserProfile />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default App;
