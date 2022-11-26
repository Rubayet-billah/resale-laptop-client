import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [myProducts, setMyproducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/products/?email=${user?.email}`)
            .then(data => {
                console.log(data.data)
                setMyproducts(data)
            })
    }, [user?.email])

    return (
        <div>

        </div>
    );
};

export default MyProducts;