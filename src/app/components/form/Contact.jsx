import Link from 'next/link'
import FormContact from './FormContact'

export default function Contact() {
  return (
    <div id="get-call" className="container py-4 my-5">
      <div className="row align-items-center">
        <div className="col-lg-5 col-xl-4 offset-xl-1 mb-5 mb-lg-0">
          <div className="overflow-hidden">
            <h2
              className="text-color-dark font-weight-bold line-height-3 text-5-5 mb-0 appear-animation"
              data-appear-animation="maskUp"
              data-appear-animation-delay={250}
            >
              Cooperativa de Prestamos
            </h2>
          </div>
          <div className="overflow-hidden">
            <Link
              href="#"
              className="d-inline-block custom-text-underline-1 font-weight-bold border-color-primary text-decoration-none text-3-5 appear-animation"
              data-appear-animation="maskUp"
              data-appear-animation-delay={500}
            >
              TU SOLUCIÓN EN LÍNEA
            </Link>
          </div>
          <ul
            className="list list-unstyled text-color-dark font-weight-bold text-4 py-2 my-4 appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={750}
          >
            <li className="d-flex align-items-center mb-2">
              <i className="icons icon-envelope text-color-dark me-2" />
              Correo:
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_CORP}`}
                className="text-color-dark text-color-hover-primary text-decoration-none ms-1"
              >
                {process.env.NEXT_PUBLIC_EMAIL_CORP}
              </a>
            </li>
            <li className="d-flex align-items-center mb-0">
              <i className="icons icon-phone text-color-dark me-2" />
              Teléfono:
              <a
                href={`tel:+57${process.env.NEXT_PUBLIC_PHONE_LINE}`}
                className="text-color-dark text-color-hover-primary text-decoration-none ms-1"
              >
                {process.env.NEXT_PUBLIC_PHONE_LINE}
              </a>
            </li>
          </ul>
          <p
            className="mb-0 appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={1000}
          >
            Nuestro equipo de expertos está listo para responder tus preguntas,
            brindarte asesoría personalizada y guiarte en cada paso del proceso.
          </p>
        </div>
        <div
          className="col-lg-6 col-xl-5 offset-lg-1 appear-animation"
          data-appear-animation="fadeInUpShorter"
          data-appear-animation-delay={1250}
        >
          <FormContact />
        </div>
      </div>
    </div>
  )
}
