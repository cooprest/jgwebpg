import Image from 'next/image'
import CallUsService from '../../../components/CallUsService'
import StepList from '../../../components/StepList'

export default function Contentpage() {
  return (
    <div className="container my-5 pt-4 pb-5">
      <div className="row">
        <div
          className="col-lg-8 order-lg-2 mb-5 mb-lg-0 appear-animation"
          data-appear-animation="fadeInUpShorter"
          data-appear-animation-delay={500}
        >
          <p className="text-3-5">
            Descubre la libertad financiera con nuestros créditos de libre
            inversión en línea, te ofrecemos la posibilidad de obtener el dinero
            que necesitas sin restricciones. Utiliza el crédito para consolidar
            deudas, financiar proyectos personales o cualquier otra meta que
            desees alcanzar.
          </p>
          <p className="pb-2 mb-4">
            Nuestro proceso rápido y sencillo te permite solicitar desde la
            comodidad de tu hogar, con tasas competitivas y plazos flexibles.
          </p>
          <Image
            width={375}
            height={279}
            src="/img/demos/auto-services/generic/generic-square-8.jpg"
            className="img-fluid custom-border-radius-1 float-start me-4 mb-4"
            alt=""
          />
          <p className="pt-2">
            En Cooperativa de Prestamos, hemos simplificado el proceso para
            adquirir un préstamo de libre inversión en línea, asegurando que sea
            rápido, conveniente y sin complicaciones. Con solo unos pocos pasos,
            puedes completar tu solicitud desde la comodidad de tu hogar y
            obtener una respuesta en tiempo récord.
          </p>
          <p>
            Nuestro equipo de expertos te guiará en cada etapa, brindándote
            asesoramiento personalizado y asegurándose de que comprendas todos
            los detalles antes de firmar el contrato.
          </p>
          <Image
            width={375}
            height={279}
            src="/img/demos/auto-services/generic/generic-square-9.jpg"
            className="img-fluid custom-border-radius-1 float-end ms-4 mb-4 mb-sm-0"
            alt=""
          />
          <p className="mt-5 mt-md-0 mt-xl-5">
            Además, con desembolso rápido y pagos flexibles, tendrás la libertad
            de utilizar el préstamo según tus necesidades.
          </p>
          <StepList />
        </div>
        <div
          className="col-lg-4 order-lg-1 appear-animation"
          data-appear-animation="fadeInUpShorter"
          data-appear-animation-delay={250}
        >
          <CallUsService />
        </div>
      </div>
    </div>
  )
}
