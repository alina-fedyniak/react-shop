import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
    headerRoutes,
} from '../constants/navigation';

type ValueOrArray<T> = T | ValueOrArray<T>[];

const mapRoute = (item: any): ValueOrArray<JSX.Element> => {
    console.log(item)
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
].map(mapRoute);

const AppRouter = (): JSX.Element => (
    <Routes>
        {[ ...allRoutes ]}
    </Routes>
);

export default AppRouter;