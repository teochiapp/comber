import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/hero/Hero';
import Solutions from '../components/home/solutions/Solutions';
import Services from '../components/home/services/Services';
import Process from '../components/home/process/Process';
import Contact from '../components/home/contact/Contact';

const scrollReveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.9, ease: "easeOut" }
};

const Home = () => {
    return (
        <main>
            <Hero />

            <motion.div {...scrollReveal}>
                <Solutions />
            </motion.div>

            <motion.div {...scrollReveal}>
                <Services />
            </motion.div>

            <motion.div {...scrollReveal}>
                <Process />
            </motion.div>

            <motion.div {...scrollReveal}>
                <Contact />
            </motion.div>
        </main>
    );
};

export default Home;