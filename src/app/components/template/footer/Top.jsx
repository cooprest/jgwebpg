import Image from 'next/image'
import Link from 'next/link'

export default function Top() {
  return (
    <div className="container py-5">
      <div className="row py-3">
        <div className="col-md-4 mb-5 mb-md-0">
          <div className="feature-box flex-column flex-xl-row align-items-center align-items-lg-start text-center text-lg-start">
            <div className="feature-box-icon bg-transparent mb-4 mb-xl-0 p-0">
              <Image
                width={45}
                height={45}
                src="/img/demos/auto-services/icons/icon-whatsapp.svg"
                alt="location"
                data-icon=""
                data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-light position-relative bottom-3'}"
              />
            </div>
            <div className="feature-box-info line-height-1 ps-2">
              <span className="d-block font-weight-bold text-color-light text-5 mb-2">
                Linea WhatsApp
              </span>
              <Link
                href={process.env.NEXT_PUBLIC_WHATSAPP_URL}
                target='blank'
                className="text-color-light text-4 line-height-4 text-decoration-none font-weight-light mb-0"
              >
                ¡Un Asesor en Linea Ahora!
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5 mb-md-0">
          <div className="feature-box flex-column flex-xl-row align-items-center align-items-lg-start text-center text-lg-start">
            <div className="feature-box-icon bg-transparent mb-4 mb-xl-0 p-0">
              <i className="icons icon-phone text-9 text-color-light position-relative top-4" />
            </div>
            <div className="feature-box-info line-height-1 ps-2">
              <span className="d-block font-weight-bold text-color-light text-5 pb-1 mb-1">
                ¡Llame Ahora!
              </span>
              <Link
                href={`tel:+57${process.env.NEXT_PUBLIC_PHONE_LINE}`}
                className="text-color-light text-4 line-height-7 text-decoration-none"
              >
                {process.env.NEXT_PUBLIC_PHONE_LINE}
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature-box flex-column flex-xl-row align-items-center align-items-lg-start text-center text-lg-start">
            <div className="feature-box-icon bg-transparent mb-4 mb-xl-0 p-0">
              <Image
                width={45}
                height={45}
                src="/img/demos/auto-services/icons/icon-calendar.svg"
                alt=""
                data-icon=""
                data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-light position-relative bottom-3'}"
              />
            </div>
            <div className="feature-box-info line-height-1 ps-xl-3">
              <span className="d-block font-weight-bold text-color-light text-5 pb-1 mb-1">
                24/7 Servicio Online
              </span>
              <p className="text-color-light text-4 line-height-7 text-decoration-none">
                De Lunes - Sábado | 8am - 5pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
