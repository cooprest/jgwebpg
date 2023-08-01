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
            En Cooperativa de Prestamos, nuestro crédito para vehículo te ofrece
            la oportunidad de obtener el automóvil o motocicleta que siempre has
            deseado. Con tasas competitivas y plazos flexibles, te brindamos la
            financiación necesaria para adquirir el vehículo que se adapte a tu
            estilo de vida y necesidades.
          </p>
          <p className="pb-2 mb-4">
            Nuestro proceso de solicitud es rápido y sencillo, y nuestro equipo
            de expertos en créditos para vehículo estará disponible para
            brindarte asesoramiento personalizado en cada paso del camino.
          </p>
          <Image
            width={375}
            height={279}
            src="/img/demos/auto-services/generic/generic-square-12.jpg"
            className="img-fluid custom-border-radius-1 float-start me-4 mb-4"
            alt=""
          />
          <p className="pt-2">
            El proceso es simple y conveniente. Primero, completa la solicitud
            en línea proporcionando tus datos personales y detalles del vehículo
            que deseas adquirir. Nuestro equipo especializado evaluará tu
            solicitud y te proporcionará una respuesta rápida.
          </p>
          <p>
            Una vez aprobado, te guiaremos en la recopilación de los documentos
            necesarios para la formalización del crédito. Luego, procederemos a
            realizar el desembolso del préstamo directamente al concesionario o
            vendedor del vehículo.
          </p>
          <Image
            width={375}
            height={279}
            src="/img/demos/auto-services/generic/generic-square-13.jpg"
            className="img-fluid custom-border-radius-1 float-end ms-4 mb-4 mb-sm-0"
            alt=""
          />
          <p className="mt-5 mt-md-0 mt-xl-5">
            Nuestra meta es hacer que el proceso de compra de tu vehículo sea lo
            más fácil y libre de complicaciones posible.
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
