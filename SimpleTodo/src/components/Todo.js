import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  const todos = props.todos.map((todo) => {
    return (
      <div>
        <h2>{todo}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
        {modalIsOpen && (
          <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
        )}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      </div>
    );
  });

  return (
    <div className="card">
      {todos}
      {/* <h2>TITLE</h2>
      <div className="actions">
        <button className="btn">Delete</button>
      </div> */}
    </div>
  );
};

export default Todo;
