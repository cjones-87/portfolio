import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes as NavigationRoutes,
} from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const Routes = () => {
  return (
    <BrowserRouter>
      <NavigationRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactme" element={<Contact />} />
      </NavigationRoutes>
    </BrowserRouter>
  );
};

export default Routes;
