import ScriptLoader from '@/app/components/script_loader/ScriptLoader'
import Sponsors from '@/app/components/template/main/container/Sponsors'
import Script from 'next/script'
import ContentPage from './components/ContentPage'
import PageHeader from './components/PageHeader'
import GoogleEvent from '@/app/components/google-tags/GoogleEvent'

export default function page() {
  return (
    <>
      <PageHeader />
      <ContentPage />
      <Sponsors />
      <GoogleEvent GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
      <Script src="/js/plugins/js/plugins.min.js" />
      <Script src="/js/theme.js" />
      <ScriptLoader src="/js/theme.js" />
      <ScriptLoader src="/js/theme.init.js" />
    </>
  )
}
