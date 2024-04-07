import React, { useState } from "react";
import { toast } from "react-toastify";
import { RiDeleteBin6Line } from "react-icons/ri";
import "react-toastify/dist/ReactToastify.css";

const Todo = () => {
  const [list, setList] = useState("");
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!list.trim()) {
      console.log("ok");
      return alert("salom");
    }
    let lists = {
      id: new Date().getTime(),
      title: list,
    };
    setData([...data, lists]);
    setList("");
  };

  const listsBox = () => {
    return data?.map((el, i) => (
      <div className="lists" data-id={el.id} key={i}>
        <h5 title={el.title}>{el.title}</h5>
        <button name="del">
          <RiDeleteBin6Line className="delete" />
        </button>
      </div>
    ));
  };

  return (
    <div className="container">
      <div className="content">
        <form onSubmit={handleSubmit} className="form">
          <input
            value={list}
            type="text"
            onChange={(e) => setList(e.target.value)}
            placeholder="Add your new todo"
          />
          <button>Add</button>
        </form>
        <div>{listsBox()}</div>
      </div>
    </div>
  );
};

export default Todo;
