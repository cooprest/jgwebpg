import Image from 'next/image'
import Link from 'next/link'

export default function Half() {
  return (
    <div className="container pb-5">
      <div className="row text-center text-md-start py-4 my-5">
        <div className="col-md-6 col-lg-3 align-self-center text-center text-md-start text-lg-center mb-5 mb-lg-0">
          <Link href="/" className="text-decoration-none">
            <Image
              width={193}
              height={48}
              src="/img/demos/auto-services/logo-light-.png"
              className="img-fluid"
              alt=""
            />
          </Link>
        </div>
        <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <h5 className="text-transform-none font-weight-bold text-color-light text-4-5 mb-4">
            Nosotros
          </h5>
          <ul className="list list-unstyled">
            <li className="pb-1 mb-2">
              <span className="d-block font-weight-semibold line-height-1 text-color-grey text-3-5">
                WhatsApp
              </span>
              <Link
                href={process.env.NEXT_PUBLIC_WHATSAPP_URL}
                target='blank'
                className="text-color-light custom-text-underline-1 font-weight-medium text-3-5"
              >
                Línea Exclusiva
              </Link>
            </li>
            <li className="pb-1 mb-2">
              <span className="d-block font-weight-semibold line-height-1 text-color-grey text-3-5 mb-1">
                Teléfono
              </span>
              <ul className="list list-unstyled font-weight-light text-3-5 mb-0">
                <li className="text-color-light line-height-3 mb-0">
                  Asesoría:{' '}
                  <Link
                    href={`tel:+57${process.env.NEXT_PUBLIC_PHONE_LINE}`}
                    className="text-decoration-none text-color-light text-color-hover-default"
                  >
                    {process.env.NEXT_PUBLIC_PHONE_LINE}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="pb-1 mb-2">
              <span className="d-block font-weight-semibold line-height-1 text-color-grey text-3-5">
                Correo
              </span>
              <Link
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_CORP}`}
                className="text-decoration-none font-weight-light text-3-5 text-color-light text-color-hover-default"
              >
                {process.env.NEXT_PUBLIC_EMAIL_CORP}
              </Link>
            </li>
          </ul>
          <ul className="social-icons social-icons-medium">
            <li className="social-icons-instagram">
              <Link
                href="http://www.instagram.com/"
                className="no-footer-css"
                target="_blank"
                title="Instagram"
              >
                <i className="fab fa-instagram" />
              </Link>
            </li>
            <li className="social-icons-twitter mx-2">
              <Link
                href="http://www.twitter.com/"
                className="no-footer-css"
                target="_blank"
                title="Twitter"
              >
                <i className="fab fa-twitter" />
              </Link>
            </li>
            <li className="social-icons-facebook">
              <Link
                href="http://www.facebook.com/"
                className="no-footer-css"
                target="_blank"
                title="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-2 mb-5 mb-md-0">
          <h5 className="text-transform-none font-weight-bold text-color-light text-4-5 mb-4">
            Servicios
          </h5>
          <ul className="list list-unstyled mb-0">
            <li className="mb-0">
              <Link href="/servicios/credito-libre-inversion">Crédito Libre Inversion</Link>
            </li>
            <li className="mb-0">
              <Link href="/servicios/prestamo-hipotecario">Préstamo Hipotecario</Link>
            </li>
            <li className="mb-0">
              <Link href="/servicios/credito-para-vehiculo">Crédito Para Vehículo</Link>
            </li>
            <li className="mb-0">
              <Link href="/servicios/prestamo-para-estudio">Préstamo Para Estudio</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-3 offset-lg-1">
          <h5 className="text-transform-none font-weight-bold text-color-light text-4-5 mb-4">
            Horario De Apertura
          </h5>
          <ul className="list list-unstyled list-inline custom-list-style-1 mb-0">
            <li>Lun - Vie: 8:00 am a 5:00 pm</li>
            <li>Sábado: 8:00 am a 5:00 pm</li>
            <li>Domingo: Cerrado</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
