import React from 'react';
import Home from '../pages/Home';
import Contacts from '../pages/Contacts';
import ProductsPage from '../pages/ProductsPage';

export enum RoutesNames {
    HOME = 'HOME',
    CONTACTS = 'CONTACTS',
    PRODUCTS = 'PRODUCTS',
}

export enum RoutesPaths {
    HOME = '/',
    CONTACTS = '/contacts',
    PRODUCTS = '/products',
}

export interface RouteConfig {
    isSubRoute: false;
    id: string;
    title: string;
    url: RoutesPaths;
    component: any;
    icon?: JSX.Element;
}

export interface SubRouteConfig {
    isSubRoute: true;
    name: RoutesNames;
    title: string;
    routes: Array<RouteConfig>;
    icon?: JSX.Element;
}

const buildRoute = (
    id: string,
    title: string,
    url: RoutesPaths,
    component: any,
    icon?: JSX.Element
): RouteConfig => ({
    isSubRoute: false,
    id,
    title,
    url,
    component,
    icon,
});

const buildSubRoutes = (
    name: RoutesNames,
    title: string,
    routes: Array<RouteConfig>,
    icon?: JSX.Element
): SubRouteConfig => ({
    isSubRoute: true,
    name,
    title,
    routes,
    icon,
});

export const ROUTES: { [key in RoutesNames]: RouteConfig } = {
    [RoutesNames.HOME]: buildRoute(
        RoutesNames.HOME,
        'Home',
        RoutesPaths[RoutesNames.HOME],
        <Home/>,
    ),
    [RoutesNames.CONTACTS]: buildRoute(
        RoutesNames.CONTACTS,
        'Contacts',
        RoutesPaths[RoutesNames.CONTACTS],
        <Contacts/>,
    ),
    [RoutesNames.PRODUCTS]: buildRoute(
        RoutesNames.PRODUCTS,
        'Products',
        RoutesPaths[RoutesNames.PRODUCTS],
        <ProductsPage />,
    ),
}

export const headerRoutes: Array<RouteConfig> = [
    ROUTES[RoutesNames.HOME],
    ROUTES[RoutesNames.CONTACTS],
    ROUTES[RoutesNames.PRODUCTS],
];

export const publicRoutesArray: string[] = [
    RoutesNames.HOME,
    RoutesNames.CONTACTS,
    RoutesNames.PRODUCTS,
]

export const publicPaths = [
    '/',
    '/contacts',
    '/products',
]