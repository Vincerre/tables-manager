import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const NavBar = () => (
  <div className={styles.navbar}>
    <h3>Waiter.app</h3>
    <Nav className={styles.link}>
      <Nav.Link as={NavLink} to="/">
        Home
      </Nav.Link>
    </Nav>
  </div>
);

export default NavBar;
