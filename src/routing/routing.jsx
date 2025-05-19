import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";

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
            ]
        }
    ]
)