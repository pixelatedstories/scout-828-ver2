/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import BusinessProfile from './pages/BusinessProfile';
import GetScouted from './pages/GetScouted';
import About from './pages/About';
import NotFound from './pages/NotFound';

function AnimatedRoutes() {
  const location = useLocation();
  
  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  const AnyRoutes = Routes as any;

  return (
    <AnimatePresence mode="wait">
      <AnyRoutes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
            <Home />
          </motion.div>
        } />
        <Route path="/about" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
            <About />
          </motion.div>
        } />
        <Route path="/get-scouted" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
            <GetScouted />
          </motion.div>
        } />
        <Route path="/:categorySlug" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
            <CategoryPage />
          </motion.div>
        } />
        <Route path="/:categorySlug/:slug" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
            <BusinessProfile />
          </motion.div>
        } />
        <Route path="*" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
            <NotFound />
          </motion.div>
        } />
      </AnyRoutes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
