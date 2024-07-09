//external
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
//internal
import "./index.css";
import "./output.css";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Restaurants from "./pages/Restaurants";
import store from "./state/store";

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
  root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
