import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import About from "../pages/About.jsx";
import Trends from "../pages/Trends.jsx";
import Contact from "../pages/Contact.jsx";
import Guides from "../pages/Guides.jsx";
import Error from "../pages/Error.jsx";
import Gallery from "../pages/Gallery.jsx";
import Accessories from "../pages/Accessories.jsx";
import Styles from "../pages/Styles.jsx";
import Shops from "../pages/Shops.jsx";
import LogIn from "../pages/LogIn.jsx";
import Register from "../pages/Register.jsx";
import Brands from "../pages/Brands.jsx";
import Footwear from "../pages/Footwear.jsx";

const router = createBrowserRouter([
  { path: "*", element: <Error /> },
  { path: "wear-it-right/home", element: <App /> },
  { path: "wear-it-right/gallery", element: <Gallery /> },
  { path: "wear-it-right/about", element: <About /> },
  { path: "wear-it-right/trends", element: <Trends /> },
  { path: "wear-it-right/contact", element: <Contact /> },
  { path: "wear-it-right/guides", element: <Guides /> },
  { path: "wear-it-right/accessories", element: <Accessories /> },
  { path: "wear-it-right/styles", element: <Styles /> },
  { path: "wear-it-right/shops", element: <Shops /> },
  { path: "wear-it-right/login", element: <LogIn /> },
  { path: "wear-it-right/register", element: <Register /> },
  { path: "wear-it-right/brands", element: <Brands /> },
  { path: "wear-it-right/footwear", element: <Footwear /> },
]);

export default router;
