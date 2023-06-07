import { getAllTables } from '../../../redux/tablesRedux';
import { useSelector } from 'react-redux';
import styles from './Tables.module.scss';
import TablesList from '../../features/TablesList/TablesList';

const Tables = () => {
  const tables = useSelector((state) => getAllTables(state));
  return (
    <div className={styles.root}>
      {tables.map((table) => (
        <TablesList key={table.id} id={table.id} status={table.status} />
      ))}
    </div>
  );
};

export default Tables;
