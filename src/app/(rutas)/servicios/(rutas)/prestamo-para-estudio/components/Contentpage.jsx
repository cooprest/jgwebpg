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
            Comprendemos la importancia de invertir en tu educación. Nuestro
            préstamo para estudios está diseñado para brindarte el apoyo
            financiero que necesitas para alcanzar tus metas académicas. Con
            tasas competitivas y plazos flexibles, te ofrecemos la oportunidad
            de acceder a una educación de calidad sin preocupaciones económicas.
          </p>
          <p className="pb-2 mb-4">
            Nuestro proceso de solicitud es rápido y sencillo, y nuestro equipo
            de expertos en préstamos para estudios estará a tu disposición para
            asesorarte en cada paso del camino.
          </p>
          <Image
            width={375}
            height={279}
            src="/img/demos/auto-services/generic/generic-square-14.jpg"
            className="img-fluid custom-border-radius-1 float-start me-4 mb-4"
            alt=""
          />
          <p className="pt-2">
            El proceso es ágil y sencillo. Primero, completa la solicitud en
            línea con tus datos personales y detalles del programa académico que
            deseas seguir. Nuestro equipo especializado evaluará tu solicitud y
            te proporcionará una respuesta rápida.
          </p>
          <p>
            Una vez aprobado, te guiaremos en la recopilación de los documentos
            requeridos para formalizar el préstamo. Luego, procederemos a
            realizar el desembolso del préstamo directamente a la institución
            educativa o a tu cuenta bancaria.
          </p>
          <Image
            width={375}
            height={279}
            src="/img/demos/auto-services/generic/generic-square-15.jpg"
            className="img-fluid custom-border-radius-1 float-end ms-4 mb-4 mb-sm-0"
            alt=""
          />
          <p className="mt-5 mt-md-0 mt-xl-5">
            Nuestra meta es brindarte una experiencia sin complicaciones
            mientras te acercamos a la realización de tus sueños académicos.
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
