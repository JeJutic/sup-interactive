import "./QuestionModal.css"
import React, {Fragment} from "react";
import Modal from "react-overlays/Modal";

function CloseButton({ setShowModal }) {
    return (
        <button className="close-button" onClick={() => setShowModal(false)}>
            close
        </button>
    );
}

function QuestionModal({ overlayComponent, showModal, setShowModal }) {
    const handleClose = () => setShowModal(false);

    return (
        <Modal
            className="modal"
            show={showModal}
            onHide={handleClose}
        >
            <Fragment>
                <div className="question">
                    {overlayComponent}
                    <CloseButton setShowModal={setShowModal}/>
                </div>
                <div className="shadow"></div>
            </Fragment>
        </Modal>
    )
}

export default QuestionModal