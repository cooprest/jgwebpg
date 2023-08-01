import Link from 'next/link'

export default function CallUsService() {
  return (
    <div className="card bg-primary custom-border-radius-1">
      <div className="card-body text-center py-5 my-2">
        <h2 className="text-color-light font-weight-medium text-3 line-height-2 line-height-sm-1 mb-3 pb-1">
          ¿NECESITA UNA AYUDA ECONÓMICA PARA EMPRENDER SU PROYECTO?
        </h2>
        <h3 className="font-weight-bold text-color-light text-transform-none text-8 line-height-3 mb-3">
          Haz Realidad Tus Sueños Con Nuestro Apoyo Financiero.
        </h3>
        <p className="font-weight-bold text-color-light text-4 opacity-7 mb-5">
          Solicita Ahora y Alcanza Tus Metas Con Nosotros!
        </p>
        <div className="feature-box custom-feature-box-justify-center align-items-center text-start mb-4">
          <div className="feature-box-icon bg-transparent">
            <i className="icons icon-phone text-8 text-color-light" />
          </div>
          <div className="feature-box-info line-height-2 ps-1">
            <span className="d-block text-4 font-weight-medium text-color-light mb-1">
              ¡Llame Ya!
            </span>
            <strong className="text-6">
              <Link
                href={`tel:+57${process.env.NEXT_PUBLIC_PHONE_LINE}`}
                className="text-color-light text-decoration-none"
              >
                {process.env.NEXT_PUBLIC_PHONE_LINE}
              </Link>
            </strong>
          </div>
        </div>
        <Link
          href="/contactenos"
          className="btn btn-light btn-outline custom-btn-border-radius font-weight-bold text-color-light text-color-hover-dark bg-color-hover-light btn-px-5 btn-py-3"
        >
          SOLICITAR UN ASESOR
        </Link>
      </div>
    </div>
  )
}
