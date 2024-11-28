import React from 'react';
import {  Routes, Route } from "react-router-dom";
import HomeTwo from './pages/HomeTwo';
import Philosophy from './pages/Philosophy';
import Subscription from './pages/Subscription';
import Storage from './pages/Storage';
import StorageTwo from './pages/StorageTwo';
import Verfiaction from './pages/Verifiacation';
import VerificationPricing from './pages/VerificationPricing';
import Esign from './pages/Esign';
import Pricing from './pages/Pricing';
import EsignPricing from './pages/EsignPricing';
import Login from './pages/Login';

function App() {
  

  return (
    <Routes>
        <Route path="/" element={<HomeTwo/>} />
        <Route path="/philosophy" element={<Philosophy/>} />   
        <Route path="/subscription" element={<Subscription/>} />
        <Route path="/storage" element={<Storage/>} />
        <Route path="/storage-pricing" element={<StorageTwo/>} />
        <Route path="/verification" element={<Verfiaction/>} />
        <Route path="/verification-pricing" element={<VerificationPricing/>} />
        <Route path="/esign" element={<Esign/>} />
        <Route path="/esign-pricing" element={<EsignPricing/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
  )
}

export default App
