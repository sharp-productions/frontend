import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Docket from "./routes/docket";
import Home from "./routes/home";
import Login from "./routes/login";
import Signup from "./routes/signup";

const router = createBrowserRouter([
  {
    path: "/docket",
    element: <Docket />
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
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
