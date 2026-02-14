import React from 'react';
import styled from 'styled-components';

const Process = () => {
  return (
    <ProcessSection id="process">
      <div className="container">
        <Header>
<<<<<<< HEAD
          <Title>Nuestro Proceso</Title>
=======
          <Title>Servicios de construcción</Title>
>>>>>>> 7a836c937f123e0108553932c4c24a875883b2be
        </Header>
      </div>
    </ProcessSection>
  );
};

export default Process;



const ProcessSection = styled.section`
  padding: 100px 0;
  margin: 10px 30px;
  background-color: var(--background);
  border-radius: 2px;
`;

const Header = styled.div`
  text-align: left;
  margin-bottom: 80px;
`;

const Title = styled.h2`
  font-size: 4rem;
  color: var(--primary-color);
  font-weight: 500;
  font-family: var(--font-headings);
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;
<<<<<<< HEAD
=======

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 80px;
  }
`;

const SolutionCard = styled.div`
  padding: 0 0 10px 40px;
  border-left: 2px solid var(--grey);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 768px) {
    padding: 0 0 0 40px;
  }
  @media (max-width: 362px) {
    padding: 0 0 0 20px;
  }

`;

const IconContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  height: 120px;

  svg {
    width: 120px;
    height: 120px;
  }
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 20px;
  font-family: var(--font-headings);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CardDescription = styled.p`
  font-size: 1.15rem;
  color: var(--primary-color);
  line-height: 1.5;
  opacity: 0.85;
  font-family: var(--font-text);
  max-width: 320px; // Adjusted for 3 columns

  @media (max-width: 768px) {
    max-width:260px
  }

`;

>>>>>>> 7a836c937f123e0108553932c4c24a875883b2be
