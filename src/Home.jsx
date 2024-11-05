import React from 'react';
import Banner from './Banner';
import BannerImg from './Components/BannerImg';
import CardCategories from './Components/CardCategories/CardCategories';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <BannerImg></BannerImg>
            <CardCategories categories={categories}></CardCategories>

        </div>
    );
};

export default Home;