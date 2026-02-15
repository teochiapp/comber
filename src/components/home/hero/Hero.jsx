import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import TechVisitButton from '../../common/TechVisitButton';
import BookingButton from '../../common/BookingButton';

const Hero = () => {
  return (
    <HeroSection id="inicio">
      <div className="container">
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Soluciones profesionales <br />para tu obra.
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Bombeo de hormigón y servicios de reparación coordinados de forma simple y eficiente.
          </HeroSubtitle>
          <ContentsButtons
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <BookingButton />
            <TechVisitButton onClick={() => { }} />
          </ContentsButtons>
        </HeroContent>
      </div>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.section`
  height: calc(90vh - 90px);
  min-height: 500px;
  background: linear-gradient(rgba(12, 39, 60, 0.75), rgba(12, 39, 60, 0.85)), url('/content/hero.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: var(--text-light);
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 1200px;

  @media (min-width: 850px) {
    margin-left: -150px;
    margin-top: 150px;
  }

  @media (max-width: 768px) {
    margin-top: 120px;
    margin-left: 0;
    padding: 0 20px;
  }
`;

const HeroTitle = styled(motion.h2)`
  font-size: clamp(40px, 5vw, 94px);
  margin-bottom: var(--spacing-md);
  font-weight: 400;
  
  span {
    color: var(--secondary-color);
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: var(--spacing-xl);
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  font-weight: 400;
  line-height: 1.6;
`;

const ContentsButtons = styled(motion.div)`
  display: flex;
  gap: var(--spacing-md);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
