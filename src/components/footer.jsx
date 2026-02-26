import React from 'react';
import styled from 'styled-components';
import { ThumbsUp } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.95605 6.83222C5.95605 6.95009 6.00286 7.06314 6.08617 7.14649C6.16949 7.22984 6.28248 7.27666 6.40031 7.27666C6.51813 7.27666 6.63113 7.22984 6.71444 7.14649C6.79776 7.06314 6.84456 6.95009 6.84456 6.83222V5.94333C6.84456 5.82546 6.79776 5.71241 6.71444 5.62906C6.63113 5.54571 6.51813 5.49889 6.40031 5.49889C6.28248 5.49889 6.16949 5.54571 6.08617 5.62906C6.00286 5.71241 5.95605 5.82546 5.95605 5.94333V6.83222ZM5.95605 6.83222C5.95605 8.01096 6.42411 9.14142 7.25724 9.97491C8.09038 10.8084 9.22036 11.2767 10.3986 11.2767M10.3986 11.2767H11.2871C11.4049 11.2767 11.5179 11.2298 11.6012 11.1465C11.6846 11.0631 11.7314 10.9501 11.7314 10.8322C11.7314 10.7143 11.6846 10.6013 11.6012 10.5179C11.5179 10.4346 11.4049 10.3878 11.2871 10.3878H10.3986C10.2808 10.3878 10.1678 10.4346 10.0845 10.5179C10.0011 10.6013 9.95434 10.7143 9.95434 10.8322C9.95434 10.9501 10.0011 11.0631 10.0845 11.1465C10.1678 11.2298 10.2808 11.2767 10.3986 11.2767ZM0.625 16.61L2.09104 13.2322C0.969442 11.6394 0.467438 9.6918 0.679239 7.75498C0.891039 5.81815 1.80208 4.02523 3.2414 2.71268C4.68071 1.40013 6.54935 0.658188 8.49664 0.626087C10.4439 0.593985 12.336 1.27393 13.8177 2.53833C15.2995 3.80272 16.2691 5.56464 16.5446 7.49343C16.82 9.42222 16.3825 11.3853 15.3139 13.0142C14.2454 14.6432 12.6194 15.826 10.741 16.3408C8.86267 16.8555 6.86111 16.6668 5.11197 15.81L0.625 16.61Z" stroke="#0C273C" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 1.62651C11.3855 1.62651 11.7108 1.62651 12.6867 1.62651C13.5542 1.62651 13.988 1.84337 14.3133 1.95181C14.747 2.16868 15.0723 2.27711 15.3976 2.60241C15.7229 2.92771 15.9398 3.25301 16.0482 3.68675C16.1566 4.01205 16.2651 4.44578 16.3735 5.31325C16.3735 6.28916 16.3735 6.50602 16.3735 9C16.3735 11.494 16.3735 11.7108 16.3735 12.6867C16.3735 13.5542 16.1566 13.988 16.0482 14.3133C15.8313 14.747 15.7229 15.0723 15.3976 15.3976C15.0723 15.7229 14.747 15.9398 14.3133 16.0482C13.988 16.1566 13.5542 16.2651 12.6867 16.3735C11.7108 16.3735 11.494 16.3735 9 16.3735C6.50602 16.3735 6.28916 16.3735 5.31325 16.3735C4.44578 16.3735 4.01205 16.1566 3.68675 16.0482C3.25301 15.8313 2.92771 15.7229 2.60241 15.3976C2.27711 15.0723 2.06024 14.747 1.95181 14.3133C1.84337 13.988 1.73494 13.5542 1.62651 12.6867C1.62651 11.7108 1.62651 11.494 1.62651 9C1.62651 6.50602 1.62651 6.28916 1.62651 5.31325C1.62651 4.44578 1.84337 4.01205 1.95181 3.68675C2.16868 3.25301 2.27711 2.92771 2.60241 2.60241C2.92771 2.27711 3.25301 2.06024 3.68675 1.95181C4.01205 1.84337 4.44578 1.73494 5.31325 1.62651C6.28916 1.62651 6.61446 1.62651 9 1.62651ZM9 0C6.50602 0 6.28916 0 5.31325 0C4.33735 0 3.68675 0.216868 3.14458 0.433736C2.60241 0.650603 2.06024 0.975904 1.51807 1.51807C0.975904 2.06024 0.759037 2.49398 0.433736 3.14458C0.216868 3.68675 0.108434 4.33735 0 5.31325C0 6.28916 0 6.61446 0 9C0 11.494 0 11.7108 0 12.6867C0 13.6627 0.216868 14.3133 0.433736 14.8554C0.650603 15.3976 0.975904 15.9398 1.51807 16.4819C2.06024 17.0241 2.49398 17.241 3.14458 17.5663C3.68675 17.7831 4.33735 17.8916 5.31325 18C6.28916 18 6.61446 18 9 18C11.3855 18 11.7108 18 12.6867 18C13.6627 18 14.3133 17.7831 14.8554 17.5663C15.3976 17.3494 15.9398 17.0241 16.4819 16.4819C17.0241 15.9398 17.241 15.506 17.5663 14.8554C17.7831 14.3133 17.8916 13.6627 18 12.6867C18 11.7108 18 11.3855 18 9C18 6.61446 18 6.28916 18 5.31325C18 4.33735 17.7831 3.68675 17.5663 3.14458C17.3494 2.60241 17.0241 2.06024 16.4819 1.51807C15.9398 0.975904 15.506 0.759037 14.8554 0.433736C14.3133 0.216868 13.6627 0.108434 12.6867 0C11.7108 0 11.494 0 9 0Z" fill="#0C273C" />
    <path d="M9 4.33735C6.39759 4.33735 4.33735 6.39759 4.33735 9C4.33735 11.6024 6.39759 13.6627 9 13.6627C11.6024 13.6627 13.6627 11.6024 13.6627 9C13.6627 6.39759 11.6024 4.33735 9 4.33735ZM9 12.0361C7.3735 12.0361 5.96386 10.7349 5.96386 9C5.96386 7.3735 7.26506 5.96386 9 5.96386C10.6265 5.96386 12.0361 7.26506 12.0361 9C12.0361 10.6265 10.6265 12.0361 9 12.0361Z" fill="#0C273C" />
    <path d="M13.7711 5.31325C14.3699 5.31325 14.8554 4.82778 14.8554 4.22892C14.8554 3.63005 14.3699 3.14458 13.7711 3.14458C13.1722 3.14458 12.6867 3.63005 12.6867 4.22892C12.6867 4.82778 13.1722 5.31325 13.7711 5.31325Z" fill="#0C273C" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 9C18 4.05 13.95 0 9 0C4.05 0 0 4.05 0 9C0 13.5 3.2625 17.2125 7.5375 17.8875V11.5875H5.2875V9H7.5375V6.975C7.5375 4.725 8.8875 3.4875 10.9125 3.4875C11.925 3.4875 12.9375 3.7125 12.9375 3.7125V5.9625H11.8125C10.6875 5.9625 10.35 6.6375 10.35 7.3125V9H12.825L12.375 11.5875H10.2375V18C14.7375 17.325 18 13.5 18 9Z" fill="#0C273C" />
  </svg>
);

