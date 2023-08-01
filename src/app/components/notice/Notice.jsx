import Link from 'next/link'

export default function Notice() {
  return (
    <div className="notice-top-bar bg-primary" data-sticky-start-at={100}>
      <button
        className="hamburguer-btn hamburguer-btn-light notice-top-bar-close m-0 active"
        data-set-active="false"
      >
        <span className="close">
          <span />
          <span />
        </span>
      </button>
      <div className="container">
        <div className="row justify-content-center py-2">
          <div className="col-9 col-md-12 text-center">
            <p className="text-color-light mb-0">
              <strong>LÍNEA DIRECTA WHATSAPP </strong> - Consulta Totalmente Gratis -
              <strong>
                <Link
                  href="#"
                  className="text-color-light text-decoration-none custom-text-underline-1"
                >
                  Enviar mensaje aquí
                </Link>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
