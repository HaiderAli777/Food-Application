import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import Cart from "../Cart/Cart";
const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const portableElemement = document.getElementById("modal");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay classNam={classes.modal}>{props.children}</ModalOverlay>
      )}
    </Fragment>
  );
};

export default Modal;
