import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Perfil from '../pages/Perfil';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/perfil/:id",
    element: <Perfil />
  },
]);

export default router;