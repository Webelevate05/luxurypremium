import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const Dresses = lazy(() => import('./pages/Dresses'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading component for Suspense
const PageLoader = () => (
  <div className="fixed inset-0 bg-brand-bg flex items-center justify-center z-[100]">
    <div className="w-16 h-px bg-brand-accent animate-[scaleX_1.5s_ease-in-out_infinite]" />
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dresses" element={<Dresses />} />
            <Route path="dresses/:id" element={<ProductDetail />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
