import styles from './Homepage.module.scss';
import PageTitle from '../../common/PageTitle.js/PageTitle';
import Tables from '../Tables/Tables';
import { fetchTables } from '../../../redux/tablesRedux';
import { useDispatch } from 'react-redux';
import { Triangle } from 'react-loader-spinner';
import initialState from '../../../redux/initialState';
import { useEffect, useState } from 'react';

const Homepage = () => {
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
      <div className={styles.root}>
        <PageTitle>All tables</PageTitle>
        <Tables />
      </div>
    );
  }
};

export default Homepage;
