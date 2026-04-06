/* @refresh reload */
import { StrictMode, Suspense, lazy, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageContext'

const FaceAwareMoreInfo = lazy(() => import('./pages/FaceAwareMoreInfo'))
const EPostProMoreInfo = lazy(() => import('./pages/EPostProMoreInfo'))
const B2BMagentoMoreInfo = lazy(() => import('./pages/B2BMagentoMoreInfo'))
const AwwwardsMoreInfo = lazy(() => import('./pages/AwwwardsMoreInfo'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const InnoBeweegLabMoreInfo = lazy(() => import('./pages/InnoBeweegLabMoreInfo'))
const MusicSyncMoreInfo = lazy(() => import('./pages/MusicSyncMoreInfo'))

const RouteFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#030412] text-white">
    <p className="text-base font-medium tracking-wide text-white/70">Loading…</p>
  </div>
)

const routeMap = {
  '/faceaware': FaceAwareMoreInfo,
  '/epostpro': EPostProMoreInfo,
  '/b2b-magento': B2BMagentoMoreInfo,
  '/awwwards': AwwwardsMoreInfo,
  '/projects': ProjectsPage,
  '/innobeweeglab': InnoBeweegLabMoreInfo,
  '/musicsync': MusicSyncMoreInfo,
}

const resolvePath = () => {
  if (typeof window === 'undefined') return '/'
  const normalizedPath = window.location.pathname.replace(/\/+/g, '/').replace(/\/$/, '') || '/'
  return normalizedPath.toLowerCase()
}

const RouteResolver = () => {
  const routeComponent = useMemo(() => {
    const path = resolvePath()
    const entry = Object.entries(routeMap).find(([route]) => path === route || path.endsWith(route))
    if (!entry) return <App />
    const [, Component] = entry
    return <Component />
  }, [])

  return routeComponent
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <Suspense fallback={<RouteFallback />}>
        <RouteResolver />
      </Suspense>
    </LanguageProvider>
  </StrictMode>,
)
