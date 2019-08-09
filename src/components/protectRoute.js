import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
} from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                sessionStorage.getItem('user') ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login"
                            }}
                        />
                    )
            }
        />
    );
}

export default PrivateRoute;