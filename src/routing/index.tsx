import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
    headerRoutes, productRoutes,
} from '../constants/navigation';

type ValueOrArray<T> = T | ValueOrArray<T>[];

const mapRoute = (item: any): ValueOrArray<JSX.Element> => {
    return (
        <Route
            path={item.url}
            key={item.url}
            element={item.component}
        />
    );
};

export const allRoutes = [
    ...headerRoutes,
    ...productRoutes,
].map(mapRoute);

const AppRouter = (): JSX.Element => (
    <Routes>
        {[ ...allRoutes ]}
    </Routes>
);

export default AppRouter;