import React from 'react';
import styled from 'styled-components';
import { HardHat, Truck, Ruler, ClipboardCheck } from 'lucide-react';

const Services = () => {
    const servicesList = [
        {
            icon: <HardHat size={32} />,
            title: "Dirección de Obra",
            description: "Supervisión profesional para garantizar el cumplimiento de plazos y calidad."
        },
        {
            icon: <Truck size={32} />,
            title: "Logística y Transporte",
            description: "Flota propia para asegurar la entrega de materiales en tiempo récord."
        },
        {
            icon: <Ruler size={32} />,
            title: "Proyectos a Medida",
            description: "Diseño y planificación adaptada a los requerimientos técnicos de su obra."
        },
        {
            icon: <ClipboardCheck size={32} />,
            title: "Control de Calidad",
            description: "Ensayos y certificaciones para dar máxima seguridad a su inversión."
        }
    ];

    return (
        <ServicesSection id="servicios">
            <div className="container">
                <Header>
                    <Title>Servicios Profesionales</Title>
                    <Subtitle>Compromiso total con la excelencia constructiva.</Subtitle>
                </Header>
                <Grid>
                    {servicesList.map((service, index) => (
                        <ServiceCard key={index}>
                            <IconWrapper>{service.icon}</IconWrapper>
                            <Content>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </Content>
                        </ServiceCard>
                    ))}
                </Grid>
            </div>
        </ServicesSection>
    );
};

export default Services;

const ServicesSection = styled.section`
  padding: var(--spacing-xl) 0;
  background-color: var(--overlay);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: var(--primary-color);
`;

const Subtitle = styled.p`
  color: var(--text-dark);
  opacity: 0.7;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
`;

const ServiceCard = styled.div`
  display: flex;
  gap: var(--spacing-md);
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: transform var(--duration-normal) var(--ease-out);

  &:hover {
    transform: scale(1.02);
  }
`;

const IconWrapper = styled.div`
  color: var(--secondary-color);
  flex-shrink: 0;
`;

const Content = styled.div`
  h3 {
    margin-bottom: var(--spacing-xs);
    color: var(--primary-color);
  }
  p {
    font-size: 0.9rem;
    color: var(--text-dark);
    opacity: 0.8;
  }
`;
