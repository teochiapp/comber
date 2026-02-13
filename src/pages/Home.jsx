import React from 'react';
import Hero from '../components/home/hero/Hero';
import Solutions from '../components/home/solutions/Solutions';
import Services from '../components/home/services/Services';
import Process from '../components/home/process/Process';
import Contact from '../components/home/contact/Contact';

const Home = () => {
    return (
        <main>
            <Hero />
            <Solutions />
            <Services />
            <Process />
            <Contact />
        </main>
    );
};

export default Home;