import React from "react";
import { Route, Redirect } from "react-router-dom";

import PropTypes from 'prop-types'
function PrivateRoute({element, ...rest}){
    const user = localStorage.getItem('codeburguer:userData')

    if(!user){
        return <Redirect to="/login" />
    }

    return <Route {...rest} component={element}/>
}

export default PrivateRoute

PrivateRoute.propTypes={
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}