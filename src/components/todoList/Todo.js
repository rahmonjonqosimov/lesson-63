import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiDeleteBin6Line } from "react-icons/ri";

const Todo = () => {
  const [list, setList] = useState("");
  const [data, setData] = useState([]);
  let effect = useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  console.log(effect);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!list.trim()) {
      console.log("ok");
      return toast.warn("Iltimos maydonni to'ldiring!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    let lists = {
      id: new Date().getTime(),
      title: list,
    };
    setData([...data, lists]);
    // effect();
    setList("");
  };

  const deleteList = (e) => {
    let id = e.target.closest("[data-id]").dataset.id;
    let newData = data.filter((el) => el.id !== +id);
    setData([...newData]);
    // effect
  };

  const listsBox = () => {
    return data?.map((el, i) => (
      <div className="lists" data-id={el.id} key={i}>
        <h5 title={el.title}>{el.title}</h5>
        <button onClick={deleteList} name="del">
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default Todo;
