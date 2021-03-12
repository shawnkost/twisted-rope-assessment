import React from "react";
import { render, screen } from "@testing-library/react";
import Form from "./Form";

test("renders the correct content on page load", () => {
  render(<Form />);
  screen.getByPlaceholderText('What is your question?');
  screen.getAllByRole('button')
});
