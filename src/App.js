import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  Cases,
  Clients,
  Docket,
  Finances,
  Home,
  Login,
  Signup,
  Terms
} from "./routes";

const router = createBrowserRouter([
  {
    path: "/cases",
    element: <Cases />
  },
  {
    path: "/clients",
    element: <Clients />
  },
  {
    path: "/docket",
    element: <Docket />
  },
  {
    path: "/finances",
    element: <Finances />
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/terms",
    element: <Terms />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
