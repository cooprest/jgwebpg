export default function Direction () {
  return (
    <section
      id="get-direction"
      className="section bg-light border-0 box-shadow-1 position-relative z-index-1 py-4 m-0"
    >
      <div className="container py-2">
        <div className="row align-items-center justify-content-lg-center justify-content-xl-start">
          <div className="col-lg-3 col-xl-2 offset-xl-1 mb-2 mb-lg-0">
            <h2
              className="text-color-dark font-weight-bold text-4-5 mb-0 appear-animation"
              data-appear-animation="fadeInRightShorterPlus"
              data-appear-animation-delay={250}
              data-plugin-options="{'accY': -100}"
            >
              GET DIRECTIONS:
            </h2>
          </div>
          <div className="col-lg-8">
          </div>
          <div className="col-lg-11 col-xl-10 offset-xl-1 custom-get-direction-error alert alert-danger d-none mt-4 mx-3 mx-sm-auto">
            <p className="text-center mb-0">
              Theres an error and we couldnt find your address.
              <br />
              <strong className="custom-get-direction-error-message d-none" />
            </p>
          </div>
        </div>
      </div>
    </section>

  )
};
