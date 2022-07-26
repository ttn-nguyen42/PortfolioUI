import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './routes/about/About';
import Resume from './routes/resume/Resume';
import Projects from './routes/projects/Projects';
import Activities from './routes/activities/Activities';

import 'bootstrap/dist/css/bootstrap.min.css';

import Certificates from './routes/certificates/Certificates';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/certificates' element={<Certificates />} />
        <Route path='/activities' element={<Activities />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
