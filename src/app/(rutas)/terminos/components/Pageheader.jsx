import Link from 'next/link'

export default function Pageheader () {
  return (
    <section className="page-header page-header-modern bg-color-light-scale-1 page-header-lg">
      <div className="container">
        <div className="row">
          <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
            <h1 className="text-color-dark font-weight-bold">Términos</h1>
          </div>
          <div className="col-md-4 order-1 order-md-2 align-self-center">
            <ul className="breadcrumb d-flex justify-content-md-end text-3-5">
              <li>
                <Link
                  href="/"
                  className="text-color-default text-color-hover-primary text-decoration-none"
                >
                  INICIO
                </Link>
              </li>
              <li className="active">TÉRMINOS</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
};
