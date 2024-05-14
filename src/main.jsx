import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Cart from "./Components/Cart/Cart";
import PlaceDetails from "./Components/PlaceDetails/PlaceDetails";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import AuthProvider from "./Providers/AuthProvider";
import PrivateRoute from "./Components/Routes/PrivateRoute";
import CartsProvider from "./Providers/CartsProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/cart",
        loader: () => fetch("../places.json"),
        element: (
          <PrivateRoute>
            <CartsProvider>
              <Cart></Cart>
            </CartsProvider>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/place/:userID",
        loader: () => fetch("../places.json"),
        element: (
          <PrivateRoute>
            <CartsProvider>
              <PlaceDetails></PlaceDetails>
            </CartsProvider>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
