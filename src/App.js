import React, { useEffect, useState } from "react";
import CardList from "./Components/CardList";
import SearchBox from "./Components/SearchBox";
import { robots } from "./robots";
import "./App.css";
import Scroll from "./Components/Scroll";

function App() {
  const [searchField, setSearchField] = useState([]);

  const searchChangeHandler = (event) => {
    const filteredRobot = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    setSearchField(filteredRobot);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setSearchField(data));
  }, []);

  return !searchField.length ? (
    <h2 className="tc">Loading...</h2>
  ) : (
    <div className="tc">
      <h1 className="f1">ROBOFRIENDS</h1>
      <SearchBox searchChange={searchChangeHandler} />
      <Scroll>
        <CardList robots={searchField} />
      </Scroll>
    </div>
  );
}

export default App;
