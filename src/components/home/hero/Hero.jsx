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
  height: calc(110vh - 90px);
  padding: 44vh 0 100px 0;
  background: linear-gradient(rgba(12, 39, 60, 0.75), rgba(12, 39, 60, 0.85)), url('/content/hero.webp');
  background-size: cover;
  background-position: center;
  color: var(--text-light);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 120px 0 80px 0;
    height: 90vh;
    display: flex;
    align-items: flex-end;
  }
`;

const HeroContent = styled.div`
  width: 100%;
`;

const HeroTitle = styled(motion.h2)`
  font-size: clamp(40px, 5vw, 94px);
  margin-bottom: var(--spacing-md);
  font-weight: 400;
  
  span {
    color: var(--secondary-color);
  }

  @media (min-width: 350px) and (max-width: 380px) {
    font-size: clamp(34px, 5vw, 94px);
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: var(--spacing-xl);
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  font-weight: 400;
  line-height: 1.6;

  @media (min-width: 350px) and (max-width: 380px) {
    font-size: 1.05rem;
  }
`;

const ContentsButtons = styled(motion.div)`
  display: flex;
  gap: var(--spacing-md);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
