import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Credits from "./components/Credits/Credits";

export const creditsPaths = "/credits";

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
                path: creditsPaths,
                element: <Credits />
            },
        ],
    },
    {
        path: '*',
        element: <p>La page demandée n&apos;a pas été trouvée</p>
    }
]);

export default router;