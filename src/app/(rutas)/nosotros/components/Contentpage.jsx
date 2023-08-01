import Image from 'next/image'
import Link from 'next/link'

export default function Contentpage() {
  return (
    <div className="container my-5 pt-4">
      <div className="row align-items-center justify-content-center mb-5">
        <div className="col-lg-6 pb-sm-4 pb-lg-0 mb-5 mb-lg-0">
          <div className="overflow-hidden">
            <h2
              className="font-weight-bold text-color-dark line-height-1 mb-0 appear-animation"
              data-appear-animation="maskUp"
              data-appear-animation-delay={300}
            >
              Tu Éxito Financiero Comienza Aquí: Experiencia Comprobada y
              Servicio Excepcional
            </h2>
          </div>
          <div className="custom-divider divider divider-primary divider-small my-3">
            <hr
              className="my-0 appear-animation"
              data-appear-animation="customLineProgressAnim"
              data-appear-animation-delay={700}
            />
          </div>
          <p
            className="font-weight-light text-3-5 mb-4 appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={450}
          >
            Con una experiencia consolidada en el mundo financiero, en
            Cooperativa de Prestamos nos enorgullecemos de ser líderes en el
            mercado. Con años de trayectoria, hemos brindado soluciones
            confiables y accesibles a miles de clientes satisfechos. Nuestro
            equipo de expertos en préstamos y créditos está comprometido en
            ofrecer atención personalizada y asesoramiento integral, guiándote
            en cada paso hacia el éxito financiero. Estamos dedicados a superar
            tus expectativas, proporcionando un servicio excepcional respaldado
            por la transparencia y la honestidad. Con Cooperativa de Prestamos,
            confía en una experiencia comprobada y alcance tus metas financieras
            con confianza y seguridad.
          </p>
          <p
            className="pb-1 mb-4 appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={700}
          >
            En Cooperativa de Prestamos, nuestra misión es hacer que tus sueños
            financieros se hagan realidad. Ya sea que estés buscando consolidar
            deudas, adquirir una casa o financiar un proyecto importante,
            estamos aquí para brindarte las mejores opciones. Nuestra dedicación
            a la excelencia se refleja en cada interacción con nuestros
            clientes. Nos enorgullecemos de establecer relaciones duraderas y
            ser el socio de confianza en tu camino hacia la estabilidad
            económica. Con un equipo apasionado y un compromiso inquebrantable,
            nos esforzamos por convertirnos en tu primera elección cuando se
            trata de soluciones financieras. Confía en nosotros para alcanzar el
            éxito y experimenta una experiencia financiera sin igual.
          </p>
          {/* <div className="row">
            <div
              className="col-sm-5 col-lg-4 order-1 appear-animation"
              data-appear-animation="fadeInUpShorterPlus"
              data-appear-animation-delay={950}
            >
              <ul className="list list-icons list-icons-style-2 list-icons-lg mb-0">
                <li className="font-weight-semibold text-color-dark">
                  <i className="fas fa-check text-color-dark border-color-grey-1 top-7 text-3" />
                  Brand 1
                </li>
                <li className="font-weight-semibold text-color-dark">
                  <i className="fas fa-check text-color-dark border-color-grey-1 top-7 text-3" />
                  Brand 2
                </li>
                <li className="font-weight-semibold text-color-dark">
                  <i className="fas fa-check text-color-dark border-color-grey-1 top-7 text-3" />
                  Brand 3
                </li>
              </ul>
            </div>
            <div
              className="col-sm-5 col-lg-4 order-3 order-lg-2 appear-animation"
              data-appear-animation="fadeInUpShorterPlus"
              data-appear-animation-delay={1200}
            >
              <ul className="list list-icons list-icons-style-2 list-icons-lg mb-0">
                <li className="font-weight-semibold text-color-dark">
                  <i className="fas fa-check text-color-dark border-color-grey-1 top-7 text-3" />
                  Brand 4
                </li>
                <li className="font-weight-semibold text-color-dark">
                  <i className="fas fa-check text-color-dark border-color-grey-1 top-7 text-3" />
                  Brand 5
                </li>
                <li className="font-weight-semibold text-color-dark">
                  <i className="fas fa-check text-color-dark border-color-grey-1 top-7 text-3" />
                  Brand 6
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        <div
          className="col-10 col-md-9 col-lg-6 ps-lg-5 pe-5 appear-animation"
          data-appear-animation="fadeInRightShorterPlus"
          data-appear-animation-delay={1450}
          data-plugin-options="{'accY': -200}"
        >
          <div className="position-relative">
            <div
              data-plugin-float-element=""
              data-plugin-options="{'startPos': 'top', 'speed': 0.2, 'transition': true, 'transitionDuration': 1000, 'isInsideSVG': true}"
            >
              <Image
                width={445}
                height={445}
                src="/img/demos/auto-services/generic-1.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div
              className="position-absolute transform3dxy-n50"
              style={{ top: '25%', left: '7%' }}
            >
              <div
                data-plugin-float-element=""
                data-plugin-options="{'startPos': 'top', 'speed': 0.5, 'transition': true, 'transitionDuration': 2000, 'isInsideSVG': false}"
              >
                <Image
                  width={35}
                  height={35}
                  src="/img/demos/auto-services/generic-1-1.png"
                  className="appear-animation"
                  alt=""
                  data-appear-animation="fadeInUpShorterPlus"
                  data-appear-animation-delay={1700}
                />
              </div>
            </div>
            <div
              className="position-absolute transform3dxy-n50 ms-5 pb-5 ms-xl-0"
              style={{ top: '32%', left: '85%' }}
            >
              <div
                data-plugin-float-element=""
                data-plugin-options="{'startPos': 'top', 'speed': 1, 'transition': true, 'transitionDuration': 1500, 'isInsideSVG': false}"
              >
                <Image
                  width={75}
                  height={75}
                  src="/img/demos/auto-services/generic-1-2.png"
                  className="appear-animation"
                  alt=""
                  data-appear-animation="fadeInRightShorterPlus"
                  data-appear-animation-delay={1900}
                />
              </div>
            </div>
            <div
              className="position-absolute transform3dxy-n50"
              style={{ top: '90%', left: '19%' }}
            >
              <div
                data-plugin-float-element=""
                data-plugin-options="{'startPos': 'top', 'speed': 2, 'transition': true, 'transitionDuration': 2500, 'isInsideSVG': false}"
              >
                <Image
                  width={57}
                  height={57}
                  src="/img/demos/auto-services/generic-1-3.png"
                  className="appear-animation"
                  alt=""
                  data-appear-animation="fadeInDownShorterPlus"
                  data-appear-animation-delay={2100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row pb-4">
        <div className="col-lg-9 col-xl-4-5 mb-4 mb-lg-0">
          <p
            className="mb-0 appear-animation"
            data-appear-animation="fadeInUpShorterPlus"
            data-appear-animation-delay={1000}
          >
            En Cooperativa de Prestamos, la satisfacción del cliente es nuestra prioridad número uno. Nuestro equipo altamente capacitado se esfuerza por comprender tus necesidades individuales y ofrecer soluciones personalizadas que se ajusten a tu situación financiera. Nos enorgullecemos de mantener una comunicación clara y transparente en todo momento, asegurándonos de que estés informado y cómodo en cada etapa del proceso. Además, estamos comprometidos con la seguridad y protección de tus datos, utilizando tecnología de vanguardia para garantizar la confidencialidad de tu información. Con un enfoque centrado en el cliente y una amplia gama de servicios financieros, en Cooperativa de Prestamos estamos listos para ser tu aliado en el camino hacia un futuro próspero y estable. Confía en nosotros para obtener resultados excepcionales y descubre por qué nuestros clientes nos eligen una y otra vez.
          </p>
        </div>
        <div className="col-lg-3 col-xl-1-5">
          <Link
            href="/servicios"
            className="btn btn-primary custom-btn-border-radius font-weight-bold text-3 btn-px-5 btn-py-3 w-lg-100pct appear-animation"
            data-appear-animation="fadeInUpShorterPlus"
            data-appear-animation-delay={1250}
          >
            SERVICIOS
          </Link>
        </div>
      </div>
    </div>
  )
}
