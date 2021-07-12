import React, { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import NewItem from "./components/NewItem/NewItem";
import DataChart from "./components/DataChart";
import FilterItem from "./components/NewItem/FilterItem";

const dummyItem = [
  { id: 1, title: "TV", amount: 12000, date: new Date(2021, 5, 5) },
  { id: 2, title: "Mobile", amount: 11200, date: new Date(2021, 4, 5) },
  { id: 3, title: "Mouse", amount: 700, date: new Date(2020, 3, 5) },
  { id: 4, title: "Keybord", amount: 1000, date: new Date(2019, 2, 5) },
];

function App() {
  const [items, setItems] = useState(dummyItem);

  const handleNewitem = (items) => {
    setItems((prevItems) => {
      return [items, ...prevItems];
    });
  };

  const [filteredYear, setfilteredYear] = useState("2021");

  const changeFilterYearHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };
  const filteredItem = items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="App">
      <NewItem addItem={handleNewitem} />
      <div className="container">
        <DataChart item={filteredItem} />
        <FilterItem
          selected={filteredYear}
          onChangeFilterYear={changeFilterYearHandler}
        />
        {filteredItem.length === 0 ? (
          <p>Item Not Found</p>
        ) : (
          filteredItem.map((item) => (
            <Item
              remove={items}
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
