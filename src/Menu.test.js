
import React from "react";
import { render } from "@testing-library/react";
import Menu from "./Menu";
import { BrowserRouter } from "react-router-dom";


// Smoke Test
test("renders", async function () {
  const { container } = render(<BrowserRouter><Menu text="" title='title' items={[{
    "id": "nachos",
    "name": "Nachos",
    "description": "An American classic!",
    "recipe": "Cover expensive, organic tortilla chips with Cheez Whiz.",
    "serve": "Serve in a hand-thrown ceramic bowl, garnished with canned black olives"
  }]} /></BrowserRouter>);
});

// Snapshot
test("snapshot", function () {
  
  const { container } = render(<BrowserRouter><Menu text="" title='title' items={[{
    "id": "nachos",
    "name": "Nachos",
    "description": "An American classic!",
    "recipe": "Cover expensive, organic tortilla chips with Cheez Whiz.",
    "serve": "Serve in a hand-thrown ceramic bowl, garnished with canned black olives"
  }]} /></BrowserRouter >);
  expect(container).toMatchSnapshot();
});

//check for loading in DOM
test("renders part of the page", function () {
  const { container } = render(<BrowserRouter><Menu text="" title='test title' items={[{
    "id": "nachos",
    "name": "Nachos",
    "description": "An American classic!",
    "recipe": "Cover expensive, organic tortilla chips with Cheez Whiz.",
    "serve": "Serve in a hand-thrown ceramic bowl, garnished with canned black olives"
  }]} /></BrowserRouter >);
  expect(container).toHaveTextContent('test title');
});

