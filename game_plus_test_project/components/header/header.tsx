import { Col, Nav, Navbar } from "react-bootstrap";
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuButton from './button';
import MenuButtonPlay from './buttonPlay';
import styles from '../../styles/header.module.scss';
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <Col md={12} lg={12}>
      <Navbar bg="light" expand="lg" className={styles.bgHeader}>
        <Col className='d-none d-lg-block' md={1} lg={1}></Col>
        <Col className='d-none d-lg-block' md={2} lg={2}>
          <Navbar.Brand href="#">
            <img src="/logo.png"
              className={styles.logo}
            />
          </Navbar.Brand>
        </Col>
        <Col className='d-none d-lg-block' md={1} lg={1}></Col>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
          // activeKey={router.route}
          >
            <MenuButton href="/" buttonName="Games" isVisibleSelect={true} />
            <MenuButton buttonName="MenuShip" />
            <MenuButton buttonName="Dowload" />
            <MenuButton buttonName="Blog" />
            <MenuButton buttonName="Support" />
          </Nav>
        </Navbar.Collapse>
        <Col className='d-none d-lg-block' md={2} lg={2}><MenuButtonPlay /></Col>
      </Navbar>
    </Col>
  )
}
export default Header;