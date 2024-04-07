import React, { useState } from "react";
import "./Form.css";
import { RiDeleteBin6Line } from "react-icons/ri";

const Form = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      name,
    };
    setData([...data, user]);
    setName("");
  };
  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  let users = data?.map((el, index) => (
    <div key={index} className="form__info">
      <p>{el.name}</p>
      <button onClick={() => handleDelete(index)}>
        <RiDeleteBin6Line />
      </button>
    </div>
  ));

  return (
    <div className="wrapper">
      <div className="from__wrapper">
        <div className="form__section">
          <form onSubmit={handleSubmit} className="form__input">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
              placeholder="write information"
            />
            <button type="submit">Add</button>
          </form>
          <>{users}</>
        </div>
      </div>
    </div>
  );
};

export default Form;
