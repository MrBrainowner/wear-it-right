import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import About from "../pages/About.jsx";
import Trends from "../pages/Trends.jsx";
import Contact from "../pages/Contact.jsx";
import Guides from "../pages/Guides.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import GalleryPage from "../pages/GalleryPage.jsx";

const router = createBrowserRouter([
  {
    path: "wear-it-right/",
    element: <App />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "wear-it-right/gallery",
    element: <GalleryPage />,
  },
  {
    path: "wear-it-right/about",
    element: <About />,
  },
  {
    path: "wear-it-right/trends",
    element: <Trends />,
  },
  {
    path: "wear-it-right/contact",
    element: <Contact />,
  },
  {
    path: "wear-it-right/guides",
    element: <Guides />,
  },
]);

export default router;
