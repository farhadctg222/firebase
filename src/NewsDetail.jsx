import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            <h1>news deatalis {id}</h1>
        </div>
    );
};

export default NewsDetail;