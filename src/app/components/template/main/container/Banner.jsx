import Link from 'next/link'

export default function Banner() {
  return (
    <section
      className="section border-0 m-0 appear-animation"
      data-appear-animation="fadeIn"
      data-appear-animation-delay={1200}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-sm-9 col-md-12 col-lg-7 text-center text-lg-end mb-4 mb-lg-0">
            <h2
              className="font-weight-bold text-color-primary text-7 line-height-1 mb-1 appear-animation"
              data-appear-animation="fadeInLeftShorterPlus"
              data-appear-animation-delay={1700}
            >
              Nos Pondremos En Contacto Contigo Si Lo Deseas
            </h2>
            <p
              className="font-weight-bold text-4 mb-0 appear-animation"
              data-appear-animation="fadeInLeftShorterPlus"
              data-appear-animation-delay={1900}
            >
              ¡Completa El Formulario y Te Llamaremos En Seguida!
            </p>
          </div>
          <div className="col-lg-5 text-center text-lg-start ps-lg-4">
            <Link
              href="#get-call"
              data-hash data-hash-offset="0" 
              data-hash-offset-lg="100"
              className="btn btn-primary btn-outline custom-btn-border-radius font-weight-bold text-3 btn-px-5 btn-py-3 ms-lg-2 appear-animation"
              data-appear-animation="fadeInLeftShorterPlus"
              data-appear-animation-delay={1500}
            >
              SOLICITAR LLAMADA
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
