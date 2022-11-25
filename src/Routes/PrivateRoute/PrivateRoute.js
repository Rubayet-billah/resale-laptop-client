import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Spinner from '../../Shared/Spinner/Spinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <Spinner></Spinner>
    }
    if (user?.uid) {
        return children;
    }
    else {
        return <Navigate to='/login'></Navigate>
    }
};

export default PrivateRoute;