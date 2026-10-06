import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import AboutPage from './pages/About'
import BusinessAreasPage from './pages/BissnessArea'
import ContactPage from './pages/Contact'
import HomePage from './pages/Home'
import ProductPage from './pages/ProductPage'
import ProductsCatalogPage from './pages/ProductsCatalog'
import StatisticPage from './pages/StatisticPage'
import PartnershipsPage from './pages/Partnershipspage'
import QualityCompliancePage from './pages/QC'
import WellgreenPage from './pages/WellgreenPage'
import { initGoogleAnalytics, trackPathView } from './utils/analytics'

const AnalyticsTracker = () => {
  const location = useLocation()

  useEffect(() => {
    initGoogleAnalytics()
    trackPathView(location.pathname)
  }, [location.pathname])

  return null
}

const App = () => {
  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/business-areas" element={<BusinessAreasPage />} />
        <Route path="/products" element={<ProductsCatalogPage />} />
        <Route path="/statistic" element={<StatisticPage />} />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="/products/:slug" element={<ProductPage />} />
        <Route path="/wellgreen" element={<WellgreenPage />} />
        <Route path="/partnerships" element={<PartnershipsPage />} />
        <Route path="/quality-compliance" element={<QualityCompliancePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App