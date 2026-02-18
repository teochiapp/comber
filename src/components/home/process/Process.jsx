import React from 'react';
import styled from 'styled-components';

const Process = () => {
  return (
    <>
      <Section>
        <BackgroundLogo>
          <svg width="1440" height="787" viewBox="0 0 1440 787" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M755.021 -236.869C755.021 43.295 346.448 370.153 -38.7773 370.153H731.674V1023.87C731.674 519.574 1229.74 377.935 1478.78 370.153C1198.61 370.153 755.021 43.295 755.021 -236.869Z" stroke="#a6c4c7" strokeWidth="134.394" />
            </g>
          </svg>
        </BackgroundLogo>
        <Container>
          <Grid>
            {/* Top Left Item */}
            <ItemArea className="item-tl">
              <IconWrapper>
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M37.3333 4.66699V14.0003M18.6667 4.66699V14.0003M7 23.3337H49M30.3333 9.33366H25.6667C16.8677 9.33366 12.467 9.33366 9.73467 12.0683C7.00233 14.803 7 19.2013 7 28.0003V32.667C7 41.466 7 45.8667 9.73467 48.599C12.4693 51.3313 16.8677 51.3337 25.6667 51.3337H30.3333C39.1323 51.3337 43.533 51.3337 46.2653 48.599C48.9977 45.8643 49 41.466 49 32.667V28.0003C49 19.2013 49 14.8007 46.2653 12.0683C43.5307 9.33599 39.1323 9.33366 30.3333 9.33366Z" stroke="#0C273C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M27.99 32.667H28.0087M27.99 42.0003H28.0087M37.3117 32.667H37.3327M18.666 32.667H18.687M18.666 42.0003H18.687" stroke="#0C273C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </IconWrapper>
              <TextContent>
                <ItemTitle>Coordinación directa</ItemTitle>
                <ItemDesc>desde el primer contacto.</ItemDesc>
              </TextContent>
            </ItemArea>

            {/* Top Top Line (SVG 6) - Connects TL to Center Top */}
            <LineWrapper className="line-tl">
              <svg viewBox="0 0 362 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M361.354 86.8535H86.8535L0.353516 0.353516" stroke="white" strokeWidth="2" />
              </svg>
            </LineWrapper>

            {/* Top Right Item */}
            <ItemArea className="item-tr" style={{ textAlign: 'left' }}>
              <IconWrapper>
                <svg width="47" height="40" viewBox="0 0 47 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.334 14.9997C17.334 16.2374 17.8257 17.4243 18.7008 18.2995C19.576 19.1747 20.763 19.6663 22.0007 19.6663C23.2383 19.6663 24.4253 19.1747 25.3005 18.2995C26.1757 17.4243 26.6673 16.2374 26.6673 14.9997C26.6673 13.762 26.1757 12.575 25.3005 11.6998C24.4253 10.8247 23.2383 10.333 22.0007 10.333C20.763 10.333 19.576 10.8247 18.7008 11.6998C17.8257 12.575 17.334 13.762 17.334 14.9997Z" stroke="#0C273C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 29C21.2347 29 20.4802 28.9611 19.7367 28.8833C12.3338 28.1087 6.08822 23.4809 1 15C6.6 5.66667 13.6 1 22 1C30.0842 1 36.8719 5.32289 42.363 13.9687M41.1333 34.1333L45.3333 38.3333M29 29C29 30.8565 29.7375 32.637 31.0503 33.9497C32.363 35.2625 34.1435 36 36 36C37.8565 36 39.637 35.2625 40.9497 33.9497C42.2625 32.637 43 30.8565 43 29C43 27.1435 42.2625 25.363 40.9497 24.0503C39.637 22.7375 37.8565 22 36 22C34.1435 22 32.363 22.7375 31.0503 24.0503C29.7375 25.363 29 27.1435 29 29Z" stroke="#0C273C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </IconWrapper>
              <TextContent>
                <ItemTitle>Evaluación técnica</ItemTitle>
                <ItemDesc>previa a cada trabajo.</ItemDesc>
              </TextContent>
            </ItemArea>

            {/* Top Right Line (SVG 7) - Connects TR to Center Top */}
            <LineWrapper className="line-tr">
              <svg viewBox="0 0 360 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 159.599H267L415 0.25" stroke="white" strokeWidth="2" />
              </svg>
            </LineWrapper>

            {/* Center Title */}
            <TitleArea>
              <MainTitle>
                Un proceso claro,<br />
                pensado para vos.
              </MainTitle>
            </TitleArea>

            {/* Bottom Left Line (SVG 5) - Connects BL to Center Bottom */}
            <LineWrapper className="line-bl">
              <svg viewBox="0 0 299 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M298.854 0.5H62.8535L0.353516 63" stroke="white" strokeWidth="2" />
              </svg>
            </LineWrapper>

            {/* Bottom Left Item */}
            <ItemArea className="item-bl">
              <IconWrapper>
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.095 4.66699H16.905C14.2007 4.66699 12.8497 4.66699 11.7577 5.04733C10.7285 5.41301 9.79732 6.01067 9.03623 6.79402C8.27513 7.57737 7.70455 8.52539 7.36867 9.56466C7 10.6893 7 12.08 7 14.8637V47.5397C7 49.5417 9.29833 50.6057 10.752 49.2757C11.1598 48.8988 11.6947 48.6895 12.25 48.6895C12.8053 48.6895 13.3402 48.8988 13.748 49.2757L14.875 50.307C15.5895 50.9677 16.5268 51.3347 17.5 51.3347C18.4732 51.3347 19.4105 50.9677 20.125 50.307C20.8395 49.6463 21.7768 49.2793 22.75 49.2793C23.7232 49.2793 24.6605 49.6463 25.375 50.307C26.0895 50.9677 27.0268 51.3347 28 51.3347C28.9732 51.3347 29.9105 50.9677 30.625 50.307C31.3395 49.6463 32.2768 49.2793 33.25 49.2793C34.2232 49.2793 35.1605 49.6463 35.875 50.307C36.5895 50.9677 37.5268 51.3347 38.5 51.3347C39.4732 51.3347 40.4105 50.9677 41.125 50.307L42.252 49.2757C42.6598 48.8988 43.1947 48.6895 43.75 48.6895C44.3053 48.6895 44.8402 48.8988 45.248 49.2757C46.7017 50.6057 49 49.5417 49 47.5397V14.8637C49 12.08 49 10.687 48.6313 9.56699C48.2958 8.52729 47.7253 7.57881 46.9642 6.79504C46.2031 6.01127 45.2717 5.41325 44.2423 5.04733C43.1503 4.66699 41.7993 4.66699 39.095 4.66699Z" stroke="#0C273C" strokeWidth="2" />
                  <path d="M22.166 24.267L25.5003 28.0003L33.8327 18.667" stroke="#0C273C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.5 36.167H38.5" stroke="#0C273C" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </IconWrapper>
              <TextContent>
                <ItemTitle>Presupuestos claros <span>y</span></ItemTitle>
                <ItemDesc>acordados de antemano.</ItemDesc>
              </TextContent>
            </ItemArea>

            {/* Bottom Right Line (SVG 8) - Connects BR to Center Bottom */}
            <LineWrapper className="line-br">
              <svg viewBox="0 0 354 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0.5H281.5L353.5 72.5" stroke="white" strokeWidth="2" />
              </svg>
            </LineWrapper>

            {/* Bottom Right Item */}
            <ItemArea className="item-br" style={{ textAlign: 'left' }}>
              <IconWrapper>
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M37.3327 18.666C37.3327 21.1414 36.3494 23.5153 34.599 25.2657C32.8487 27.016 30.4747 27.9993 27.9994 27.9993C25.524 27.9993 23.15 27.016 21.3997 25.2657C19.6493 23.5153 18.666 21.1414 18.666 18.666M37.3327 18.666H18.666M37.3327 18.666C37.3327 16.1907 36.3494 13.8167 34.599 12.0664C32.8487 10.316 30.4747 9.33268 27.9994 9.33268M18.666 18.666C18.666 16.1907 19.6493 13.8167 21.3997 12.0664C23.15 10.316 25.524 9.33268 27.9994 9.33268M27.9994 9.33268V4.66602M13.9993 18.666H41.9994M20.9993 39.666V44.3327M34.9994 39.666V44.3327M27.9994 31.4993C17.0455 31.4993 8.16602 39.8562 8.16602 50.166H47.8327C47.8327 39.8562 38.9532 31.4993 27.9994 31.4993Z" stroke="#0C273C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </IconWrapper>
              <TextContent>
                <ItemTitle>Cumplimiento de plazos</ItemTitle>
                <ItemDesc>y tiempos de obra.</ItemDesc>
              </TextContent>
            </ItemArea>

          </Grid>
        </Container>
      </Section>

      <BottomImageContainer>
        <BottomImage src="/content/service.webp" alt="Service" />
      </BottomImageContainer>
    </>
  );
};

