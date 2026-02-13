import React from 'react';
import styled from 'styled-components';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <ContactSection id="contacto">
            <div className="container">
                <Grid>
                    <ContactInfo>
                        <Title>¿Listo para <span>Empezar?</span></Title>
                        <Subtitle>Póngase en contacto con nosotros para una cotización personalizada.</Subtitle>

                        <InfoList>
                            <InfoItem>
                                <IconContainer><Phone size={20} /></IconContainer>
                                <div>
                                    <h4>Teléfono</h4>
                                    <p>+54 9 11 1234 5678</p>
                                </div>
                            </InfoItem>
                            <InfoItem>
                                <IconContainer><Mail size={20} /></IconContainer>
                                <div>
                                    <h4>Email</h4>
                                    <p>proyectos@comber.com.ar</p>
                                </div>
                            </InfoItem>
                            <InfoItem>
                                <IconContainer><MapPin size={20} /></IconContainer>
                                <div>
                                    <h4>Ubicación</h4>
                                    <p>Parque Industrial, Ciudad, Argentina</p>
                                </div>
                            </InfoItem>
                        </InfoList>
                    </ContactInfo>

                    <ContactForm>
                        <FormGroup>
                            <label>Nombre Completo</label>
                            <input type="text" placeholder="Ej: Juan Pérez" />
                        </FormGroup>
                        <FormGroup>
                            <label>Correo Electrónico</label>
                            <input type="email" placeholder="email@ejemplo.com" />
                        </FormGroup>
                        <FormGroup>
                            <label>Mensaje</label>
                            <textarea rows="4" placeholder="Cuéntenos sobre su proyecto..."></textarea>
                        </FormGroup>
                        <SubmitButton type="submit">
                            Enviar Consulta <Send size={18} />
                        </SubmitButton>
                    </ContactForm>
                </Grid>
            </div>
        </ContactSection>
    );
};

export default Contact;

const ContactSection = styled.section`
  padding: var(--spacing-xl) 0;
  background-color: var(--overlay);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div``;

const Title = styled.h2`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
  span { color: var(--secondary-color); }
`;

const Subtitle = styled.p`
  margin-bottom: var(--spacing-lg);
  opacity: 0.8;
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const InfoItem = styled.div`
  display: flex;
  gap: var(--spacing-md);
  align-items: center;

  h4 { color: var(--primary-color); font-size: 1rem; }
  p { font-size: 0.95rem; opacity: 0.7; }
`;

const IconContainer = styled.div`
  color: var(--secondary-color);
  background: white;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-sm);
`;

const ContactForm = styled.form`
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label { font-size: 0.85rem; font-weight: 600; color: var(--primary-color); }
  input, textarea {
    padding: var(--spacing-sm) var(--spacing-md);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    font-family: var(--font-text);
    &:focus { outline: 1px solid var(--secondary-color); border-color: var(--secondary-color); }
  }
`;

const SubmitButton = styled.button`
  background: var(--primary-color);
  color: white;
  padding: 0.8rem;
  border-radius: var(--radius-sm);
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  transition: all var(--duration-fast);

  &:hover {
    background: var(--secondary-color);
    transform: translateY(-2px);
  }
`;
