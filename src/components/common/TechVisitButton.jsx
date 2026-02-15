import React from 'react';
import styled from 'styled-components';
import { Home } from 'lucide-react';

const TechVisitButton = () => {
  const phoneNumber = "5491112345678"; // Reemplazar con el número real
  const message = encodeURIComponent("¡Hola! Me gustaría solicitar una visita técnica para mi obra.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <StyledButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <IconWrapper>
        <Home size={20} />
      </IconWrapper>
      <span>Solicitar visita técnica</span>
    </StyledButton>
  );
};

export default TechVisitButton;

const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-md);
  background-color: var(--secondary-color);
  color: var(--text-light);
  padding: 16px 24px;
  border-radius: var(--radius-md);
  font-family: var(--font-text);
  font-size: 20px;
  font-weight: 500;
  transition: all var(--duration-normal) var(--ease-out);
  cursor: pointer;
  text-decoration: none;
  border: none;

  &:hover {
    background-color: #e54d15;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 92, 25, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  span {
    letter-spacing: 0.5px;
  }

  @media (max-width: 350px) {
    padding: 20px 14px;
    font-size: 18px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
`;
