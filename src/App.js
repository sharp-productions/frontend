import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  CaseDetail,
  CasesList,
  ChargeDetail,
  ChargesList,
  ClientDetail,
  ClientsList,
  Docket,
  // TODO: Remove Events, Notes, Tasks routes
  EventDetail,
  EventsList,
  FinancesDetail,
  FinancesList,
  FinancesOverview,
  Login,
  Logout,
  NoteDetail,
  NotesList,
  Profile,
  Root,
  Settings,
  Signup,
  TaskDetail,
  TasksList,
  Terms
} from "./features"

const router = createBrowserRouter([
  {
    path: "/cases",
    element: <CasesList />
  },
  {
    path: "/cases/:caseId",
    element: <CaseDetail />
  },
  {
    path: "/charges",
    element: <ChargesList />
  },
  {
    path: "/charges/:chargeId",
    element: <ChargeDetail />
  },
  {
    path: "/clients",
    element: <ClientsList />
  },
  {
    path: "/clients/:clientId",
    element: <ClientDetail />
  },
  {
    path: "/docket",
    element: <Docket />
  },
  // TODO: Remove events, notes and tasks page.  Replace with docket
  {
    path: "/events",
    element: <EventsList />
  },
  {
    path: "/events/:eventId",
    element: <EventDetail />
  },
  {
    path: "/finances",
    element: <FinancesList />
  },
  {
    path: "/finances/overview",
    element: <FinancesOverview />
  },
  {
    path: "/finances/:accountId",
    element: <FinancesDetail />
  },
  {
    path: "/notes",
    element: <NotesList />
  },
  {
    path: "/notes/:noteId",
    element: <NoteDetail />
  },
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/logout",
    element: <Logout />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/settings",
    element: <Settings />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/tasks",
    element: <TasksList />
  },
  {
    path: "/tasks/:taskId",
    element: <TaskDetail />
  },
  {
    path: "/terms",
    element: <Terms />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
