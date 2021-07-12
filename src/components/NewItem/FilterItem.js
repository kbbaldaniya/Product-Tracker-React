import React from "react";

const FilterItem = (props) => {
  const yearChangeHandler = (event) => {
    props.onChangeFilterYear(event.target.value);
  };

  return (
    <div style={{ float: "right" }}>
      <label>Filter by year</label>
      <select
        style={{
          font: "inherit",
          cursor: "pointer",
          padding: "7px",
          borderRadius: "10px",
          margin: "1rem",
          outline: "none",
        }}
        onChange={yearChangeHandler}
      >
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
      </select>
    </div>
  );
};

export default FilterItem;
