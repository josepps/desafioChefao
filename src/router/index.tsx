import { createBrowserRouter } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Perfil from '../pages/Perfil';
import Profissional from "../pages/ProfissionaisVets"

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
    path: "/vets/:id",
    element: <Perfil />
  },
  {
    path: "/vets",
    element: <Profissional />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },
]);

export default router;