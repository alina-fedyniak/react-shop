import React from 'react';
import { RouteProps } from 'react-router-dom';
import { Route as ReactRouter } from 'react-router';

export type ProtectedRouteProps = {
    component: any
    path: string
} & RouteProps;

const PrivateRoute = ({ component, path }: ProtectedRouteProps): any => {
    return (
        <>
            <ReactRouter
                path={path}
                key={path}
                element={component}
            />
        </>
    )
}

export default PrivateRoute;