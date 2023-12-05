import "./QuestionModal.css";
import React, { Fragment, useState } from "react";
import Modal from "react-overlays/Modal";

import { Transition, CSSTransition } from "react-transition-group";

function CloseButton({ onClick }) {
  return (
    <button className="close-button" onClick={onClick}>
      +
    </button>
  );
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
}) {
  const [showFront, setShowFront] = useState(true);

  const closeModal = () => setShowModal(false);

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
                onClick: () => {
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
