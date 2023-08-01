export default function Testimonials() {
  return (
    <section className="section border-0 m-0">
      <div className="container pb-3 my-5">
        <div className="row justify-content-center pb-3 mb-4">
          <div className="col text-center">
            <h2 className="font-weight-bold text-color-dark line-height-1 mb-0">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <div className="d-inline-block custom-divider divider divider-primary divider-small my-3">
              <hr className="my-0" />
            </div>
            <p className="font-weight-bold text-3-5 mb-1">
              Orgullosos de brindar los mejores servicios. Tu satisfacción es
              nuestra motivación.
            </p>
            <p className="font-weight-light text-3-5 mb-0">
              Lea los testimonios de nuestros clientes satisfechos.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div
              className="owl-carousel nav-outside nav-style-1 nav-dark nav-arrows-thin nav-font-size-lg custom-carousel-box-shadow-1 mb-0"
              data-plugin-options="{'responsive': {'0': {'items': 1}, '479': {'items': 1}, '768': {'items': 2}, '979': {'items': 2}, '1199': {'items': 3}}, 'autoplay': true, 'autoplayTimeout': 5000, 'autoplayHoverPause': true, 'dots': false, 'nav': true, 'loop': true, 'margin': 15, 'stagePadding': '75'}"
            >
              <div>
                <div className="card custom-border-radius-1">
                  <div className="card-body">
                    <div className="custom-testimonial-style-1 testimonial testimonial-style-2 testimonial-with-quotes testimonial-remove-right-quote text-center mb-0">
                      <blockquote>
                        <p className="text-color-dark text-3 font-weight-light px-0 mb-2">
                          Increíble experiencia. Obtener mi préstamo en línea
                          fue rápido y sin complicaciones. Recomendaré esta
                          opción a mis amigos.
                        </p>
                      </blockquote>
                      <div className="testimonial-author">
                        <p>
                          <strong className="font-weight-extra-bold">
                            Marta Gómez
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card custom-border-radius-1">
                  <div className="card-body">
                    <div className="custom-testimonial-style-1 testimonial testimonial-style-2 testimonial-with-quotes testimonial-remove-right-quote text-center mb-0">
                      <blockquote>
                        <p className="text-color-dark text-3 font-weight-light px-0 mb-2">
                          Gracias a esta financiera, finalmente pude comprar mi
                          casa. La asesoría y facilidades fueron excepcionales.
                          Muy agradecido.
                        </p>
                      </blockquote>
                      <div className="testimonial-author">
                        <p>
                          <strong className="font-weight-extra-bold">
                            Juan Rodríguez
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card custom-border-radius-1">
                  <div className="card-body">
                    <div className="custom-testimonial-style-1 testimonial testimonial-style-2 testimonial-with-quotes testimonial-remove-right-quote text-center mb-0">
                      <blockquote>
                        <p className="text-color-dark text-3 font-weight-light px-0 mb-2">
                          El proceso fue tan fácil y eficiente. Mi crédito fue
                          aprobado en minutos. Definitivamente volveré para
                          futuras necesidades financieras.
                        </p>
                      </blockquote>
                      <div className="testimonial-author">
                        <p>
                          <strong className="font-weight-extra-bold">
                            Laura Torres
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card custom-border-radius-1">
                  <div className="card-body">
                    <div className="custom-testimonial-style-1 testimonial testimonial-style-2 testimonial-with-quotes testimonial-remove-right-quote text-center mb-0">
                      <blockquote>
                        <p className="text-color-dark text-3 font-weight-light px-0 mb-2">
                          ¡Me sorprendió lo rápido que recibí el dinero en mi
                          cuenta! Sin duda, la mejor opción para obtener un
                          crédito en línea.
                        </p>
                      </blockquote>
                      <div className="testimonial-author">
                        <p>
                          <strong className="font-weight-extra-bold">
                            Carlos Medina
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
