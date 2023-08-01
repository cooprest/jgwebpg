import Foot from './components/template/footer/Foot'
import Header from './components/template/header/Header'
import './globals.css'
import Notice from './components/notice/Notice'
import WhatsApp from './components/whatsapp/WhatsApp'
import GoogleAnalytics from './components/google-tags/GoogleTag'

export const metadata = {
  title:
    'Cooperativa de Prestamos | Soluciones En Línea Para Préstamos Y Créditos',
  description:
    'Descubre soluciones financieras, confiables y flexibles. Tasas competitivas y plazos a tu medida. Tu futuro económico está en buenas manos.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
        <div className="body">
          <Notice />
          <Header />
          {children}
          <Foot />
          <WhatsApp />
        </div>
      </body>
    </html>
  )
}
