import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useRole from '../../Hooks/useRole/useRole';
import Spinner from '../../Shared/Spinner/Spinner';

const AdminRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const [role, roleLoader] = useRole(user?.email);
    if (loader || roleLoader) {
        return <Spinner></Spinner>
    }
    if (role === 'Admin') {
        return children;
    }
};

export default AdminRoute;