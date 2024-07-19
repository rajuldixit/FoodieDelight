//external
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { lazy } from "react";
//internal
import "./index.css";
import "./output.css";
import App from "./App";
import Dashboard from "pages/Dashboard";
import Restaurants from "pages/Restaurants";
import store from "state/store";
import SignIn from "pages/SignIn";
import { AuthProvider } from "context/AuthContext";
import ProtectedRoute from "pages/ProtectedRoute";
// const Report = lazy(() => import("pages/Report"));
import Report from "pages/Report";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/restaurants", element: <Restaurants /> },
      {
        path: "/report",
        element: (
          <ProtectedRoute>
            <Report />
          </ProtectedRoute>
        )
      }
    ]
  },
  {
    path: "/signin",
    element: <SignIn />
  }
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
if (root) {
  root.render(
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  );
}
