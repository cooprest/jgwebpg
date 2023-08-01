import ScriptLoader from '@/app/components/script_loader/ScriptLoader'
import Sponsors from '@/app/components/template/main/container/Sponsors'
import Script from 'next/script'
import Contact from '../../components/form/Contact'

export default function page () {
  return (
    <>
      <Contact/>
      <Sponsors/>
      <Script src='/js/plugins/js/plugins.min.js' />
      <Script src='/js/theme.js' />
      <ScriptLoader src='/js/theme.js' />
      <ScriptLoader src='/js/theme.init.js' />
    </>
  )
};
