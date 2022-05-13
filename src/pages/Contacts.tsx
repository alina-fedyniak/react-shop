import React from 'react';
import { NavLink } from 'react-router-dom';
import { RoutesPaths } from '../constants/navigation';

const Contacts = () => {
    return (
        <NavLink to={RoutesPaths.CONTACTS}>
            <div>Contacts</div>
        </NavLink>
    )
}

export default Contacts