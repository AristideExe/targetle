import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import HowToPlay from "./components/HowToPlay/HowToPlay";

export const homePath = "/";
export const howToPlayPath = "/howToPlay";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: homePath,
                element: <Home />
            },
            {
                path: howToPlayPath,
                element: <HowToPlay />
            },
        ],
    },
    {
        path: '*',
        element: <p>La page demandée n&apos;a pas été trouvée</p>
    }
]);

export default router;