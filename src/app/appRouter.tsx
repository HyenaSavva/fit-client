import { Navigate, createBrowserRouter, useLocation } from "react-router-dom";
import { baseLayout } from "./layouts/baseLayout";
import { Dashboard } from "pages/dashboard";
import { useAuth } from "entities/session";
import { Settings } from "pages/settings";
import { Calendar } from "pages/calendar";
import { FC, ReactElement } from "react";
import { Profile } from "pages/profile";
import { CardsPage } from "pages/cards";
import { AuthPage } from "pages/auth";
import { EditPage } from "pages/edit";

type GuardGuestProps = {
  children: ReactElement;
};

const GuardGuest: FC<GuardGuestProps> = ({ children }) => {
  const location = useLocation();
  const user = useAuth();

  if (!user) return <Navigate to="/login" state={{ from: location }} />;
  return children;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: baseLayout,
    errorElement: <>404</>,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      {
        path: "login",
        element: <AuthPage />,
      },
      {
        path: "cards",
        element: (
          <GuardGuest>
            <CardsPage />
          </GuardGuest>
        ),
      },
      {
        path: "profile",
        element: (
          <GuardGuest>
            <Profile />
          </GuardGuest>
        ),
      },
      {
        path: "edit",
        element: (
          <GuardGuest>
            <EditPage />
          </GuardGuest>
        ),
      },
      {
        path: "calendar",
        element: (
          <GuardGuest>
            <Calendar />
          </GuardGuest>
        ),
      },
      {
        path: "settings",
        element: (
          <GuardGuest>
            <Settings />
          </GuardGuest>
        ),
      },
    ],
  },
]);
