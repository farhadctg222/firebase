import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({data}) => {

    const {title,body,id} = data
    return (
        <div>
            <h1>{title}</h1>

            <p>{body.length>200 ? <Link to={`/news/${id}`} className='bg-success'>ReadMore</Link>: <p>{body}</p>} </p>
            
        </div>
    );
};

export default NewsCard;