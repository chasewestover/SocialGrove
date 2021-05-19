import React from "react";
import { render } from "@testing-library/react";
import NotFound from "./NotFound";

// Smoke Test
test("renders", async function () {
  const {container} = render(<NotFound />);
});

// Snapshot
test("snapshot", function () {
  const { container } = render(<NotFound />);
  expect(container).toMatchSnapshot();
});

//check for content in DOM
test("renders content in the dom", function () {
  const { container } = render(<NotFound />);
  expect(container).toHaveTextContent('Sorry, we couldn\'t find that');
});

