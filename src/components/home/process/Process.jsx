import React from 'react';
import styled from 'styled-components';

const Process = () => {
  return (
    <ProcessSection id="process">
      <div className="container">
        <Header>
          <Title>Nuestro Proceso</Title>
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



