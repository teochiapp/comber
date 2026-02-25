import React from 'react';
import styled from 'styled-components';
import TechVisitButton from '../../common/TechVisitButton';
import { Home } from 'lucide-react';
import StepsServices from './StepsServices';

const Services = () => {
  const phoneNumber = "5491112345678"; // Reemplazar con el número real
  const message = encodeURIComponent("¡Hola! Me gustaría solicitar una visita técnica para mi obra.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  return (
    <ServicesSection id="servicios">
      <div className="container">
        <Header>
          <Title>Servicios de construcción</Title>
        </Header>

        <Grid>
          <SolutionCard>
            <IconContainer>
              <svg width="120" height="120" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M111.063 31.2125L89.4687 22.8938C82.2937 20.125 78.7125 18.75 75 18.75C71.2875 18.75 67.7062 20.125 60.5375 22.8938L38.9313 31.2125C25.475 36.4 18.75 38.9875 18.75 43.75C18.75 48.5125 25.475 51.1062 38.9375 56.2875L60.5313 64.6062C67.7 67.3687 71.2812 68.75 75 68.75C78.7062 68.75 82.2938 67.375 89.4625 64.6062L111.063 56.2937C124.525 51.1 131.25 48.5062 131.25 43.75C131.25 38.9938 124.525 36.3937 111.063 31.2125Z" stroke="#B7B7B7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M103.125 59.4057L111.063 62.4682C124.531 67.6432 131.25 70.2307 131.25 74.9994C131.25 79.7682 124.525 82.3557 111.063 87.5369L89.4625 95.8619C82.2938 98.6182 78.7125 99.9994 75 99.9994C71.2875 99.9994 67.7 98.6244 60.5313 95.8619L38.9375 87.5369C25.475 82.3557 18.75 79.7619 18.75 74.9994C18.75 70.2369 25.475 67.6494 38.9375 62.4619L46.875 59.3994M118.75 65.6244L54.75 93.0494M31.25 84.3744L65.625 68.7494" stroke="#B7B7B7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M103.969 90.9805L111.063 93.7117C124.531 98.8992 131.25 101.487 131.25 106.249C131.25 111.012 124.525 113.605 111.063 118.787L89.4625 127.105C82.2938 129.874 78.7125 131.249 75 131.249C71.2875 131.249 67.7 129.868 60.5313 127.105L38.9375 118.787C25.475 113.599 18.75 111.012 18.75 106.249C18.75 101.487 25.475 98.893 38.9375 93.7117L46.0312 90.9805" stroke="#B7B7B7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </IconContainer>
            <CardTitle>Impermeabilizaciones</CardTitle>
            <CardDescription>
              Impermeabilización de terrazas, losas, muros y cimientos. Productos de primera calidad con garantía escrita. Soluciones definitivas contra filtraciones y humedad.
            </CardDescription>
          </SolutionCard>

          <SolutionCard>
            <IconContainer>
              <svg width="120" height="120" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M68.75 68.75L37.5 37.5" stroke="#B7B7B7" stroke-width="3" />
                <path d="M31.2514 46.8748L46.8764 31.2498L28.1264 21.8748L21.8764 28.1248L31.2514 46.8748ZM124.845 56.0936C127.846 53.0956 129.91 49.2898 130.787 45.1397C131.663 40.9895 131.315 36.674 129.783 32.7186L120.895 41.6061H108.395V29.1061L117.283 20.2186C113.327 18.6832 109.01 18.3315 104.858 19.2062C100.706 20.0809 96.8978 22.1443 93.8977 25.1451C90.8976 28.1458 88.8351 31.9543 87.9612 36.1066C87.0874 40.2589 87.4401 44.5757 88.9764 48.5311L48.5389 88.9748C44.5835 87.4386 40.2667 87.0859 36.1144 87.9597C31.9622 88.8335 28.1536 90.8961 25.1529 93.8962C22.1521 96.8963 20.0887 100.704 19.214 104.856C18.3393 109.008 18.691 113.325 20.2264 117.281L29.1076 108.394H41.6076V120.894L32.7201 129.781C36.6749 131.316 40.9907 131.669 45.142 130.795C49.2934 129.921 53.1012 127.859 56.1016 124.86C59.102 121.861 61.1656 118.054 62.0411 113.903C62.9166 109.752 62.5662 105.436 61.0326 101.481L101.483 61.0311C105.436 62.5603 109.749 62.9078 113.897 62.0312C118.045 61.1547 121.848 59.0918 124.845 56.0936Z" stroke="#B7B7B7" stroke-width="3" stroke-linejoin="round" />
                <path d="M73.7324 90.6242L108.757 125.649C109.541 126.434 110.472 127.057 111.497 127.482C112.521 127.907 113.62 128.126 114.729 128.126C115.839 128.126 116.937 127.907 117.962 127.482C118.987 127.057 119.917 126.434 120.701 125.649L125.651 120.699C126.436 119.916 127.059 118.985 127.484 117.96C127.909 116.935 128.128 115.837 128.128 114.727C128.128 113.618 127.909 112.519 127.484 111.495C127.059 110.47 126.436 109.539 125.651 108.755L90.6262 73.7305" stroke="#B7B7B7" stroke-width="3" stroke-linejoin="round" />
              </svg>
            </IconContainer>
            <CardTitle>Reparaciones</CardTitle>
            <CardDescription>
              Reparación de estructuras de hormigón, refuerzos y ampliaciones. Remodelaciones integrales para espacios residenciales y comerciales. Garantía en todos nuestros trabajos.
            </CardDescription>
          </SolutionCard>

          <SolutionCard>
            <IconContainer>
              <svg width="120" height="120" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_840_621)">
                  <path d="M92.2703 20.7852L86.0203 31.6105M113.921 33.2852L101.421 54.9358M104.322 99.9117L132.447 51.1978C133.275 49.7623 133.5 48.0563 133.071 46.4552C132.642 44.8541 131.594 43.489 130.159 42.6602L76.0323 11.4102C74.5968 10.5814 72.8909 10.3568 71.2897 10.7858C69.6886 11.2148 68.3235 12.2623 67.4947 13.6978L39.3697 62.4117M104.322 99.9117L39.3697 62.4117M104.322 99.9117C105.757 100.741 106.805 102.106 107.234 103.707C107.663 105.308 107.438 107.014 106.609 108.449L103.484 113.862C101.827 116.733 99.0964 118.828 95.8942 119.686C92.6919 120.544 89.28 120.095 86.4089 118.437L75.5836 112.187C74.1481 111.359 72.4421 111.134 70.841 111.563C69.2399 111.992 67.8748 113.04 67.046 114.475L57.9835 130.172C56.3259 133.043 53.5956 135.138 50.3934 135.996C47.1911 136.854 43.7792 136.405 40.9081 134.747C38.0371 133.089 35.9421 130.359 35.0841 127.157C34.226 123.955 34.6752 120.543 36.3328 117.672L45.3953 101.975C46.2241 100.54 46.4487 98.8335 46.0197 97.2324C45.5907 95.6313 44.5432 94.2662 43.1077 93.4374L32.2823 87.1874C29.4113 85.5298 27.3163 82.7995 26.4583 79.5973C25.6002 76.3951 26.0494 72.9831 27.707 70.1121L30.832 64.6994C31.6608 63.2639 33.026 62.2164 34.6271 61.7874C36.2282 61.3583 37.9342 61.5829 39.3697 62.4117" stroke="#B7B7B7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_840_621">
                    <rect width="150" height="150" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </IconContainer>
            <CardTitle>Pintura</CardTitle>
            <CardDescription>
              Pintura profesional para interiores y exteriores. Preparación de superficies, tratamiento de humedad y acabados de alta durabilidad. Trabajo prolijo con plazos establecidos.
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
            <BannerText>Trabajos de construcción, reparación y <DesktopBreak />mantenimiento adaptados a cada proyecto.</BannerText>
          </BannerInfo>
          <StyledButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <IconWrapper>
              <Home size={20} />
            </IconWrapper>
            <span>Turno bomba de hormigón</span>
          </StyledButton>
        </CTABanner>

        <StepsServices />

      </div >
    </ServicesSection >
  );
};

