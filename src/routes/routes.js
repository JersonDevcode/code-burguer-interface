import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import PrivateRoute from "./PrivateRoutes";

function MyRoutes() {

    return (
        <Router>
            <Routes>
                <Route element={<Login />} path="/login" />
                <Route element={<Register />} path="/cadastro" />
                <Route exact path="/" element={<Home />}>
                    <Route exact path="/" element={<PrivateRoute />} />
               
                </Route>
            </Routes>
        </Router>
    )

}

export default MyRoutes