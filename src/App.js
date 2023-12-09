import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';

const HomePage = lazy(() => import('./pages/Home'));
const FavoritesPage = lazy(() => import('./pages/Favorites'));
const NanniesPage = lazy(() => import('./pages/Nannies'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          
          <Route index element={<HomePage />} />
          <Route path="/" element={<Layout />}>
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/nannies" element={<NanniesPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
