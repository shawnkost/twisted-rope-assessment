import React from "react";
import { render } from "@testing-library/react";
import Modal from "./Modal";

it("renders without crashing", () => {
  render(<Modal />);
});
