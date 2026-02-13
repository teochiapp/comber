import React from 'react';
import styled from 'styled-components';
import BookingButton from '../../common/BookingButton';
import ProcessSteps from './ProcessSteps';

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
              <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.75 106.25C18.75 109.565 20.067 112.745 22.4112 115.089C24.7554 117.433 27.9348 118.75 31.25 118.75C34.5652 118.75 37.7446 117.433 40.0888 115.089C42.433 112.745 43.75 109.565 43.75 106.25C43.75 102.935 42.433 99.7554 40.0888 97.4112C37.7446 95.067 34.5652 93.75 31.25 93.75C27.9348 93.75 24.7554 95.067 22.4112 97.4112C20.067 99.7554 18.75 102.935 18.75 106.25ZM93.75 106.25C93.75 109.565 95.067 112.745 97.4112 115.089C99.7554 117.433 102.935 118.75 106.25 118.75C109.565 118.75 112.745 117.433 115.089 115.089C117.433 112.745 118.75 109.565 118.75 106.25C118.75 102.935 117.433 99.7554 115.089 97.4112C112.745 95.067 109.565 93.75 106.25 93.75C102.935 93.75 99.7554 95.067 97.4112 97.4112C95.067 99.7554 93.75 102.935 93.75 106.25Z" stroke="#B7B7B7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M43.75 112.5H93.75M118.75 112.5H131.25V75M131.25 75C131.25 66.712 127.958 58.7634 122.097 52.9029C116.237 47.0424 108.288 43.75 100 43.75H93.75M131.25 75H103.125L93.75 43.75M93.75 43.75H75V112.5M18.75 106.25V75H75M18.75 56.25L131.25 18.75M37.5 75V50" stroke="#B7B7B7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </IconContainer>
            <CardTitle>Bombeo de hormigón</CardTitle>
            <CardDescription>
              Servicio de bombeo profesional con equipos de última generación. Alcanzamos cualquier altura y distancia para tu proyecto. Ideal para losas, columnas y estructuras complejas.
            </CardDescription>
          </SolutionCard>

          <SolutionCard>
            <IconContainer>
              <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.502 75H25.002M125.002 75H137.502M18.752 125.062L18.8145 124.994M37.502 100.062L37.5645 99.9937M56.252 125.062L56.3145 124.994M93.752 125.062L93.8145 124.994M112.502 100.062L112.564 99.9937M131.252 125.062L131.314 124.994M77.477 21.225L96.877 40.625C101.204 44.9515 104.151 50.4641 105.345 56.4654C106.539 62.4668 105.926 68.6875 103.585 74.3407C101.243 79.994 97.2779 84.826 92.1902 88.2256C87.1025 91.6252 81.1209 93.4397 75.002 93.4397C68.883 93.4397 62.9014 91.6252 57.8137 88.2256C52.726 84.826 48.7606 79.994 46.4191 74.3407C44.0776 68.6875 43.4652 62.4668 44.6591 56.4654C45.8531 50.4641 48.8 44.9515 53.127 40.625L72.527 21.225C72.852 20.8999 73.2378 20.6421 73.6625 20.4662C74.0871 20.2902 74.5423 20.1997 75.002 20.1997C75.4616 20.1997 75.9168 20.2902 76.3414 20.4662C76.7661 20.6421 77.1519 20.8999 77.477 21.225Z" stroke="#B7B7B7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </IconContainer>
            <CardTitle>Venta de hormigón</CardTitle>
            <CardDescription>
              Hormigón elaborado de alta calidad en diferentes resistencias. Entrega puntual en obra con certificación de calidad. Asesoramiento técnico incluido para cada aplicación.
            </CardDescription>
          </SolutionCard>
        </Grid>

        <CTABanner>
          <BannerInfo>
            <SvgContainer>
              <SvgContainer>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_840_559)">
                    <path d="M15.286 15.286L24.714 24.7141M24.714 24.7141L24.714 16.4646M24.714 24.7141L16.4645 24.7141M8.21489 8.21497C14.7238 1.70606 25.2762 1.70606 31.7851 8.21498C38.294 14.7239 38.294 25.2763 31.7851 31.7852C25.2762 38.2941 14.7238 38.2941 8.21489 31.7852C1.70597 25.2763 1.70597 14.7239 8.21489 8.21497Z" stroke="#FF5C19" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_840_559">
                      <rect width="40" height="40" fill="white" transform="matrix(-4.37114e-08 1 1 4.37114e-08 1.74846e-06 0)" />
                    </clipPath>
                  </defs>
                </svg>
              </SvgContainer>
            </SvgContainer>
            <BannerText>Servicios de hormigón adaptados a las <DesktopBreak /> necesidades de tu obra.</BannerText>
          </BannerInfo>
          <BookingButton />
        </CTABanner>

        <ProcessSteps />
      </div>
    </SolutionsSection >
  );
};

export default Solutions;

const DesktopBreak = styled.br`
  display: none;
  @media (min-width: 992px) {
    display: inline;
  }
`;

const SolutionsSection = styled.section`
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
  font-size: 4.2rem;
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
  margin-bottom: 80px;

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
`;

const IconContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  height: 80px;

  @media (max-width: 768px) {
    height: 64px;
    svg {
      width: 90px;
      height: 90px;
    }
  }
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 20px;
  font-family: var(--font-headings);
`;

const CardDescription = styled.p`
  font-size: 1.2rem;
  color: var(--primary-color);
  line-height: 1.3;
  padding-right: 30px;
  font-family: var(--font-text);
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CTABanner = styled.div`
  background-color: var(--overlay);
  padding: 24px 32px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: 100%;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
    & > :last-child {
      align-self: flex-end;
    }
  } 
`;

const SvgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;


const BannerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 40vw;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    align-items: flex-start;
    max-width: 100%;
  }
`;

const BannerText = styled.p`
  font-size: 1.15rem;
  color: var(--primary-color);
  font-weight: 400;
  margin: 0;
  font-family: var(--font-text);
`;
