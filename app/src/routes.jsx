import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Credits from "./components/Credits/Credits";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/credits',
                element: <Credits />
            }
        ],
    }
]);

export default router;