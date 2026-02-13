import React from 'react';
import styled from 'styled-components';
import TechVisitButton from '../../common/TechVisitButton';
import BookingButton from '../../common/BookingButton';
const Hero = () => {
  return (
    <HeroSection id="inicio">
      <div className="container">
        <HeroContent>
          <HeroTitle>Soluciones profesionales <br />para tu obra.</HeroTitle>
          <HeroSubtitle>
            Bombeo de hormigón y servicios de reparación coordinados de forma simple y eficiente.
          </HeroSubtitle>
          <ContentsButtons>
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
  height: calc(80vh - 90px);
  min-height: 500px;
  background: linear-gradient(rgba(12, 39, 60, 0.8), rgba(12, 39, 60, 0.6)), url('/content/hero.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: var(--text-light);
`;

const HeroContent = styled.div`
  max-width: 1200px;
  animation: fadeIn 0.8s var(--ease-out);


  @media (min-width: 850px) {
   margin-left: -150px;
    margin-top: 150px;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 768px) {
    margin-top: 120px;
    margin-left: 0;
    padding: 0 20px;
  }
`;

const HeroTitle = styled.h2`
  font-size: clamp(40px, 5vw, 94px);
  margin-bottom: var(--spacing-md);
  font-weight: 400;
  
  span {
    color: var(--secondary-color);
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: var(--spacing-xl);
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  font-weight: 400;
  line-height: 1.6;

  @media (min-width: 850px) {
   
  }
`;

const ContentsButtons = styled.div`
  display: flex;
  gap: var(--spacing-md);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;