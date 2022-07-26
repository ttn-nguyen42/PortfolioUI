import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './routes/about/About';
import Resume from './routes/resume/Resume';
import Projects from './routes/projects/Projects';
import Posts from './routes/posts/Posts';
import Activities from './routes/activities/Activities';

import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './routes/contact/Contact';

import 'swiper/css';
import 'swiper/css/scrollbar';

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
        <Route path='/posts' element={<Posts />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
