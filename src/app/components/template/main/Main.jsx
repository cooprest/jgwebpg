import Contact from '../../form/Contact'
import Banner from './container/Banner'
import Brands from './container/Brands'
import Callus from './container/Callus'
import CoverPage from './container/CoverPage'
import Experience from './container/Experience'
import Faq from './container/Faq'
import Services from './container/Services'
import Sponsors from './container/Sponsors'
import Testimonials from './container/Testimonials'

export default function Main() {
  return (
    <div role="main" className="main">
      <CoverPage />
      <Banner />
      <Experience />
      <Brands />
      <Services />
      <Testimonials />
      <Callus />
      <Faq />
      <Contact />
      <Sponsors />
    </div>
  )
}
