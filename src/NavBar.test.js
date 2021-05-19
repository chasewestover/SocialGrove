import React from "react";
import { render } from "@testing-library/react";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";

// Smoke Test
test("renders", async function () {
  const { container } = render(<BrowserRouter><NavBar /></BrowserRouter>);
});

// Snapshot
test("snapshot", function () {
  const { container } = render(<BrowserRouter><NavBar /></BrowserRouter>);
  expect(container).toMatchSnapshot();
});

//check for content in DOM
test("renders content in the dom", function () {
  const { container } = render(<BrowserRouter><NavBar /></BrowserRouter>);
  expect(container).toHaveTextContent('Snacks');
});

