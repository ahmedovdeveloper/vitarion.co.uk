import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutPage from './pages/About'
import BusinessAreasPage from './pages/BissnessArea'
import ContactPage from './pages/Contact'
import HomePage from './pages/Home'
import ProductsCatalogPage from './pages/ProductsCatalog'
import MimiOrganicsPage from './pages/Mimiorganicspage'
import PartnershipsPage from './pages/Partnershipspage'
import QualityCompliancePage from './pages/QC'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/business-areas" element={<BusinessAreasPage />} />
        <Route path="/products" element={<ProductsCatalogPage />} />
        <Route path="/mimi-organics" element={<MimiOrganicsPage />} />
        <Route path="/partnerships" element={<PartnershipsPage />} />
        <Route path="/quality-compliance" element={<QualityCompliancePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App