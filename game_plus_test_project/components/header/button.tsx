import { Col, Nav, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/header.module.scss';

interface ButtonProps {
    buttonName: string;
    isVisibleSelect?: boolean;
    href?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <Nav.Link href={props.href} className={props.isVisibleSelect ? styles.menuButtonActive : styles.menuButton}>
            {props.buttonName}
            <Col className='d-none d-lg-block' xs={0} sm={0}>
                {props.isVisibleSelect &&
                    <img src="/menu_icon.svg"
                        className={styles.path2}></img>
                }
            </Col>
        </Nav.Link>

    )
}
export default Button;