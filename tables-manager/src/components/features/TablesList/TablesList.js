import styles from './TablesList.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TablesList = ({ id, status }) => {
  return (
    <div className={styles.root}>
      <div className={styles.table}>
        <h1>Table {id}</h1>
        <h4>Status: {status}</h4>
      </div>
      <div>
        <Link to={`table/${id}`}>Show more</Link>
      </div>
    </div>
  );
};

TablesList.propTypes = {
  id: PropTypes.string,
  status: PropTypes.string,
};

export default TablesList;
