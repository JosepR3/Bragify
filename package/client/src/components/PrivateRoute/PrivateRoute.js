import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ component: Component, ...rest }) {
    const user = useSelector((state) => state.auth.currentUser);

    return !user ? <Navigate to="/login" /> : <Outlet />;
}
