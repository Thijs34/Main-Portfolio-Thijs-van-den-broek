/* @refresh reload */
import { StrictMode, Suspense, lazy } from 'react'
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

const resolveRouteComponent = () => {
  if (typeof window === 'undefined') return <App />;
  const normalizedPath = window.location.pathname.replace(/\/+/g, '/').replace(/\/$/, '') || '/';
  if (normalizedPath.toLowerCase().endsWith('/faceaware') || normalizedPath === '/faceaware') {
    return <FaceAwareMoreInfo />;
  }
  if (normalizedPath.toLowerCase().endsWith('/epostpro') || normalizedPath === '/epostpro') {
    return <EPostProMoreInfo />;
  }
  if (normalizedPath.toLowerCase().endsWith('/b2b-magento') || normalizedPath === '/b2b-magento') {
    return <B2BMagentoMoreInfo />;
  }
  if (normalizedPath.toLowerCase().endsWith('/awwwards') || normalizedPath === '/awwwards') {
    return <AwwwardsMoreInfo />;
  }
  if (normalizedPath.toLowerCase().endsWith('/projects') || normalizedPath === '/projects') {
    return <ProjectsPage />;
  }
  if (normalizedPath.toLowerCase().endsWith('/innobeweeglab') || normalizedPath === '/innobeweeglab') {
    return <InnoBeweegLabMoreInfo />;
  }
  if (normalizedPath.toLowerCase().endsWith('/musicsync') || normalizedPath === '/musicsync') {
    return <MusicSyncMoreInfo />;
  }
  return <App />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <Suspense fallback={<RouteFallback />}>
        {resolveRouteComponent()}
      </Suspense>
    </LanguageProvider>
  </StrictMode>,
)
