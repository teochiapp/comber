import React from 'react';
import styled from 'styled-components';
import { Calendar } from 'lucide-react';

const BookingButton = ({ className, href = "#contacto" }) => {
    return (
        <StyledButton href={href} className={className}>
            <Calendar size={20} />
            Reservar Turno
        </StyledButton>
    );
};

export default BookingButton;

const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: var(--secondary-color);
  color: var(--text-light);
  padding: 16px 24px;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  font-family: var(--font-text);
  font-size: 1rem;
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
`;
