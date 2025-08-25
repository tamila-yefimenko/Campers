import './App.css';
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { Toaster } from 'react-hot-toast';
import HomePage from '../../pages/HomePage/HomePage';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';

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
      <div className="container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CamperPage />}>
              <Route index element={<Navigate to="features" replace />} />
              <Route path="features" element={<CamperFeatures />} />
              <Route path="rewiews" element={<CamperRewiew />} />
            </Route>
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
      <Toaster position="top-right" />
    </Suspense>
  );
}

export default App;
