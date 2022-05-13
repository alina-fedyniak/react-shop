import React from 'react';
import { NavLink } from 'react-router-dom';
import { RoutesPaths } from '../constants/navigation';

const Home = () => {
    return (
            <NavLink to={RoutesPaths.HOME}>
                <div>Home</div>
            </NavLink>
        )
}

export default Home