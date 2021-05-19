import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";


// Smoke Test
test("renders", async function () {
  const {container} = render(<Home />);
});

// Snapshot
test("snapshot", function () {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});

//check for content in DOM
test("renders", function () {
  const { container } = render(<Home />);
  expect(container).toHaveTextContent('Welcome to Silicon Valley\'s premier dive cafe!');
});

