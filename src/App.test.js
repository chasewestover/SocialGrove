import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import axiosMock from 'axios';
import SnackOrBoozeApi from "./Api";

SnackOrBoozeApi.getDrinks = jest.fn();
SnackOrBoozeApi.getSnacks = jest.fn();

// Smoke Test
test("renders", async function () {
  const {container} = render(<App />);
});

// Snapshot
test("snapshot", function () {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});



//check for loading in DOM
test("renders", function () {
  const { container } = render(<App />);
  expect(container).toHaveTextContent('Loading');
});

