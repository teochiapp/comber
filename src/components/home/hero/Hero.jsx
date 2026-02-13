import React from 'react';
import styled from 'styled-components';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <HeroSection id="inicio">
      <div className="container">
        <HeroContent>
          <HeroTitle>Construcciones que <br /><span>Perduran en el Tiempo</span></HeroTitle>
          <HeroSubtitle>
            Especialistas en soluciones de hormigón y desarrollo de infraestructura.
            Calidad suprema y compromiso con cada proyecto.
          </HeroSubtitle>
          <CTAButton href="#servicios">
            Nuestros Servicios <ArrowRight size={20} />
          </CTAButton>
        </HeroContent>
      </div>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.section`
  height: calc(80vh - 90px);
  min-height: 500px;
  background: linear-gradient(rgba(12, 39, 60, 0.8), rgba(12, 39, 60, 0.6)), url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: var(--text-light);
`;

const HeroContent = styled.div`
  max-width: 800px;
  animation: fadeIn 0.8s var(--ease-out);

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: var(--spacing-md);
  
  span {
    color: var(--secondary-color);
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: var(--spacing-xl);
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  line-height: 1.6;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  background-color: var(--secondary-color);
  color: var(--text-light);
  padding: 1rem 2rem;
  border-radius: var(--radius-sm);
  font-weight: 700;
  text-decoration: none;
  font-family: var(--font-headings);
  transition: all var(--duration-normal) var(--ease-out);

  &:hover {
    background-color: #e54d15;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(255, 92, 25, 0.3);
  }
`;
