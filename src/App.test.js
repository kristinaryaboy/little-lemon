import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders the Little Lemon app with its logo", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const logo = screen.getByAltText("Little Lemon logo");
  expect(logo).toBeInTheDocument();
});
