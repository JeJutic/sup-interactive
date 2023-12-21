import "./QuestionModal.css";
import React, { Fragment, useState } from "react";
import Modal from "react-overlays/Modal";

import { CSSTransition, Transition } from "react-transition-group";

function CloseButton({ onClick }) {
  return <div className="close-button" onClick={onClick}></div>;
}

const fadeStyles = {
  entered: "show",
  entering: "show",
};

const Fade = ({ children, ...props }) => (
  <Transition {...props} timeout={300}>
    {(status, innerProps) =>
      React.cloneElement(children, {
        ...innerProps,
        className: `fade fade-${fadeStyles[status]} ${children.props.className}`,
      })
    }
  </Transition>
);

function QuestionModal({
  overlayComponent,
  showModal,
  setShowModal,
  onQuestionSolved,
  checkFinish,
}) {
  const [showFront, setShowFront] = useState(true);

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setShowFront(true), 300);
    checkFinish();
  };

  const btn = <CloseButton onClick={closeModal} />;

  return (
    <Modal
      className="modal"
      show={showModal}
      onHide={closeModal}
      transition={Fade}
    >
      <Fragment>
        <div className="question-wrapper">
          <CSSTransition in={showFront} timeout={300} classNames="flip">
            <div className="question">
              {React.cloneElement(overlayComponent(onQuestionSolved), {
                flip: () => {
                  setShowFront((v) => !v);
                },
                closeButton: btn,
              })}
            </div>
          </CSSTransition>
        </div>
        <div className="shadow"></div>
      </Fragment>
    </Modal>
  );
}

export default QuestionModal;
