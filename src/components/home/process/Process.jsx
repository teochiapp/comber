import React from 'react';
import styled from 'styled-components';

const Solutions = () => {
  return (
    <SolutionsSection id="soluciones-hormigon">
      <div className="container">
        <Header>
          <Title>Soluciones en Hormigón</Title>
        </Header>

        <Grid>
          <SolutionCard>
            <IconContainer>
              <svg width="84" height="64" viewBox="0 0 84 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 42H13M1 42V63H13M1 42H28.5L38.5 28H15.5L7 35V42M13 63H26.5M13 63V52H26.5V63M26.5 63H35H67M67 63V42M67 63H81V42H67M81 42L73 31H55V42M55 42H67M15.5 28L28.5 22M28.5 22L73 31" stroke="#BDBDBD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="15.5" cy="56.5" r="5.5" stroke="#BDBDBD" strokeWidth="1.5" />
                <circle cx="61.5" cy="56.5" r="5.5" stroke="#BDBDBD" strokeWidth="1.5" />
              </svg>
            </IconContainer>
            <CardTitle>Bombeo de hormigón</CardTitle>
            <CardDescription>
              Servicio de bombeo profesional con equipos de última generación. Alcanzamos cualquier altura y distancia para tu proyecto. Ideal para losas, columnas y estructuras complejas.
            </CardDescription>
          </SolutionCard>

          <SolutionCard>
            <IconContainer>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 8C24 16 16 26 16 36C16 44.8366 23.1634 52 32 52C40.8366 52 48 44.8366 48 36C48 26 40 16 32 8Z" stroke="#BDBDBD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 42H16M48 42H52M18 52L22 48M42 48L46 52" stroke="#BDBDBD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </IconContainer>
            <CardTitle>Venta de hormigón</CardTitle>
            <CardDescription>
              Hormigón elaborado de alta calidad en diferentes resistencias. Entrega puntual en obra con certificación de calidad. Asesoramiento técnico incluido para cada aplicación.
            </CardDescription>
          </SolutionCard>
        </Grid>
      </div>
    </SolutionsSection>
  );
};

export default Solutions;

const SolutionsSection = styled.section`
  padding: 100px 0;
  background-color: var(--background);
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 80px;
  }
`;

const SolutionCard = styled.div`
  padding: 0 0 10px 40px;
  border-left: 1.5px solid #E0E0E0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const IconContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  height: 80px;
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 20px;
  font-family: var(--font-headings);
`;

const CardDescription = styled.p`
  font-size: 1.15rem;
  color: var(--primary-color);
  line-height: 1.5;
  opacity: 0.85;
  max-width: 480px;
  font-family: var(--font-text);
`;
