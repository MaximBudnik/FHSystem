import React, {FC} from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {Outlet, useNavigate} from "react-router-dom";
import {AppRoutes} from "../router/AppRoutes";
import {UserRole} from "../shared/user.interface";


const RequireAdmin: FC = () => {
    const {user,} = useAuth0();
    const navigate = useNavigate()
    if (user?.role !== UserRole.admin) {
        navigate(AppRoutes.index);
        return null
    }
    return <Outlet/>;
};
export default RequireAdmin;
