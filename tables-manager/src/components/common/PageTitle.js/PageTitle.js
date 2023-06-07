import styles from './PageTitle.module.scss';

const PageTitle = ({ children }) => {
  return (
    <div className={styles.title}>
      <h1>{children}</h1>
    </div>
  );
};
export default PageTitle;
