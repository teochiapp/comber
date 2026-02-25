import React from 'react';
import styled from 'styled-components';
import { Calendar } from 'lucide-react';

const CALENDLY_TOKEN = process.env.REACT_APP_CALENDLY_TOKEN;
const WHATSAPP_NUMBER = "5493512630050";

// Formatea la fecha
const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString('es-AR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Argentina/Cordoba',
  }) + ' hs';
};

// Llama a la API de Calendly
const fetchBookingData = async (inviteeUri, eventUri) => {
  const headers = {
    Authorization: `Bearer ${CALENDLY_TOKEN}`,
    'Content-Type': 'application/json',
  };

  const [inviteeRes, eventRes] = await Promise.all([
    fetch(inviteeUri, { headers }),
    fetch(eventUri, { headers }),
  ]);

  const [inviteeData, eventData] = await Promise.all([
    inviteeRes.json(),
    eventRes.json(),
  ]);

  return { invitee: inviteeData.resource, event: eventData.resource };
};

// Construye el texto del WhatsApp
const buildWhatsAppMessage = (invitee, event) => {
  const nombre = invitee?.name || 'Sin nombre';
  const fecha = event?.start_time ? formatDate(event.start_time) : 'Sin fecha';

  const qa = invitee?.questions_and_answers || [];
  const getAnswer = (keyword) => {
    const found = qa.find((q) =>
      q.question.toLowerCase().includes(keyword.toLowerCase())
    );
    return found?.answer || '-';
  };

  const m2 = getAnswer('m');
  const hormigon = getAnswer('hormig');
  const bomba = getAnswer('bomba');
  const ubicacion = getAnswer('ubicaci');

  const text =
    `¡Hola! Tengo una reserva confirmada:
Fecha: ${fecha}
Cliente: ${nombre}
Ubicación: ${ubicacion}
M2: ${m2}
Tipo Hormigón: ${hormigon}
Necesitas bomba? ${bomba}`;

  return encodeURIComponent(text);
};

// --- LÓGICA DE ESCUCHA GLOBAL (SINGLETON) ---
// Variable para evitar ejecuciones simultáneas
let isProcessingBooking = false;

const handleCalendlyMessage = async (e) => {
  // Verificamos que sea el evento de reserva exitosa
  if (e.data?.event !== 'calendly.event_scheduled') return;

  // Si ya estamos procesando uno, salimos para evitar duplicados
  if (isProcessingBooking) return;
  isProcessingBooking = true;

  // Abrimos la pestaña inmediatamente para evitar el bloqueo del navegador
  const newTab = window.open('', '_blank');
  if (newTab) {
    newTab.document.write('<p style="font-family: sans-serif; text-align: center; margin-top: 50px;">Cargando mensaje de WhatsApp...</p>');
  }

  const { invitee, event } = e.data.payload;

  try {
    const { invitee: inviteeData, event: eventData } = await fetchBookingData(
      invitee.uri,
      event.uri
    );
    const msg = buildWhatsAppMessage(inviteeData, eventData);

    if (newTab) {
      newTab.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    }
  } catch (err) {
    console.error('Error al obtener datos de Calendly:', err);
    if (newTab) {
      newTab.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('¡Hola! Acabo de confirmar una reserva en Calendly.')}`;
    }
  } finally {
    // Liberamos el bloqueo después de 5 segundos
    setTimeout(() => {
      isProcessingBooking = false;
    }, 5000);
  }
};

// Registramos el evento una sola vez para toda la aplicación si no está ya registrado
if (typeof window !== 'undefined' && !window.__calendlyListenerAttached) {
  window.addEventListener('message', handleCalendlyMessage);
  window.__calendlyListenerAttached = true;
}

const BookingButton = ({ className, url = "https://calendly.com/combersoluciones" }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <StyledButton onClick={handleClick} className={className}>
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
  gap: var(--spacing-md);
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

  @media (max-width: 380px) {
    padding: 20px 14px;
    font-size: 18px;
  }

  &:hover {
    background-color: #e54d15;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 92, 25, 0.3);
  }

  svg {
    flex-shrink: 0;
  }

  @media (min-width: 300px) and (max-width: 380px) {
    font-size: 15px;
  }
`;
