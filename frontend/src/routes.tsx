import AuthContextProvider from "./components/AuthContextProvider";
import AuthenticationPage from "./pages/AuthenticationPage";

import CardsPage from "./pages/CardsPage";
import DashboardPage from "./pages/DashboardPage";

import Layout from "./pages/Layout";

import PlaygroundPage from "./pages/PlaygroundPage";
import ProfilePage from "./pages/ProfilePage";
import TaskPage from "./pages/TaskPage";
import SettingsAccountPage from "./components/forms/account/page";
import SettingsAppearancePage from "./components/forms/appearance/page";
import SettingsProfilePage from "./components/forms/profile/page";
import SettingsDisplayPage from "./components/forms/display/page";
import SettingsNotificationsPage from "./components/forms/notifications/page";
import ErrorPage from "./pages/ErrorPage";
import MusicPage from "./pages/MusicPage";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DashboardPage /> },
      {
        path: "/Cards",
        element: <CardsPage />,
      },
      {
        path: "/Music",
        element: <MusicPage />,
      },

      {
        path: "/Login",
        element: <AuthenticationPage />,
      },
      {
        path: "/Playground",
        element: (
          <AuthContextProvider>
            <PlaygroundPage />
          </AuthContextProvider>
        ),
      },
      {
        path: "/Profile",
        element: (
          <AuthContextProvider>
            <ProfilePage children={SettingsProfilePage()} />
          </AuthContextProvider>
        ),
      },
      {
        path: "/Profile/appearance",
        element: <ProfilePage children={SettingsAppearancePage()} />,
      },
      {
        path: "/Profile/notifications",
        element: <ProfilePage children={SettingsNotificationsPage()} />,
      },
      {
        path: "/Profile/display",
        element: <ProfilePage children={SettingsDisplayPage()} />,
      },
      {
        path: "/Profile/account",
        element: <ProfilePage children={SettingsAccountPage()} />,
      },

      {
        path: "/Task",
        element: (
          <AuthContextProvider>
            <TaskPage />
          </AuthContextProvider>
        ),
      },
      {
        path: "/PlayGround",
        element: (
          <AuthContextProvider>
            <PlaygroundPage />
          </AuthContextProvider>
        ),
      },
      {
        path: "/Login",
        element: <AuthenticationPage />,
      },
    ],
  },
];

export default routes;
