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
    <Navbar bg="light" expand="lg" className={styles.bgHeader}>
      <Navbar.Brand href="#">
        <img src="/logo.png"
          className={styles.logo}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="me-auto"
          // activeKey={router.route}
        >
          <MenuButton href="/" buttonName="Games" isVisibleSelect={true} />
          <MenuButton buttonName="MenuShip" isVisibleSelect={false} />
          <MenuButton buttonName="Dowload" isVisibleSelect={false} />
          <MenuButton buttonName="Blog" isVisibleSelect={false} />
          <MenuButton buttonName="Support" isVisibleSelect={false} />
          <MenuButtonPlay />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Header;