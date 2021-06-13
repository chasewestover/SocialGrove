import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import Routes from "./Routes";
import { useDispatch, useSelector } from "react-redux";
import { updateDrinks, updateSnacks } from "./actions";
import API from "./Api";

console.log(process.env.REACT_APP_DB);

function App() {
  const snacks = useSelector(state => state.snacks);
  const drinks = useSelector(state => state.drinks);
  const dispatch = useDispatch();

  //loads snacks and drinks from the API on initial render
  useEffect(() => {
    async function getAllItems() {
      const snacks = await API.getSnacks();
      const drinks = await API.getDrinks();
      dispatch(updateSnacks(snacks));
      dispatch(updateDrinks(drinks));
    }
    getAllItems();
  }, []);


  if (!snacks || !drinks) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes snacks={snacks} drinks={drinks} />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
