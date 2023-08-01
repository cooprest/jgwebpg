import Link from 'next/link'
import PhoneLine from '../../phone/PhoneLine'
import Image from 'next/image'

export default function Menu() {
  return (
    <div className="header-container container">
      <div className="header-row">
        <div className="header-column w-100">
          <div className="header-row justify-content-between">
            <div className="header-logo z-index-2 col-lg-2 px-0">
              <Link href="/">
                <Image
                  alt="Porto"
                  width={193}
                  height={48}
                  data-sticky-width={82}
                  data-sticky-height={40}
                  data-sticky-top={84}
                  src="/img/demos/auto-services/logo-.png"
                />
              </Link>
            </div>
            <div className="header-nav header-nav-links justify-content-end pe-lg-4 me-lg-3">
              <div className="header-nav-main header-nav-main-arrows header-nav-main-dropdown-no-borders header-nav-main-effect-3 header-nav-main-sub-effect-1">
                <nav className="collapse">
                  <ul className="nav nav-pills" id="mainNav">
                    <li>
                      <Link href="/" className="nav-link active">
                        Inicio
                      </Link>
                    </li>
                    <li>
                      <Link href="/nosotros" className="nav-link">
                        Sobre Nosotros
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        href="/servicios"
                        className="nav-link dropdown-toggle"
                      >
                        Servicios
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            href="/servicios/credito-libre-inversion"
                            className="dropdown-item"
                          >
                            Crédito Libre Inversión
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/servicios/prestamo-hipotecario"
                            className="dropdown-item"
                          >
                            Préstamo Hipotecario
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/servicios/credito-para-vehiculo"
                            className="dropdown-item"
                          >
                            Crédito Para Vehículo
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/servicios/prestamo-para-estudio"
                            className="dropdown-item"
                          >
                            Préstamo Para Estudio
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/terminos" className="nav-link">
                        Términos
                      </Link>
                    </li>
                    <li>
                      <Link href="/contactenos" className="nav-link">
                        Contáctenos
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <ul className="header-extra-info custom-left-border-1 d-none d-xl-block">
              <li className="d-none d-sm-inline-flex ms-0">
                <div className="header-extra-info-icon">
                  <i className="icons icon-phone text-3 text-color-dark position-relative top-3" />
                </div>
                <div className="header-extra-info-text line-height-2">
                  <PhoneLine text="text-4" />
                </div>
              </li>
            </ul>
            <button
              className="btn header-btn-collapse-nav ms-4"
              data-bs-toggle="collapse"
              data-bs-target=".header-nav-main nav"
            >
              <i className="fas fa-bars" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
