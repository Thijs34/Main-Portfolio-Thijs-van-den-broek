import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FaceAwareMoreInfo from './pages/FaceAwareMoreInfo'
import EPostProMoreInfo from './pages/EPostProMoreInfo'
import B2BMagentoMoreInfo from './pages/B2BMagentoMoreInfo'
import AwwwardsMoreInfo from './pages/AwwwardsMoreInfo'

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
  return <App />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {resolveRouteComponent()}
  </StrictMode>,
)
