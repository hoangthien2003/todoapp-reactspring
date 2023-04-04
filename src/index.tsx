import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Login from "./screens/Login";
import store from "./redux/store";
import Signup from "./screens/Signup";
import SignUpEmail from "./components/SignUp/SignUpEmail";
import Detail from "./components/SignUp/Detail";
import ProjName from "./components/Setup/ProjName";
import UploadAvatar from "./components/Setup/UploadAvatar";
import MembersQuantity from "./components/Setup/MembersQuantity";
import VerifyMail from "./components/SignUp/VerifyMail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
    children: [
      {
        index: true,
        element: <SignUpEmail />,
      },
      {
        path: "/sign-up/verify-mail",
        element: <VerifyMail />,
      },
      {
        path: "/sign-up/detail",
        element: <Detail />,
      },
      {
        path: "/sign-up/proj-name",
        element: <ProjName />,
      },
      {
        path: "/sign-up/avatar",
        element: <UploadAvatar />,
      },
      {
        path: "/sign-up/members-quantity",
        element: <MembersQuantity />,
      },
    ],
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
