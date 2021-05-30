import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Routes from "./Routes";

console.log(process.env.REACT_APP_DB)

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  //function for adding new drink/snack to state
  function add(type, item) {
    switch (type) {
      case 'snack':
        setSnacks(snacks => [...snacks, item]);
        break;
      case 'snack':
        setDrinks(snacks => [...snacks, item]);
    }
  }

  //loads snacks and drinks from the API on initial render
  useEffect(() => {
    async function getAllItems() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getAllItems();
  }, []);


  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes add={add} snacks={snacks} drinks={drinks} />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
