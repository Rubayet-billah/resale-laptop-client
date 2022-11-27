import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { category: name, categoryId, image } = category;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Laptop between 10000 to 200000</p>
                <div className="card-actions justify-end">
                    <Link to={`/products/${categoryId}`}><button className='btn btn-sm btn-primary'>All Products</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;