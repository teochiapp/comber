import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Contanos qué necesitás',
    description: 'Describí el tipo de trabajo requerido y la ubicación de la obra.'
  },
  {
    number: '02',
    title: 'Coordinamos la visita',
    description: 'Definimos día y horario según la disponibilidad.'
  },
  {
    number: '03',
    title: 'Evaluación en el lugar',
    description: 'Analizamos el trabajo y te presentamos un presupuesto acorde.'
  }
];

const StepsServices = () => {
  return (
    <Section>
      {/* SVG Mask for the custom image shape */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <clipPath id="folderMask" clipPathUnits="objectBoundingBox">
            <path d="M0,0.3 C0,0.25, 0.02,0.25, 0.08,0.25 L0.35,0.25 C0.48,0.25, 0.52,0, 0.65,0 L0.92,0 C0.98,0, 1,0.02, 1,0.08 L1,0.92 C1,0.98, 0.98,1, 0.92,1 L0.08,1 C0.02,1, 0,0.98, 0,0.92 Z" />
          </clipPath>
        </defs>
      </svg>

      <Container>
        {/* Left Side: Timeline */}
        <StepsWrapper>
          {/* Header Part */}
          <TimelineHeader>
            <LogoContainer
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <img src="/isologo.png" alt="Isologo" />
            </LogoContainer>

            <HeaderSvg viewBox="0 0 300 200" fill="none">
              {/* Tall curve from logo to axis */}
              <AnimatedPath
                d="M108 26 H90 C50 26 0 45 0 95 V200"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeInOut" }}
              />
            </HeaderSvg>
          </TimelineHeader>

          <ChevronColumn>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <svg width="39" height="53" viewBox="0 0 39 57" fill="none">
                <path d="M5 32.5L15.9645 43.4645C17.9171 45.4171 21.0829 45.4171 23.0355 43.4645L34 32.5" stroke="#FF5C19" strokeWidth="3" />
                <path d="M5 10L15.9645 20.9645C17.9171 22.9171 21.0829 22.9171 23.0355 20.9645L34 10" stroke="#FF5C19" strokeWidth="3" />
              </svg>
            </motion.div>
            <ConnectorLine
              initial={{ height: 0 }}
              whileInView={{ height: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.8 }}
              style={{ top: '56px' }}
            />
          </ChevronColumn>

          {/* Steps List */}
          <StepsList>
            {steps.map((step, index) => (
              <StepItem
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.5 }}
              >
                <MarkerColumn>
                  <NumberCircle>{step.number}</NumberCircle>
                  {index !== steps.length - 1 && (
                    <ConnectorLine
                      initial={{ height: 0 }}
                      whileInView={{ height: 'calc(100% + 50px)' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 2.2 + index * 0.5 }}
                    />
                  )}
                </MarkerColumn>

                <StepContent>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </StepContent>
              </StepItem>
            ))}
          </StepsList>
        </StepsWrapper>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ flex: 1.1, width: '100%' }}
        >
          <ImageWrapper>
            <MainImage src="/content/service.webp" alt="Proceso de trabajo" />
          </ImageWrapper>
        </motion.div>
      </Container>
    </Section>
  );
};

export default StepsServices;

const Section = styled.section`
  padding: 100px 0;
  background-color: var(--overlay);
  overflow: hidden;
`;

const Container = styled.div`
  max-width: var(--container-max);
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 80px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 60px;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
`;

const StepsWrapper = styled.div`
  flex: 0.9;
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;
`;


const TimelineHeader = styled.div`
  position: relative;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 110px;
  margin-bottom: 20px;
`;

const LogoContainer = styled(motion.div)`
  width: 52px;
  height: 52px;
  background-color: var(--secondary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 80px;
  top: 13px;
  z-index: 5;

  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }
`;

const HeaderSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 28px; /* Anchor exactly at the axis center */
  width: 300px;
  height: 150px;
  overflow: visible;
  pointer-events: none;
  z-index: 1;
`;

const AnimatedPath = styled(motion.path)`
  fill: none;
  stroke: #0C273C;
  stroke-width: 3.5;
  stroke-opacity: 0.5;
`;

const ChevronColumn = styled.div`
  width: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 30px;

  svg {
  }
`;

const StepsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const StepItem = styled(motion.div)`
  display: flex;
  gap: 35px;
  align-items: stretch;
`;

const MarkerColumn = styled.div`
  width: 56px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
`;

const NumberCircle = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-text);
  font-weight: 600;
  color: var(--secondary-color);
  font-size: 1.35rem;
  background: white;
  z-index: 3;

  @media (min-width: 350px) and (max-width: 380px) {
    font-size: 1.15rem;
  }
`;

const ConnectorLine = styled(motion.div)`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
  width: 1.5px;
  background-color: var(--primary-color);
  opacity: 1;
  transform-origin: top;
  z-index: 1;
`;

const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 10px;
`;

const StepTitle = styled.h3`
  font-size: 1.6rem;
  color: var(--primary-color);
  font-family: var(--font-text);
  font-weight: 600;
  margin: 0;

  @media (min-width: 350px) and (max-width: 380px) {
    font-size: 1.35rem;
  }
`;

const StepDescription = styled.p`
  font-size: 1.07rem;
  color: var(--primary-color);
  opacity: 0.75;
  font-family: var(--font-text);
  line-height: 1.4;
  margin: 0;
  max-width: 420px;

  @media (min-width: 350px) and (max-width: 380px) {
    font-size: 0.92rem;
  }
`;
