import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AddCreatorPage, EditCreatorPage, ShowCreatorsPage, ViewCreatorPage } from './pages'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          {/* index for the default route */}
          <Route index element={<ShowCreatorsPage />} />
          <Route path="/:id" element={<ViewCreatorPage />} />
          <Route path="/new" element={<AddCreatorPage />} />
          <Route path="/edit/:id" element={<EditCreatorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
