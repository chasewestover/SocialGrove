import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Menu from "./Menu";
import Home from "./Home";
import Item from "./Item";
import NotFound from "./NotFound";
import AddForm from "./AddForm";

//routes component
function Routes({snacks, drinks}) {
  const snackText = "Oh yes, step right up and sample these um tasty snacks that are so tasty and delightful"
  const drinkText = "Uhoh! We got drinks, yes we do!! We got drunk how bout you?!?"
  return (
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/snacks"><Menu text={snackText} items={snacks} title="Snacks" /></Route>
      <Route path="/snacks/:id"><Item items={snacks} cantFind="/snacks" /></Route>
      <Route exact path="/drinks"><Menu text={drinkText} items={drinks} title="Drinks" /></Route>
      <Route path="/drinks/:id"><Item items={drinks} cantFind="/drinks" /></Route>
      <Route path="/add"><AddForm /></Route>
      <Route exact path="/404"><NotFound/></Route>
      <Route><Redirect to='/404'/></Route>
    </Switch>
  );
}
export default Routes;