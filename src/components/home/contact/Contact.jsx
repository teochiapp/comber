import React from 'react';
import styled from 'styled-components';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <ContactSection id="contacto">
      <div className="container">
        <Grid>
          <ContactHeader>
            <Title>¿Qué necesitas?</Title>
            <Subtitle>Completá el siguiente formulario y nos pondremos en contacto a la brevedad.</Subtitle>
          </ContactHeader>

          <FormContainer>
            <ContactForm>
              <FormGroupFull>
                <label>Motivo de consulta <span>*</span></label>
                <select defaultValue="">
                  <option value="" disabled>Seleccionar opción</option>
                  <option value="presupuesto">Presupuesto para obra</option>
                  <option value="bombeo">Servicio de bombeo</option>
                  <option value="hormigon">Compra de hormigón</option>
                  <option value="otro">Otro</option>
                </select>
              </FormGroupFull>

              <FormRow>
                <FormGroup>
                  <label>Nombre y Apellido <span>*</span></label>
                  <input type="text" placeholder="John" />
                </FormGroup>
                <FormGroup>
                  <label>Empresa (opcional)</label>
                  <input type="text" placeholder="Doe" />
                </FormGroup>
              </FormRow>

              <FormRow>
                <FormGroup>
                  <label>Email <span>*</span></label>
                  <input type="email" placeholder="example@email.com" />
                </FormGroup>
                <FormGroup>
                  <label>Teléfono <span>*</span></label>
                  <input type="tel" placeholder="+54 _ _ _ - _ _ _ - _ _ _ _" />
                </FormGroup>
              </FormRow>

              <FormGroupFull>
                <label>Mensaje <span>*</span></label>
                <textarea rows="4" placeholder="Hola, me gustaría solicitar una visita técnica para pintar mi casa. Tiene tres dormitorios y una superficie aproximada de 120 metros cuadrados. Agradecería que me contactaran para coordinar una fecha. ¡Gracias!"></textarea>
              </FormGroupFull>

              <SubmitWrapper>
                <SubmitButton type="submit">
                  ENVIAR
                </SubmitButton>
              </SubmitWrapper>
            </ContactForm>
          </FormContainer>
        </Grid>
      </div>
    </ContactSection>
  );
};

export default Contact;

const ContactSection = styled.section`
  padding: 100px 0;
  background-color: var(--background);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 60px;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const ContactHeader = styled.div`
  max-width: 450px;
`;

const Title = styled.h3`
  font-size: clamp(2.5rem, 5vw, 2.8rem);
  font-weight: 400;
  line-height: 1.1;
  color: var(--primary-color);
  margin-bottom: 24px;
  font-family: var(--font-text);
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--primary-color);
  opacity: 0.8;
  font-family: var(--font-text);
`;

const FormContainer = styled.div`
  background: #FAFAFA;
  padding: 30px 30px;
  border-radius: 20px;
  border-top-left-radius: 0;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.08);
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    top: -4vh;
    left: 0;
    width: 340px;
    height: 4vh;
    background: #FAFAFA;
    border-radius: 8px 22px 0 0;
    z-index: 1;
  }

  @media (max-width: 600px) {
    padding: 40px 20px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  position: relative;
  z-index: 2;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  label {
    font-size: 1rem;
    font-weight: 600;
    color: var(--primary-color);
    font-family: var(--font-text);

    span {
      color: var(--secondary-color);
    }
  }

  input, select, textarea {
    background-color: #F1F1F1;
    border: 1px solid #E2E2E2;
    border-radius: 8px;
    padding: 16px 20px;
    font-size: 1rem;
    color: var(--primary-color);
    font-family: var(--font-text);
    transition: all 0.3s ease;

    &::placeholder {
      color: #ADB5BD;
    }

    &:focus {
      outline: none;
      border-color: var(--secondary-color);
      background-color: white;
      box-shadow: 0 0 0 4px rgba(255, 92, 25, 0.05);
    }
  }

  select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%230C273C' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 20px center;
    padding-right: 45px;
  }
`;

const FormGroupFull = styled(FormGroup)`
  width: 100%;
`;

const SubmitWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const SubmitButton = styled.button`
  background-color: var(--secondary-color);
  color: white;
  padding: 18px 50px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
  transition: all 0.3s var(--ease-out);

  &:hover {
    background-color: #E54D15;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 92, 25, 0.2);
  }
`;
