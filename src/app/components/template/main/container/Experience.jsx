import PhoneLine from '@/app/components/phone/PhoneLine'
import Image from 'next/image'
import Link from 'next/link'

export default function Experience() {
  return (
    <div className="container my-5 pt-md-4 pt-xl-0">
      <div className="row align-items-center justify-content-center pb-4 mb-5">
        <div className="col-lg-6 pb-sm-4 pb-lg-0 mb-5 mb-lg-0">
          <div className="overflow-hidden">
            <h2
              className="font-weight-bold text-color-dark line-height-1 mb-0 appear-animation"
              data-appear-animation="maskUp"
              data-appear-animation-delay={300}
            >
              Tu Solución Financiera
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
            ¿Necesitas dinero para un proyecto importante o para hacer realidad
            tus sueños? ¡No busques más! En Cooperativa de Prestamos, te ofrecemos
            una experiencia de préstamos rápida, sencilla y segura,
            completamente en línea.
          </p>
          <p
            className="pb-1 mb-4 appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay={700}
          >
            ¡Únete a nuestra comunidad de clientes satisfechos y experimenta la conveniencia y confianza de obtener préstamos y créditos en línea con Cooperativa de Prestamos!
          </p>
          <div className="d-flex align-items-start align-items-sm-center flex-column flex-sm-row">
            <Link
              href="/contactenos"
              className="btn btn-primary custom-btn-border-radius font-weight-bold text-3 px-5 btn-py-3 me-sm-2 mb-3 mb-sm-0 appear-animation"
              data-appear-animation="fadeInRightShorterPlus"
              data-appear-animation-delay={950}
            >
              CONTÁCTENOS
            </Link>
            <div
              className="feature-box align-items-center border border-top-0 border-end-0 border-bottom-0 custom-remove-mobile-xs-border-left ms-sm-4 ps-sm-4 appear-animation"
              data-appear-animation="fadeInRightShorterPlus"
              data-appear-animation-delay={1200}
            >
              <div className="feature-box-icon bg-transparent">
                <i className="icons icon-phone text-6 text-color-dark" />
              </div>
              <div className="feature-box-info line-height-2 ps-1">
                <PhoneLine
                  display="d-block"
                  text="text-4-5"
                  textColor="text-color-dark"
                />
              </div>
            </div>
          </div>
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
      <div className="row pb-2">
        <div className="col-lg-4 text-center px-lg-5 mb-5 mb-lg-0">
          <Link
            href="/servicios"
            className="text-decoration-none"
          >
            <div
              className="custom-icon-box-style-1 appear-animation"
              data-appear-animation="fadeInRightShorterPlus"
              data-appear-animation-delay={250}
              data-plugin-options="{'accY': -200}"
            >
              <div className="custom-icon-style-1 mb-4">
                <Image
                  width={50}
                  height={50}
                  src="/img/demos/auto-services/icons/icon-airplane.svg"
                  alt=""
                  data-icon=""
                  data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                />
              </div>
              <h3 className="text-transform-none font-weight-bold text-color-dark line-height-3 text-4-5 px-3 px-xl-5 my-2">
                Crédito de Libre Inversión
              </h3>
              <p>Financia tus sueños y proyectos.</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-4 text-center px-lg-5 mb-5 mb-lg-0">
          <Link
            href="/servicios"
            className="text-decoration-none"
          >
            <div
              className="custom-icon-box-style-1 appear-animation"
              data-appear-animation="fadeInRightShorterPlus"
              data-appear-animation-delay={500}
              data-plugin-options="{'accY': -200}"
            >
              <div className="custom-icon-style-1 mb-4">
                <Image
                  width={50}
                  height={50}
                  src="/img/demos/auto-services/icons/icon-house.svg"
                  alt=""
                  data-icon=""
                  data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                />
              </div>
              <h3 className="text-transform-none font-weight-bold text-color-dark line-height-3 text-4-5 px-xl-5 my-2 mx-4">
                Préstamo Hipotecario
              </h3>
              <p>Compra la casa de tus sueños.</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-4 text-center px-lg-5">
          <Link
            href="/servicios"
            className="text-decoration-none"
          >
            <div
              className="custom-icon-box-style-1 appear-animation"
              data-appear-animation="fadeInRightShorterPlus"
              data-appear-animation-delay={750}
              data-plugin-options="{'accY': -200}"
            >
              <div className="custom-icon-style-1 mb-4">
                <Image
                  width={50}
                  height={50}
                  src="/img/demos/auto-services/icons/icon-motorbike.svg"
                  alt=""
                  data-icon=""
                  data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                />
              </div>
              <h3 className="text-transform-none font-weight-bold text-color-dark line-height-3 text-4-5 px-4 px-xl-5 my-2">
                Crédito Para Auto o Moto
              </h3>
              <p>Adquiere tu vehículo con facilidad.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
