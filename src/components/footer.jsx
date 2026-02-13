import React from 'react';
import styled from 'styled-components';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <FooterWrapper>
            <FooterContent className="container">
                <FooterBrand>
                    <Logo src="/logo.png" alt="Comber Logo" />
                    <BrandDescription>
                        Líderes en soluciones integrales de hormigón y servicios de construcción de alta calidad para proyectos de cualquier escala.
                    </BrandDescription>
                    <SocialLinks>
                        <SocialIcon href="#" aria-label="Facebook"><Facebook size={20} /></SocialIcon>
                        <SocialIcon href="#" aria-label="Instagram"><Instagram size={20} /></SocialIcon>
                        <SocialIcon href="#" aria-label="LinkedIn"><Linkedin size={20} /></SocialIcon>
                    </SocialLinks>
                </FooterBrand>

                <FooterSection>
                    <SectionTitle>Enlaces Rápidos</SectionTitle>
                    <LinksList>
                        <li><FooterLink href="#">Inicio</FooterLink></li>
                        <li><FooterLink href="#">Soluciones en Hormigón</FooterLink></li>
                        <li><FooterLink href="#">Servicios de Construcción</FooterLink></li>
                        <li><FooterLink href="#">Contacto</FooterLink></li>
                    </LinksList>
                </FooterSection>

                <FooterSection>
                    <SectionTitle>Contacto</SectionTitle>
                    <ContactInfo>
                        <ContactItem>
                            <MapPin size={18} />
                            <span>Av. Principal 1234, Ciudad</span>
                        </ContactItem>
                        <ContactItem>
                            <Phone size={18} />
                            <span>+54 9 11 1234 5678</span>
                        </ContactItem>
                        <ContactItem>
                            <Mail size={18} />
                            <span>info@comber.com.ar</span>
                        </ContactItem>
                    </ContactInfo>
                </FooterSection>
            </FooterContent>

            <FooterBottom>
                <div className="container">
                    <Copyright>
                        © {currentYear} Comber. Todos los derechos reservados.
                    </Copyright>
                </div>
            </FooterBottom>
        </FooterWrapper>
    );
};

export default Footer;

const FooterWrapper = styled.footer`
  background-color: var(--primary-color);
  color: var(--text-light);
  padding-top: var(--spacing-xl);
  border-top: 4px solid var(--secondary-color);
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: var(--spacing-xl);
  padding-bottom: var(--spacing-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Logo = styled.img`
  height: 60px;
  width: auto;
  object-fit: contain;
`;

const BrandDescription = styled.p`
  max-width: 350px;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
`;

const SocialIcon = styled.a`
  color: var(--text-light);
  transition: color var(--duration-fast) var(--ease-out);
  
  &:hover {
    color: var(--secondary-color);
    transform: translateY(-2px);
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const SectionTitle = styled.h4`
  color: var(--secondary-color);
  font-family: var(--font-headings);
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const LinksList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

const FooterLink = styled.a`
  color: var(--text-light);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color var(--duration-fast) var(--ease-out);

  &:hover {
    color: var(--secondary-color);
    padding-left: 5px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const FooterBottom = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: var(--spacing-md) 0;
  text-align: center;
`;

const Copyright = styled.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
`;