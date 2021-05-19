import React from "react";
import { render } from "@testing-library/react";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";

// Smoke Test
test("renders", async function () {
  const { container } = render(<BrowserRouter><Routes /></BrowserRouter>);
});

// Snapshot
test("snapshot", function () {
  const { container } = render(<BrowserRouter><Routes /></BrowserRouter>);
  expect(container).toMatchSnapshot();
});

//check for content in DOM
test("renders content in the dom", function () {
  const { container } = render(<BrowserRouter><Routes /></BrowserRouter>);
  expect(container).toHaveTextContent('Welcome to Silicon');
});

