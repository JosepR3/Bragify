import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useSelector(state => state.auth);
    return !currentUser ? <Navigate to="/sign-in" /> : <Outlet />;
}
