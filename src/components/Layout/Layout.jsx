import { Outlet } from "react-router-dom";

const Layout = () => (
    <>
        <h1>Targetle</h1>
        <Outlet />
    </>   
);

Layout.propTypes = {};

export default Layout;