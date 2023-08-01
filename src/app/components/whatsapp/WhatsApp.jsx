'use client'

import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function WhatsApp() {
  return (
    <FloatingWhatsApp
      phoneNumber={`+57${process.env.NEXT_PUBLIC_PHONE_WHATSAPP}`}
      accountName="Milton Torres"
      chatMessage={'¡Hola! 🤝 \n¿En qué podemos ayudarte?'}
      placeholder="Mensaje"
      avatar="/img/demos/auto-services/team-1.jpg"
      statusMessage="Normalmente responde en 15 min"
      messageDelay={1}
      notification
      notificationDelay={20}
      notificationSound
    />
  )
}
