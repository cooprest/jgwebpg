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
            Nuestro crédito hipotecario te ofrece la oportunidad de hacer
            realidad el sueño de tener tu propia casa. Con tasas competitivas y
            plazos flexibles, te brindamos el respaldo necesario para adquirir
            la vivienda que siempre has deseado. Nuestro equipo de expertos en
            préstamos hipotecarios te guiará en cada paso del proceso,
            asegurándose de que obtengas la mejor opción que se adapte a tus
            necesidades y capacidad financiera.
          </p>
          <p className="pb-2 mb-4">
            Confía en nosotros para recibir una atención personalizada y
            transparente, mientras te acercamos a la meta de tener un hogar
            propio.
          </p>
          <Image
            width={375}
            height={279}
            src="/img/demos/auto-services/generic/generic-square-10.jpg"
            className="img-fluid custom-border-radius-1 float-start me-4 mb-4"
            alt=""
          />
          <p className="pt-2">
            El proceso es fácil y claro. Primero, completa nuestra solicitud en
            línea con tus datos personales y financieros. Luego, nuestro equipo
            especializado evaluará tu capacidad crediticia y te proporcionará
            una oferta personalizada con tasas y condiciones.
          </p>
          <p>
            Una vez que aceptes la oferta, te guiaremos en la recopilación de
            los documentos necesarios para la aprobación final. Después de
            firmar el contrato, realizaremos el desembolso del préstamo
            directamente a la entidad vendedora de la propiedad.
          </p>
          <Image
            width={375}
            height={279}
            src="/img/demos/auto-services/generic/generic-square-11.jpg"
            className="img-fluid custom-border-radius-1 float-end ms-4 mb-4 mb-sm-0"
            alt=""
          />
          <p className="mt-5 mt-md-0 mt-xl-5">
            Nuestro objetivo es hacer que el proceso de adquisición de tu nueva
            casa sea lo más ágil y libre de estrés posible.
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
