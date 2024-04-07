import React, { useEffect } from 'react';
import NavBar from './NavBar';
import Header from './Header';
import {useLoaderData} from "react-router-dom";
import NewsCard from './NewsCard';

const Home = () => {
   
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
           

           <NavBar></NavBar>
           <Header></Header>
           {
                data.map(data=><NewsCard key={data.id} data={data}></NewsCard>)
            }

    
        </div>
    );
};

export default Home;