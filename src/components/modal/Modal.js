import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './Backdrop';
import './Modal.css';

const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header`}>
        <button
          onClick={props.onCancel}
          style={{
            border: 'none',
            backgroundColor: 'transparent',
            padding: '0.5rem 0.7rem',
          }}
        >
          X
        </button>
        <h2>{props.header}</h2>
        <button onClick={props.onSubmit}>Share</button>
      </header>
      <div className={`modal__content`}>{props.children}</div>
      <footer className={`modal__footer`}>{props.footer}</footer>
    </div>
  );
  return createPortal(content, document.getElementById('modal-hook'));
};

const Modal = (props) => {
  return (
    <Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={150}
        classNames='modal'
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </Fragment>
  );
};

export default Modal;