export default Process;

const Section = styled.section`
    background-color: #AECACD;
    padding: 100px 0; 
    position: relative;
    overflow: hidden;
    height: 787px;

    @media (max-width: 1010px) {
        height: auto;
    }
`;

const BackgroundLogo = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%; /* Changed to 100% to fill container */
    height: 100%;
    /* opacity: 0.15; - Removed because SVG has its own opacity */
    pointer-events: none;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    
    svg {
        width: 100%;
        height: auto;
        
    }
`;

const Container = styled.div`
    max-width: var(--container-max, 1280px);
    margin: 0 auto;
    padding: 0 var(--spacing-md, 20px);
    position: relative;
    z-index: 1;
`;

const Grid = styled.div`
    position: relative;
    max-width: 1000px; /* Constrain width for better absolute positioning */
    margin: 0 auto;
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1010px) {
        display: grid;
        grid-template-areas:
            "center center"
            "tl tr"
            "bl br";
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        padding-bottom: 40px;
        height: auto;
    }

    @media (max-width: 768px) {
        grid-template-areas:
            "center"
            "tl"
            "tr"
            "bl"
            "br";
        grid-template-columns: 1fr;
    }
`;

const ItemArea = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center; 
    justify-content: flex-start;
    gap: 16px;
    color: var(--text-dark, #0C273C);
    position: absolute; /* Changed to absolute for desktop */
    z-index: 2;
    padding: 0;
    width: 310px;

    &.item-tl {
        top: 0;
        right: 735px;
        grid-area: tl;

        @media (max-width: 1010px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        @media (max-width: 768px) {
            align-items: flex-start;
            text-align: left;   
        }
    }
    
    &.item-tr {
        top: 40px;
        right: -70px;
        grid-area: tr;

        @media (max-width: 1010px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        @media (max-width: 768px) {
            align-items: flex-start;
            text-align: left;   
        }
    }

    &.item-bl {
        bottom: -50px;
        left: 10px;
        grid-area: bl;

        @media (max-width: 1010px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        @media (max-width: 768px) {
            align-items: flex-start;  
            text-align: left; 
        }
    }

    &.item-br {
        bottom: 20px;
        right: 50px;
        grid-area: br;

        @media (max-width: 1010px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        @media (max-width: 768px) {
            align-items: flex-start;   
            text-align: left;
        }
    }

    @media (max-width: 1010px) {
        position: relative; /* Back to relative/grid for mobile */
        padding: 0 20px;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        bottom: auto !important;
        width: 100%;
    }
`;