export default Services;

const ServicesSection = styled.section`
  padding: 120px 0 30px 0;
  margin: 0;
  background-color: var(--overlay);
  border-radius: 2px;

  @media (min-width: 768px) {
    margin-top: 50px;
  }
`;

const Header = styled.div`
  text-align: left;
  margin-bottom: 80px;
`;

const Title = styled.h2`
    font-size: clamp(40px, 5vw, 70px);

  color: var(--primary-color);
  font-weight: 500;
  font-family: var(--font-headings);
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }

  @media (min-width: 350px) and (max-width: 380px) {
    font-size: 2.4rem;
  }
`;

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
    padding: 0 0 0 24px;
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

  @media (max-width: 425px) {
    font-size: 1.5rem;
  }

  @media (min-width: 350px) and (max-width: 380px) {
    font-size: 1.3rem;
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
    max-width: none;
  }

  @media (min-width: 350px) and (max-width: 380px) {
    font-size: 0.95rem;
  }
`;

const CTABanner = styled.div`
  background-color: var(--background);
  padding: 24px 32px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: 100%;
  margin-top: 80px;

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
  max-width: 600px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: left;
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

  @media (min-width: 350px) and (max-width: 380px) {
    font-size: 1rem;
  }
`;

const DesktopBreak = styled.br`
  display: none;
  @media (min-width: 992px) {
    display: inline;
  }
`;



const StyledButton = styled.a`
display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: var(--secondary-color);
  color: var(--text-light);
  padding: 16px 24px;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  font-family: var(--font-text);
  font-size: 20px;
  transition: all var(--duration-normal) var(--ease-out);
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e54d15;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 92, 25, 0.3);
  }

  svg {
    flex-shrink: 0;
  }

  @media (min-width: 350px) and (max-width: 380px) {
    font-size: 17px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--background);
`;
