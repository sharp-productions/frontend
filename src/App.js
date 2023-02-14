import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from "./routes/signup";
import Home from "./routes/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/signup",
    element: <Signup />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
