import React from "react";
import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

const viewPastResponses = jest.fn();
const allResults = [];
const clearResponses = jest.fn();

test("renders the correct content on page load", () => {
  render(
    <Modal
      toggle={viewPastResponses}
      allResults={allResults}
      clear={clearResponses}
    />
  );
  screen.getByRole('table');
  screen.getByRole('button');
});
