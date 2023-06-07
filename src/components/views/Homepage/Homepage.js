import styles from './Homepage.module.scss';
import PageTitle from '../../common/PageTitle.js/PageTitle';
import Tables from '../Tables/Tables';

const Homepage = () => (
  <div className={styles.root}>
    <PageTitle>All tables</PageTitle>
    <Tables />
  </div>
);

export default Homepage;
