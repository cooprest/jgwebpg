export default function Brands() {
  return (
    <section
      className="section custom-bg-color-grey-1 custom-background-size-1 position-relative overflow-hidden border-0 m-0"
      data-plugin-parallax=""
      data-plugin-options="{'speed': 1.5, 'parallaxHeight': '130%', 'fadeIn': true}"
      data-image-src="img/demos/auto-services/backgrounds/background-2.jpg"
    >
      <svg
        className="custom-svg-background-1"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1920 537"
        data-appear-animation-svg="true"
      >
        <path
          fill="#F4F4F4"
          d="M964.33,189.3L1110.08,0H0v537h1338.31L972.96,255.7C952.24,239.74,948.38,210.02,964.33,189.3z"
        />
        <path
          className="appear-animation"
          data-appear-animation="customLineAnim2"
          data-appear-animation-delay={500}
          data-appear-animation-duration="5s"
          data-plugin-options="{'accY': -400}"
          fill="none"
          stroke="#1C5FA8"
          strokeWidth={2}
          strokeMiterlimit={10}
          d="M1854.35,105.63l-485.31-340.84c-18.3-12.85-43.56-8.44-56.42,9.86L971.79,259.96
                  c-12.85,18.3-8.44,43.56,9.86,56.42l485.31,340.84c18.3,12.85,43.56,8.44,56.42-9.86l340.84-485.31
                  C1877.07,143.74,1872.65,118.48,1854.35,105.63z"
        />
      </svg>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="overflow-hidden">
              <h2
                className="font-weight-bold text-color-dark line-height-3 mb-0 appear-animation"
                data-appear-animation="maskUp"
                data-appear-animation-delay={250}
              >
                Como Adquirir Un Préstamo En Línea
              </h2>
            </div>
            <div className="custom-divider divider divider-primary divider-small pt-1 mb-3 mt-2">
              <hr
                className="my-0 appear-animation"
                data-appear-animation="customLineProgressAnim"
                data-appear-animation-delay={600}
              />
            </div>
            <p
              className="font-weight-light text-3-5 pb-2 pe-5 me-md-5 me-lg-4 mb-4 appear-animation"
              data-appear-animation="fadeInUpShorter"
              data-appear-animation-delay={500}
            >
              Nuestros requisitos son mínimos: ser mayor de edad, tener ingresos
              demostrables, contar con identificación válida y contar con la siguiente
              documentación. No importa tu historial crediticio. En Cooperativa
              de Prestamos, trabajamos para brindarte una solución financiera
              accesible y justa.
            </p>
            <div className="row">
              <div
                className="col-5 col-lg-6 order-1 appear-animation"
                data-appear-animation="fadeInRightShorterPlus"
                data-appear-animation-delay={750}
              >
                <ul className="list list-icons list-icons-style-2 list-icons-lg mb-0">
                  <li className="font-weight-semibold text-color-dark">
                    <i className="fas fa-check text-color-dark border-color-grey-1 top-7 text-3" />
                    Fotocopia de la cédula al 150%.
                  </li>
                  <li className="font-weight-semibold text-color-dark">
                    <i className="fas fa-check text-color-dark border-color-grey-1 top-7 text-3" />
                    Únicamente para empleados carta laboral.
                  </li>
                  <li className="font-weight-semibold text-color-dark">
                    <i className="fas fa-check text-color-dark border-color-grey-1 top-7 text-3" />
                    Únicamente para independientes RUT o Cámara de Comercio.
                  </li>
                </ul>
              </div>
              <div
                className="col-lg-6 order-3 order-lg-2 appear-animation"
                data-appear-animation="fadeInRightShorterPlus"
                data-appear-animation-delay={1000}
              >
                <ul className="list list-icons list-icons-style-2 list-icons-lg mb-0">
                  <li className="font-weight-semibold text-color-dark">
                    <i className="fas fa-check text-color-dark border-color-grey-1 top-7 text-3" />
                    Comprobantes de pago 2 últimos meses
                  </li>
                  <li className="font-weight-semibold text-color-dark">
                    <i className="fas fa-check text-color-dark border-color-grey-1 top-7 text-3" />
                    2 referencias familiares y personales
                  </li>
                  <li className="font-weight-semibold text-color-dark">
                    <i className="fas fa-check text-color-dark border-color-grey-1 top-7 text-3" />
                    Préstamos a partir de $2.000.000 en adelante
                  </li>
                </ul>
              </div>
              {/* <div
                className="col-6 col-lg-4 order-2 order-lg-3 appear-animation"
                data-appear-animation="fadeInRightShorterPlus"
                data-appear-animation-delay={1250}
              >
                <ul className="list list-icons list-icons-style-2 list-icons-lg mb-0">
                  <li className="font-weight-semibold text-color-dark">
                    <i className="fas fa-check text-color-dark border-color-grey-1 top-7 text-3" />
                    Brand 7
                  </li>
                  <li className="font-weight-semibold text-color-dark">
                    <i className="fas fa-check text-color-dark border-color-grey-1 top-7 text-3" />
                    Brand 8
                  </li>
                  <li className="font-weight-semibold text-color-dark">
                    <i className="fas fa-check text-color-dark border-color-grey-1 top-7 text-3" />
                    Brand 9
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
