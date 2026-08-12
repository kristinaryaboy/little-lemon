import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "./Main";

// Step 1: test that static text in the BookingForm is rendered
test("Renders the BookingForm 'Choose date' label", () => {
  render(<BookingForm availableTimes={["5:00 PM"]} dispatch={() => {}} />);
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

// Step 2a: initializeTimes returns the expected non-empty list of times
test("initializeTimes returns a non-empty array of times", () => {
  const result = initializeTimes();
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
  expect(result).toContain("5:00 PM");
});

// Step 2b: updateTimes returns the same value provided in state
test("updateTimes returns the provided state for the UPDATE_TIMES action", () => {
  const state = initializeTimes();
  const action = { type: "UPDATE_TIMES", date: "2024-01-01" };
  expect(updateTimes(state, action)).toEqual(state);
});
