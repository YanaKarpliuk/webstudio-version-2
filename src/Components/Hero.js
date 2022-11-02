import React from 'react';
import ModalWindow from './Modal';
import { CSSTransition } from 'react-transition-group';
import { useRef, useState } from 'react';

export default function Hero() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const nodeRef = useRef(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="hero">
      <div className="container hero-flex">
        <h1 className="hero-title">
          EFFECTIVE SOLUTIONS <br /> FOR YOUR BUSINESS
        </h1>
        <button
          onClick={openModal}
          type="button"
          className="btn btn-open-modal"
        >
          Place an order
        </button>
      </div>
      <CSSTransition
        in={modalIsOpen}
        nodeRef={nodeRef}
        timeout={250}
        classNames="modal"
        unmountOnExit
      >
        <ModalWindow nodeRef={nodeRef} onRequestClose={closeModal} />
      </CSSTransition>
    </section>
  );
}
