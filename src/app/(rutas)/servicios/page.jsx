import Script from 'next/script'
import Sponsors from '@/app/components/template/main/container/Sponsors'
import Testimonials from '@/app/components/template/main/container/Testimonials'
import Contentpage from './components/Contentpage'
import Pageheader from './components/Pageheader'
import ScriptLoader from '@/app/components/script_loader/ScriptLoader'
import Callus from '@/app/components/template/main/container/Callus'

export default function page () {
  return (
    <>
      <Pageheader/>
      <Contentpage/>
      <Testimonials/>
      <Callus/>
      <Sponsors/>
      <Script src='/js/plugins/js/plugins.min.js' />
      <Script src='/js/theme.js' />
      <ScriptLoader src='/js/theme.js' />
      <ScriptLoader src='/js/theme.init.js' />
    </>
  )
};