const IconWrapper = styled.div`
    display: flex;
    flex-shrink: 0;
`;

const TextContent = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        display: block; /* Allow inline children to wrap together */
    }
`;

const ItemTitle = styled.h3`
    font-family: var(--font-headings, sans-serif);
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 4px;

    @media (max-width: 768px) {
        display: inline;
        margin-bottom: 0;
        margin-right: 0.25em;
    }

    span{
        font-family: var(--font-text, sans-serif);
        font-size: 1.25rem;
        font-weight: 400;
    }

    @media (min-width: 350px) and (max-width: 380px) {
        font-size: 1.1rem;
        span { font-size: 1.1rem; }
    }
`;

const ItemDesc = styled.p`
    font-family: var(--font-text, sans-serif);
    font-size: 1.25rem;
    margin: 0;
    font-weight: 400;
    max-width: 250px;

    @media (max-width: 768px) {
        display: inline;
        max-width: none;
    }

    @media (min-width: 350px) and (max-width: 380px) {
        font-size: 1.05rem;
    }
`;

const TitleArea = styled.div`
    grid-area: center; /* Only relevant for mobile grid */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 2;
    padding: 20px;
    position: relative;
    /* Center in desktop absolute layout */
    margin: 0 auto;
`;

const MainTitle = styled.h2`
    font-family: var(--font-headings, sans-serif);
    font-size: 4rem; 
    line-height: 1.1;
    color: var(--text-dark, #0C273C);
    font-weight: 500;
    white-space: nowrap; 

    @media (max-width: 1010px) {
        font-size: 2.5rem;
        white-space: normal;
    }

    @media (min-width: 350px) and (max-width: 380px) {
        font-size: 2.1rem;
    }
`;

const LineWrapper = styled.div`
    position: absolute;
    z-index: 1;
    pointer-events: none;
    
    svg {
        display: block;
        width: 100%;
        height: auto;
    }

    @media (max-width: 1010px) {
        display: none;
    }

    /* 
       Anchored relative to the centered TitleArea (which is basically center of Grid)
    */

    &.line-tl {
        /* SVG 6: UP-LEFT */
        bottom: 430px; 
        left: -370px; 
        width: 320px;
        transform-origin: bottom right;
        transform: scaleY(-1) scaleX(-1);
    }

    &.line-tr {
        /* SVG 7: UP-RIGHT */
        bottom: 390px;  
        right: -210px; 
        width: 250px; 
        transform-origin: bottom left;
        transform: scaleY(-1) scaleX(-1);
    }

    &.line-bl {
        /* SVG 5: DOWN-LEFT */
        top: 470px; 
        right: 1000px; 
        width: 320px; 
        transform-origin: top right;
        transform: scaleY(-1) scaleX(-1);
    }

    &.line-br {
        /* SVG 8: DOWN-RIGHT */
        top: 410px; 
        left: 890px; 
        width: 300px;
        transform-origin: top left;
        transform: scaleY(-1) scaleX(-1);
    }
`;

const BottomImageContainer = styled.div`
    grid-area: bottom-image;
    position: relative;
    width: 100%;
    height: 355px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    background-color: #97bcc0ff; /* Base color of the photo tint */
`;

const BottomImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transform: rotateY(180deg);
    filter: grayscale(100%) brightness(1.1) contrast(1.2);
    opacity: 0.2; /* This allows the teal background to tint the image perfectly */
`;