const phoneNumber = "5493512630050"; // Reemplazar con el número real
const message = encodeURIComponent("Hola, ví tu anuncio en la web y quisiera coordinar una visita para");
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <Watermark>
          <svg width="100%" height="100%" viewBox="0 0 335 231" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M167.892 86.865V226.697C167.67 226.697 167.447 226.702 167.225 226.702C137.352 226.702 111.969 225.154 91.0739 222.059C70.1788 219.118 53.308 213.004 40.4615 203.717C27.6149 194.276 18.2508 180.191 12.3692 161.463C6.51227 142.813 3.57139 117.947 3.5469 86.865H167.892Z" stroke="currentColor" stroke-width="8" />
              <path d="M330.898 87.0584C330.861 118.05 327.925 142.852 322.08 161.463C316.198 180.191 306.834 194.276 293.988 203.717C281.141 213.004 264.27 219.118 243.375 222.059C222.806 225.129 197.669 226.667 167.965 226.692C171.233 124.648 281.834 90.0873 330.898 87.0584Z" stroke="currentColor" stroke-width="8" />
              <path d="M168.226 -50.9648C197.816 -50.9308 222.866 -49.3874 243.375 -46.3263C264.27 -43.2308 281.141 -37.0397 293.988 -27.753C306.834 -18.4663 316.198 -4.69106 322.08 13.5727C327.962 31.8365 330.902 56.1367 330.902 86.4732C330.902 86.5813 330.898 86.6893 330.898 86.7972C227.398 84.2659 173.005 -5.35893 168.226 -50.9648Z" stroke="currentColor" stroke-width="8" />
              <path d="M167.742 -50.9697C164.012 18.8157 82.3193 84.1135 3.5469 86.7682C3.54684 86.6699 3.5469 86.5716 3.5469 86.4732C3.5469 56.1367 6.48768 31.8365 12.3692 13.5727C18.2508 -4.69105 27.6149 -18.4663 40.4615 -27.753C53.308 -37.0397 70.1788 -43.2308 91.0739 -46.3263C111.969 -49.4219 137.352 -50.9697 167.225 -50.9697C167.397 -50.9697 167.57 -50.9698 167.742 -50.9697Z" stroke="currentColor" stroke-width="8" />
            </g>
          </svg>
        </Watermark>
        <TopSection>
          <BigTitle>Servicios claros, trabajos bien hechos.</BigTitle>
        </TopSection>

        <Separator />

        <MainGrid>
          <BrandCol>
            <LogoImg src="/logo.png" alt="COMBER" />
            <Description>
              Completá el siguiente formulario y nos pondremos en contacto a la brevedad.
            </Description>
            <ButtonContainer>
              <ThumbButton href="#contacto">
                <ThumbsUp size={24} />
                Trabajá con nosotros
              </ThumbButton>

            </ButtonContainer>
          </BrandCol>

          <RightWrapper>
            <LinksCol>
              <FooterLink href="#inicio">Inicio</FooterLink>
              <FooterLink href="#soluciones-hormigon">Soluciones en Hormigón</FooterLink>
              <FooterLink href="#servicios">Servicios de construcción</FooterLink>
              <FooterLink href="#nosotros">Nosotros</FooterLink>
              <FooterLink href="#contacto">Contacto</FooterLink>
            </LinksCol>

            <SocialCol>
              <SocialGrid>
                <IconCircle href={whatsappUrl} aria-label="WhatsApp" target='_blank'>
                  <WhatsAppIcon />
                </IconCircle>
                <IconRow>
                  <IconCircle href="https://www.instagram.com/combersoluciones/" aria-label="Instagram" target='_blank'>
                    <InstagramIcon />
                  </IconCircle>
                  <IconCircle href="https://www.facebook.com/profile.php?id=61587718792709" aria-label="Facebook" target='_blank'>
                    <FacebookIcon />
                  </IconCircle>
                </IconRow>
              </SocialGrid>

              <CopyText>
                © 2026 — Copyright <span className="mobile-sep">| </span><br className="desktop-br" /> All Rights reserved
              </CopyText>
            </SocialCol>
          </RightWrapper>
        </MainGrid>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  background-color: var(--primary-color);
  padding: 80px 10px 60px 10px;
  position: relative;
  overflow: hidden;
  color: #ffffff;

  @media (max-width: 768px) {
    padding: 60px 0 40px 0;
  }
