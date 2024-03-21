import { useState } from "react";
import Modal from "./Modal";
import "./modal.css";

const ModalTest = () => {
  const [showModalPopup, setShowModalPopUp] = useState(false);

  const handleToggleModalPopup = () => {
    setShowModalPopUp(!showModalPopup);
  };

  const onClose = () => {
    setShowModalPopUp(false);
  };

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal
          id={"custom-id"}
          onClose={onClose}
          body={<div>Customized body</div>}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
        />
      )}
    </div>
  );
};

export default ModalTest;
