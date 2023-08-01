import Script from 'next/script'
import ScriptLoader from '@/app/components/script_loader/ScriptLoader'
import Callus from '@/app/components/template/main/container/Callus'
import Sponsors from '@/app/components/template/main/container/Sponsors'
import Contentpage from './components/Contentpage'
import Pageheader from './components/Pageheader'

export default function page () {
  return (
    <>
      <Pageheader/>
      <Contentpage/>
      <Callus/>
      <Sponsors/>
      <Script src='/js/plugins/js/plugins.min.js' />
      <Script src='/js/theme.js' />
      <ScriptLoader src='/js/theme.js' />
      <ScriptLoader src='/js/theme.init.js' />
    </>
  )
};
