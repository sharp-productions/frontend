import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from "./routes/signup";
import Home from "./routes/home";
import Login from "./routes/login";

const router = createBrowserRouter([
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
