import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './pages/home.jsx';
import AboutMe from './pages/aboutme.jsx';
import Projects from './pages/projects.jsx';
import Skills from "./pages/skills.jsx";
import Navbar from './components/Navbar/Navbar.jsx';
import { Outlet } from "react-router";


function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {path: "home", element: <Home />},
      {path: "aboutme", element: <AboutMe />},
      {path: "projects", element: <Projects />},
      {path: "skills", element: <Skills />}
    ]
  },
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
);
}

export default App
