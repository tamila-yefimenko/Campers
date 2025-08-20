import './App.css';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { Toaster } from 'react-hot-toast';
import HomePage from '../../pages/HomePage/HomePage';

const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const CamperPage = lazy(() => import('../../pages/CamperPage/CamperPage'));
const CamperFeatures = lazy(() => import('../CamperFeatures/CamperFeatures'));
const CamperRewiew = lazy(() => import('../CamperRewiew/CamperRewiew'));
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);

function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      {/* <Layout /> */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CamperPage />}>
              <Route path="features" element={<CamperFeatures />} />
              <Route path="rewiew" element={<CamperRewiew />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
      <Toaster />
    </Suspense>
  );
}

export default App;
