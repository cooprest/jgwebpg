import ScriptLoader from '@/app/components/script_loader/ScriptLoader'
import Script from 'next/script'
import Pageheader from './components/Pageheader'
import Contentpage from './components/Contentpage'
import Sponsors from '@/app/components/template/main/container/Sponsors'

export default function page () {
  return (
    <>
      <Pageheader/>
      <Contentpage/>
      <Sponsors/>
      <Script src='/js/plugins/js/plugins.min.js' />
      <Script src='/js/theme.js' />
      <ScriptLoader src='/js/theme.js' />
      <ScriptLoader src='/js/theme.init.js' />
    </>
  )
};