`;

const TopSection = styled.div`
  margin-bottom: 40px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const BigTitle = styled.h2`
  font-family: var(--font-headings);
  font-size: 40px;
  font-weight: 400;
  max-width: 800px;
  line-height: 1.2;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 32px;
    max-width: 313px;
    margin: 0 auto;
  }

  @media (min-width: 350px) and (max-width: 380px) {
    font-size: 28px;
  }
`;

const Separator = styled.hr`
  border: 0;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  margin-bottom: 60px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const MainGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 60px;
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    gap: 80px;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  gap: 140px; /* Gap between Links and Social */
  
  @media (max-width: 1200px) {
    gap: 60px;
  }

  @media (max-width: 1000px) {
    width: 100%;
    justify-content: space-between;
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 60px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const BrandCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 450px;

  @media (max-width: 768px) {
    align-items: center;
    max-width: 100%;
  }
`;

const LogoImg = styled.img`
  height: 40px;
  width: auto;
  align-self: flex-start;

  @media (max-width: 768px) {
    align-self: center;
    height: 34.19px;
  }
`;

const Description = styled.p`
  font-family: var(--font-text);
  font-size: 20px;
  line-height: 1.4;
  opacity: 0.9;
  font-weight: 400;
  min-width: 520px;

  @media (max-width: 768px) {
    min-width: unset;
    font-size: 18px;
    max-width: 320px;
  }

  @media (min-width: 350px) and (max-width: 380px) {
    font-size: 16px;
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin: 20px auto 0 auto;
  }
`;

const ThumbButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: var(--secondary-color);
  color: #ffffff;
  padding: 18px 28px;
  border-radius: 12px;
  font-family: var(--font-text);
  font-size: 1.25rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(255, 92, 25, 0.3);
  }

  @media (max-width: 768px) {
    padding: 14px 24px;
    font-size: 1.1rem;
  }

  @media (min-width: 350px) and (max-width: 380px) {
    font-size: 0.95rem;
  }
`;




const LinksCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-family: var(--font-text);
  font-size: 20px;
  opacity: 0.8;
  font-weight: 400;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 350px) and (max-width: 380px) {
    font-size: 16px;
  }
`;

const SocialCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 991px) {
    align-items: flex-start;
    gap: 40px;
  }

  @media (max-width: 768px) {
    align-items: center;
    gap: 30px;
  }
`;

const SocialGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;

  @media (max-width: 991px) {
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`;

const IconRow = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const IconCircle = styled.a`
  width: 44px;
  height: 44px;
  background-color: #ffffff;
  color: #0C273C;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    width: 22px;
    height: 22px;
  }
`;

const CopyText = styled.p`
  font-family: var(--font-text);
  font-size: 0.9rem;
  opacity: 0.6;
  text-align: right;
  line-height: 1.4;

  .mobile-sep {
    display: none;
  }

  @media (max-width: 991px) {
    text-align: left;
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: 12px;
    
    .mobile-sep {
      display: inline;
    }
    .desktop-br {
      display: none;
    }
  }

  @media (min-width: 350px) and (max-width: 380px) {
    font-size: 11px;
  }
`;

const Watermark = styled.div`
  position: absolute;
  top: -117px;
  right: 17px;
  width: 327.36px;
  height: 277.67px;
  opacity: 0.3;
  color: #040d14ff;
  pointer-events: none;
  z-index: -1; /* Place behind text but inside container's zIndex: 1 */

  @media (max-width: 1000px) {
    right: 0px;
  }

  @media (max-width: 768px) {
    top: -50px;
    right: 25%;
    transform: translateX(50%);
    opacity: 0.2;
    z-index: 0;
  }
`;