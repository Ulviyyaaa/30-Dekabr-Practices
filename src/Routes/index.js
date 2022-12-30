import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Portfolio from "../Pages/Portfolio";
import Service from "../Pages/Service";


const router = createBrowserRouter([
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/service",
        element: <Service/>
    },
    {
        path: "/portfolio",
        element: <Portfolio />
    },
    {
        path: "/contact",
        element: <Contact />
    },

]);

export default router