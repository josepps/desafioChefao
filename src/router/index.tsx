import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Perfil from '../pages/Perfil';
import Profissional from "../pages/Profissionais"

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
  {
    path: "/vets",
    element: <Profissional />
  },
]);

export default router;