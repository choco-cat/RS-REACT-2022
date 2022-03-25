import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './../routes/about';
import NotFound from './../routes/not-found';
import Home from './../routes/home';

export default class extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home searchValue="" />} />
        <Route path="about" element={<About />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}