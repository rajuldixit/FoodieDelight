import ReactDOM from "react-dom/client";
import "./index.css";
import "./output.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Restaurants from "./pages/Restaurants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/restaurants", element: <Restaurants /> }
    ]
  }
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
if (root) {
  root.render(<RouterProvider router={router} />);
}
