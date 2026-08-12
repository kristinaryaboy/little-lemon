import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "./Main";

// helper to render the form with the props it needs
const renderForm = () =>
  render(
    <BookingForm
      availableTimes={["5:00 PM", "6:00 PM"]}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );

/* ---------- static content ---------- */

test("Renders the BookingForm 'Choose date' label", () => {
  renderForm();
  expect(screen.getByText("Choose date")).toBeInTheDocument();
});

/* ---------- reducer functions ---------- */

test("initializeTimes returns a non-empty array of times", () => {
  const result = initializeTimes();
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
  expect(result).toContain("5:00 PM");
});

test("updateTimes returns a non-empty list of times for the selected date", () => {
  const action = { type: "UPDATE_TIMES", date: "2024-01-01" };
  const result = updateTimes([], action);
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

/* ---------- Step 1: HTML5 validation attributes ---------- */

test("Date input is required and cannot be a past date", () => {
  renderForm();
  const dateInput = screen.getByLabelText("Choose date");
  expect(dateInput).toBeRequired();
  expect(dateInput).toHaveAttribute("type", "date");
  expect(dateInput).toHaveAttribute("min");
});

test("Guests input is required with min 1 and max 10", () => {
  renderForm();
  const guestsInput = screen.getByLabelText("Number of guests");
  expect(guestsInput).toBeRequired();
  expect(guestsInput).toHaveAttribute("type", "number");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test("Time and Occasion selects are required", () => {
  renderForm();
  expect(screen.getByLabelText("Choose time")).toBeRequired();
  expect(screen.getByLabelText("Occasion")).toBeRequired();
});

/* ---------- Step 2: React validation (valid + invalid states) ---------- */

test("Submit button is disabled when the form is invalid (no date)", () => {
  renderForm();
  const submitButton = screen.getByRole("button", {
    name: /make your reservation/i,
  });
  expect(submitButton).toBeDisabled();
});

test("Submit button is enabled when all fields are valid", () => {
  renderForm();
  fireEvent.change(screen.getByLabelText("Choose date"), {
    target: { value: "2099-12-31" },
  });
  fireEvent.change(screen.getByLabelText("Number of guests"), {
    target: { value: "4" },
  });
  const submitButton = screen.getByRole("button", {
    name: /make your reservation/i,
  });
  expect(submitButton).toBeEnabled();
});

test("Submit button is disabled when the guest count is out of range", () => {
  renderForm();
  fireEvent.change(screen.getByLabelText("Choose date"), {
    target: { value: "2099-12-31" },
  });
  fireEvent.change(screen.getByLabelText("Number of guests"), {
    target: { value: "11" },
  });
  const submitButton = screen.getByRole("button", {
    name: /make your reservation/i,
  });
  expect(submitButton).toBeDisabled();
});
