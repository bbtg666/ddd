import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
} from "react-router-dom";
import axios from "axios";

let 5 = async () => {
    const res = await axios.get("http://52.246.162.234:4000/user/islogin", {
        headers: {
            "Content-Type": "application/json"
        }
    });
    console.log(res);
}

function PrivateRoute({ component: Component, ...rest }) {
    islogin();
    return (
        <Route
            {...rest}
            render={props =>
                sessionStorage.getItem('user') ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}

export default PrivateRoute;