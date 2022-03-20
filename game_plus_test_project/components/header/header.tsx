import { Nav, Navbar } from "react-bootstrap";
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuButton from './button';
import MenuButtonPlay from './buttonPlay';
import styles from '../../styles/header.module.scss';
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <Navbar collapseOnSelect bg="light" className={styles.bgHeader}>
      {/* expand="sm" */}
      <Navbar.Brand href="#">
        <img src="/logo.png"
          className={styles.logo}
        />
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          className="mr-auto"
          style={{ maxHeight: '100px' }}
          navbarScroll
          activeKey={router.route}
        >
          <MenuButton href="/" buttonName="Games" isVisibleSelect={true} />
          <MenuButton buttonName="MenuShip" isVisibleSelect={false} />
          <MenuButton buttonName="Dowload" isVisibleSelect={false} />
          <MenuButton buttonName="Blog" isVisibleSelect={false} />
          <MenuButton buttonName="Support" isVisibleSelect={false} />
        </Nav>
      </Navbar.Collapse>
      <MenuButtonPlay />
    </Navbar>
  )
}
export default Header;