import 'react-toastify/dist/ReactToastify.min.css'
import GoogleAnalytics from './components/google-tags/GoogleTag'
import Notice from './components/notice/Notice'
import Foot from './components/template/footer/Foot'
import Header from './components/template/header/Header'
import WhatsApp from './components/whatsapp/WhatsApp'
import './globals.css'

export const metadata = {
  title:
    'Cooperativa de Prestamos | Soluciones En Línea Para Préstamos Y Créditos',
  description:
    'Descubre soluciones financieras, confiables y flexibles. Tasas competitivas y plazos a tu medida. Tu futuro económico está en buenas manos.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics
        GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID}
      />
      <body>
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
