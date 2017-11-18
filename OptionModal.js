import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption} //determines if modal should be open--> require 2 props in order to work
        onRequestClose={props.handleClearSelectedOption} //calls the fn when the use tries to close the modal (esc key and clicking background)
        contentLabel="Selected Option"//for accessibility purposes/option enabled
        closeTimeoutMS={200}
        className="modal"//allows us to set up our own style
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;