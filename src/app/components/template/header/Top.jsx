import Link from 'next/link'

export default function Top () {
  return (
    <div className="header-top header-top-small-minheight header-top-simple-border-bottom">
      <div className="container py-2">
        <div className="header-row justify-content-between">
          <div className="header-column col-auto px-0">
            <div className="header-row">
              <div className="header-nav-top">
                <ul className="nav nav-pills position-relative">
                  <li className="nav-item d-none d-sm-block">
                    <span className="d-flex align-items-center font-weight-medium ws-nowrap text-3 ps-0">
                      <Link
                        href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_CORP}`}
                        className="text-decoration-none text-color-dark text-color-hover-primary"
                      >
                        <i className="icons icon-envelope font-weight-bold position-relative text-4 top-3 me-1" />
                        {process.env.NEXT_PUBLIC_EMAIL_CORP}
                      </Link>
                    </span>
                  </li>
                  <li className="nav-item nav-item-left-border nav-item-left-border-remove nav-item-left-border-sm-show">
                    <span className="d-flex align-items-center font-weight-medium text-color-dark ws-nowrap text-3">
                      <i className="icons icon-clock font-weight-bold position-relative text-3 top-1 me-2" />
                      Lun - Sab 8:00am - 5:00pm
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="header-column justify-content-end col-auto px-0 d-none d-md-flex">
            <div className="header-row">
              <nav className="header-nav-top">
                <ul className="header-social-icons social-icons social-icons-clean social-icons-icon-gray social-icons-medium custom-social-icons-divider">
                  <li className="social-icons-facebook">
                    <Link
                      href="http://www.facebook.com/"
                      target="_blank"
                      title="Facebook" rel="noreferrer"
                    >
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li className="social-icons-twitter">
                    <Link
                      href="http://www.twitter.com/"
                      target="_blank"
                      title="Twitter" rel="noreferrer"
                    >
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li className="social-icons-linkedin">
                    <Link
                      href="http://www.linkedin.com/"
                      target="_blank"
                      title="Linkedin" rel="noreferrer"
                    >
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
