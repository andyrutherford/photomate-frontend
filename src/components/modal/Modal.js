import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './Backdrop';
import './Modal.css';

const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      {!props.noHeader && !props.followerFollowing && (
        <header className={`modal__header`}>
          <button
            onClick={props.onCancel}
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              padding: '0.5rem 0.7rem',
              color: 'red',
              fontSize: '16px',
            }}
          >
            Cancel
          </button>
          <label style={{ fontSize: '16px' }}>{props.header}</label>
          <button
            onClick={props.onSubmit}
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              padding: '0.5rem 0.7rem',
              color: '#0095f6',
              fontSize: '16px',
            }}
          >
            Share
          </button>
        </header>
      )}
      {props.followerFollowing && (
        <header
          className={`modal__header`}
          style={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}
        >
          <label style={{ fontSize: '14px', margin: 'auto' }}>
            {props.header}
          </label>
        </header>
      )}
      <div className={`modal__content`}>{props.children}</div>
      {!props.noFooter && (
        <footer className={`modal__footer`}>{props.footer}</footer>
      )}
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
