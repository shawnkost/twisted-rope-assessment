import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import Form from './components/Form'

const viewPastResponses = jest.fn();

const Button = ({ viewPastResponses }) => (
  <button onClick={viewPastResponses}>View previous results</button>
);


test('renders the correct content on page load', () => {
  render(<App />);
  screen.getByText('Magic 8-Ball');
  screen.getByRole('img');
  render(<Form />);
  render(<Button onClick={viewPastResponses} />);
})

test("calls viewPastResponses when previous results button is clicked", async () => {
  const {getByText} = render(<Button onClick={viewPastResponses()} />);
  const button = getByText('View previous results');
  await fireEvent.click(button);
  expect(viewPastResponses).toHaveBeenCalled();
});
