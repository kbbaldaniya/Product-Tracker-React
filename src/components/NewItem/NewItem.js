import React, { useState } from "react";
import "./NewItem.css";

const NewItem = (props) => {
  const [addItem, setAddItem] = useState(false);

  const handleAddItem = () => {
    setAddItem(true);
  };
  const handleClose = () => {
    setAddItem(false);
  };

  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  const handleSaveItemData = (enteredItemData) => {
    const itemData = {
      ...enteredItemData,
    };
    props.addItem(itemData);
  };
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    handleSaveItemData(newData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="new-expense">
      {!addItem && <button onClick={handleAddItem}>Add New Item</button>}
      {addItem && (
        <form onSubmit={handleSubmit}>
          <div className="new-expense__controls">
            <div className="new-expense__controls">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={handleChangeTitle}
              />
            </div>
            <div className="new-expense__controls">
              <label>Amount</label>
              <input
                type="number"
                value={enteredAmount}
                min="0.01"
                step="0.01"
                onChange={handleChangeAmount}
              />
            </div>
            <div className="new-expense__controls">
              <label>Date</label>
              <input
                type="date"
                value={enteredDate}
                min="2019-01-01"
                max="2021-12-31"
                onChange={handleChangeDate}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={handleClose}>Close</button>
            <button type="submit">Add Item</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default NewItem;
