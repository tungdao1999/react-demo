import React, { useState, forwardRef, useImperativeHandle } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    width : '50%',
    top: '25%',
    left: '25%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    alignItems: 'center',
    display : "flex",
    flexDirection : "column",
    justifyContent: 'center',
  }
};
const Edit = forwardRef((props, ref) => {
  const [isModalOpen, setOpen] = useState(false);
  const [item, setItem] = useState();
  const [newItem, setNewItem] = useState();

  useImperativeHandle(ref, () => ({
    open(item) {
      setOpen(true);
      setItem(item);
    },
  }));
  function closeModal() {
    setOpen(false);
  }
  function edit() {
    props.editItem(item, newItem);
    closeModal();
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      contentLabel="Edit item"
      style = {customStyles}
    >

      <input
        name="item"
        type="text"
        defaultValue={item}
        onChange={(e) => setNewItem(e.target.value)}
      ></input>
      <div style={{display : "inline-block",  margin:"5px"}}>
        <button onClick={() => edit()}>Edit</button>
        <button onClick={() => closeModal()}>Close</button>
      </div>
    </Modal>
  );
});
export default Edit;
