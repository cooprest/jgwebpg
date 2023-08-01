import ScriptLoader from '@/app/components/script_loader/ScriptLoader'
import Script from 'next/script'
import PageHeader from './components/PageHeader'
import ContentPage from './components/ContentPage'
import Callus from '@/app/components/template/main/container/Callus'
import Sponsors from '@/app/components/template/main/container/Sponsors'

export default function page() {
  return (
    <>
      <PageHeader />
      <ContentPage />
      <Callus />
      <Sponsors />
      <Script src="/js/plugins/js/plugins.min.js" />
      <Script src="/js/theme.js" />
      <ScriptLoader src="/js/theme.js" />
      <ScriptLoader src="/js/theme.init.js" />
    </>
  )
}
