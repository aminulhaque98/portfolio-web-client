import React from 'react';
import Bot from '../../Bot/Bot';
import Hero from '../../Hero/Hero';
import About from '../../About/About';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Bot></Bot>
            <About></About>
        </div>
    );
};

export default Home;