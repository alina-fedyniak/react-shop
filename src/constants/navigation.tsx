import React from 'react';
import Home from '../pages/Home';
import Contacts from '../pages/Contacts';
import CartProducts from '../pages/CartProducts';
import CartProduct from '../pages/CartProduct';
import Cart from '../pages/Cart';

export enum RoutesNames {
    HOME = 'HOME',
    CONTACTS = 'CONTACTS',
    PRODUCTS = 'PRODUCTS',
    PRODUCT = 'PRODUCT',
    CART = 'CART',
}

export enum RoutesPaths {
    HOME = '/',
    CONTACTS = '/contacts',
    PRODUCTS = '/products',
    PRODUCT = '/product/:id',
    CART = '/cart',
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
        <CartProducts />,
    ),
    [RoutesNames.PRODUCT]: buildRoute(
        RoutesNames.PRODUCT,
        'Product',
        RoutesPaths[RoutesNames.PRODUCT],
        <CartProduct />,
    ),
    [RoutesNames.CART]: buildRoute(
        RoutesNames.CART,
        'Cart',
        RoutesPaths[RoutesNames.CART],
        <Cart />,
    ),
}

export const headerRoutes: Array<RouteConfig> = [
    ROUTES[RoutesNames.HOME],
    ROUTES[RoutesNames.CONTACTS],
    ROUTES[RoutesNames.PRODUCTS],
    ROUTES[RoutesNames.PRODUCT],
];

export const productRoutes: Array<RouteConfig> = [
    ROUTES[RoutesNames.PRODUCT],
];

export const cartRoutes: Array<RouteConfig> = [
    ROUTES[RoutesNames.CART],
];

export const publicRoutesArray: string[] = [
    RoutesNames.HOME,
    RoutesNames.CONTACTS,
    RoutesNames.PRODUCTS,
    RoutesNames.PRODUCT,
    RoutesNames.CART,
]

export const publicPaths = [
    '/',
    '/contacts',
    '/products',
    '/product/:id',
    '/cart',
]