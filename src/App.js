import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/layout/Header/Header';
import Homepage from './components/views/Homepage/Homepage';
import TablePage from './components/views/TablePage/TablePage';
import NotFoundPage from './components/views/NotFoundPage/NotFoundPage';
import Footer from './components/layout/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path={'/'} element={<Homepage />} />
          <Route path={'/table/:id'} element={<TablePage />} />
          <Route path={'*'} element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
};

export default App;
