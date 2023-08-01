import Link from 'next/link'

export default function Faq() {
  return (
    <div className="container py-5 my-5">
      <div className="row justify-content-center pb-3 mb-4">
        <div className="col-lg-9 col-xl-8 text-center">
          <div className="overflow-hidden">
            <h2
              className="font-weight-bold text-color-dark line-height-1 mb-0 appear-animation"
              data-appear-animation="maskUp"
              data-appear-animation-delay={250}
            >
              Preguntas Frecuentes
            </h2>
          </div>
          <div className="d-inline-block custom-divider divider divider-primary divider-small my-3">
            <hr
              className="my-0 appear-animation"
              data-appear-animation="customLineProgressAnim"
              data-appear-animation-delay={650}
            />
          </div>
          <p
            className="font-weight-light text-3-5 mb-0 appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={500}
          >
            En nuestra empresa, entendemos que nuestros clientes pueden tener
            preguntas y dudas sobre nuestros servicios financieros.
          </p>
        </div>
      </div>
      <div className="row row-gutter-sm">
        <div className="col-md-8 col-lg-9 mb-5 mb-md-0">
          <svg
            className="custom-svg-2 overflow-visible"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 185 151"
          >
            <g
              data-plugin-float-element=""
              data-plugin-options="{'startPos': 'top', 'speed': 0.1, 'transition': true, 'transitionDuration': 2000, 'isInsideSVG': true}"
            >
              <path
                fill="#F4F4F4"
                className="appear-animation"
                data-appear-animation="fadeInLeftShorterPlus"
                data-appear-animation-delay={850}
                d="M34.81,102.81L5.18,73.18c-2.13-2.13-2.13-5.59,0-7.72l29.63-29.63c2.13-2.13,5.59-2.13,7.72,0l29.63,29.63
                        c2.13,2.13,2.13,5.59,0,7.72l-29.63,29.63C40.4,104.94,36.94,104.94,34.81,102.81z"
              />
            </g>
            <g
              data-plugin-float-element=""
              data-plugin-options="{'startPos': 'top', 'speed': 0.2, 'transition': true, 'transitionDuration': 2500, 'isInsideSVG': true}"
            >
              <path
                fill="#F4F4F4"
                className="appear-animation"
                data-appear-animation="fadeInLeftShorterPlus"
                data-appear-animation-delay={1000}
                d="M92.49,35.35L80.4,23.26c-1.75-1.75-1.75-4.59,0-6.34L92.49,4.83c1.75-1.75,4.59-1.75,6.34,0l12.09,12.09
                        c1.75,1.75,1.75,4.59,0,6.34L98.83,35.35C97.08,37.1,94.24,37.1,92.49,35.35z"
              />
            </g>
            <g
              data-plugin-float-element=""
              data-plugin-options="{'startPos': 'top', 'speed': 0.3, 'transition': true, 'transitionDuration': 3000, 'isInsideSVG': true}"
            >
              <path
                fill="#F4F4F4"
                className="appear-animation"
                data-appear-animation="fadeInLeftShorterPlus"
                data-appear-animation-delay={1150}
                d="M129.88,148.41l-43.21-43.21c-2.13-2.13-2.13-5.59,0-7.72l43.21-43.21c2.13-2.13,5.59-2.13,7.72,0l43.21,43.21
                        c2.13,2.13,2.13,5.59,0,7.72l-43.21,43.21C135.46,150.54,132.01,150.54,129.88,148.41z"
              />
            </g>
          </svg>
          <div
            className="accordion custom-accordion-style-1 appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={750}
            id="accordion1"
          >
            <div className="card card-default">
              <div className="card-header" id="collapse1HeadingOne">
                <h4 className="card-title m-0">
                  <Link
                    href=""
                    prefetch={false}
                    className="accordion-toggle text-color-dark font-weight-bold collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1One"
                    aria-expanded="false"
                    aria-controls="collapse1One"
                  >
                    1 - ¿Cómo solicito un préstamo en línea?
                  </Link>
                </h4>
              </div>
              <div
                id="collapse1One"
                className="collapse"
                aria-labelledby="collapse1HeadingOne"
                data-bs-parent="#accordion1"
              >
                <div className="card-body">
                  <p className="mb-0">
                    Es simple. Completa nuestro formulario en línea con tus
                    datos personales, selecciona el monto y plazo deseados, y
                    envía la solicitud. Nuestro equipo evaluará tu solicitud y
                    te daremos una respuesta en poco tiempo.
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-default">
              <div className="card-header" id="collapse1HeadingTwo">
                <h4 className="card-title m-0">
                  <Link
                    href=""
                    prefetch={false}
                    className="accordion-toggle text-color-dark font-weight-bold collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1Two"
                    aria-expanded="false"
                    aria-controls="collapse1Two"
                  >
                    2 - ¿Cuáles son los requisitos para obtener un crédito?
                  </Link>
                </h4>
              </div>
              <div
                id="collapse1Two"
                className="collapse"
                aria-labelledby="collapse1HeadingTwo"
                data-bs-parent="#accordion1"
              >
                <div className="card-body">
                  <p className="mb-0">
                    Los requisitos varían según el tipo de crédito, pero en
                    general, necesitas ser mayor de edad, tener ingresos
                    demostrables y presentar una identificación válida. No te
                    preocupes si tienes un historial crediticio limitado, ¡aún
                    puedes calificar!
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-default">
              <div className="card-header" id="collapse1HeadingThree">
                <h4 className="card-title m-0">
                  <Link
                    href=""
                    prefetch={false}
                    className="accordion-toggle text-color-dark font-weight-bold collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1Three"
                    aria-expanded="false"
                    aria-controls="collapse1Three"
                  >
                    3 - ¿En cuánto tiempo recibiré el dinero si mi solicitud es
                    aprobada?
                  </Link>
                </h4>
              </div>
              <div
                id="collapse1Three"
                className="collapse"
                aria-labelledby="collapse1HeadingThree"
                data-bs-parent="#accordion1"
              >
                <div className="card-body">
                  <p className="mb-0">
                    Una vez aprobada tu solicitud, recibirás el dinero en tu
                    cuenta bancaria en un plazo muy corto, generalmente dentro
                    de las 24 a 48 horas. La rapidez y comodidad son nuestra
                    prioridad.
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-default">
              <div className="card-header" id="collapse1HeadingFour">
                <h4 className="card-title m-0">
                  <Link
                    href=""
                    prefetch={false}
                    className="accordion-toggle text-color-dark font-weight-bold collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1Four"
                    aria-expanded="false"
                    aria-controls="collapse1Four"
                  >
                    4 - ¿Cuáles son las ventajas de obtener un crédito en línea?
                  </Link>
                </h4>
              </div>
              <div
                id="collapse1Four"
                className="collapse"
                aria-labelledby="collapse1HeadingFour"
                data-bs-parent="#accordion1"
              >
                <div className="card-body">
                  <p className="mb-0">
                    Las ventajas son muchas: proceso rápido y sencillo,
                    disponibilidad las 24 horas, sin necesidad de
                    desplazamientos a una sucursal, tasas competitivas y
                    atención personalizada. Todo desde la comodidad de tu hogar.
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-default">
              <div className="card-header" id="collapse1HeadingFive">
                <h4 className="card-title m-0">
                  <Link
                    href=""
                    prefetch={false}
                    className="accordion-toggle text-color-dark font-weight-bold collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1Five"
                    aria-expanded="false"
                    aria-controls="collapse1Five"
                  >
                    5 - ¿Qué hago si tengo dudas o preguntas durante el proceso?
                  </Link>
                </h4>
              </div>
              <div
                id="collapse1Five"
                className="collapse"
                aria-labelledby="collapse1HeadingFive"
                data-bs-parent="#accordion1"
              >
                <div className="card-body">
                  <p className="mb-0">
                    Nuestro equipo de atención al cliente está disponible para
                    ayudarte en cada paso del camino. Puedes contactarnos por
                    teléfono, correo electrónico o chat en línea. Estamos aquí
                    para resolver todas tus inquietudes y brindarte el mejor
                    servicio posible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-3 text-center text-md-start">
          <div
            className="appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={1000}
          >
            <h3 className="font-weight-bold text-color-dark text-transform-none text-5-5 mb-3">
              Línea WhatsApp
            </h3>
            <p className="pb-1 mb-2">
              Resuelve tus dudas vía WhatsApp para una rápida respuesta.
            </p>
            <Link
              href={process.env.NEXT_PUBLIC_WHATSAPP_URL}
              className="btn btn-primary custom-btn-border-radius font-weight-bold btn-px-5 py-3 mb-2"
            >
              ESCRIBIR YA
            </Link>
            <hr className="my-4" />
          </div>
          <div
            className="appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={1100}
          >
            <h3 className="font-weight-bold text-color-dark text-transform-none text-5-5 pt-2 mb-3">
              ¿Alguna Pregunta?
            </h3>
            <p className="pb-1 mb-2">
              Estamos disponibles para brindarte toda la información que
              necesitas.
            </p>
            <Link
              href="/contactenos"
              className="btn btn-primary custom-btn-border-radius font-weight-bold btn-px-5 py-3"
            >
              CONTÁCTENOS
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
