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

// Step 2b: updateTimes returns available times for the selected date
test("updateTimes returns a non-empty list of times for the selected date", () => {
  const action = { type: "UPDATE_TIMES", date: "2024-01-01" };
  const result = updateTimes([], action);
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

// Validation: submit is disabled until the form is valid (no date chosen)
test("Submit button is disabled when the form is invalid", () => {
  render(
    <BookingForm
      availableTimes={["5:00 PM"]}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );
  const submitButton = screen.getByRole("button", {
    name: /make your reservation/i,
  });
  expect(submitButton).toBeDisabled();
});
