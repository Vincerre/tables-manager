import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/layout/Header/Header';
import Homepage from './components/views/Homepage/Homepage';
import TablePage from './components/views/TablePage/TablePage';
import NotFoundPage from './components/views/NotFoundPage/NotFoundPage';
import Footer from './components/layout/Footer/Footer';
import { fetchTables } from './redux/tablesRedux';
import { useDispatch } from 'react-redux';
import { Triangle } from 'react-loader-spinner';
import initialState from './redux/initialState';
const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState({ initialState } || false);

  useEffect(() => {
    dispatch(fetchTables());
    setTimeout(() => setLoading(false), 1000);
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={'loadingContainer ' + styles.loading}>
        <Triangle
          type="ThreeDots"
          color="#00b22d"
          height={100}
          width={100}
          //3 secs
        />
        <h1>Loading</h1>
      </div>
    );
  } else {
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
  }
};

export default App;
