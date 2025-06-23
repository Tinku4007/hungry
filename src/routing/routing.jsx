import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Event from "../pages/event/Event";
import Gallery from "../pages/gallery/Gallery";
import Catering from "../pages/catering/Catering";

export const route = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    path: "",
                    element: <Home />
                },
                {
                    index: true,
                    path: "/about",
                    element: <About />
                },
                {
                    index: true,
                    path: "/contact",
                    element: <Contact />
                },
                {
                    index: true,
                    path: "/gallery",
                    element: <Gallery />
                },
                {
                    index: true,
                    path: "/event",
                    element: <Event />
                },
                   {
                    index: true,
                    path: "/catering",
                    element: <Catering />
                },
            ]
        }
    ]
)