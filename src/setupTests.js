// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// The booking API (fetchAPI / submitAPI) is loaded from a <script> in
// index.html when the app runs. Jest has no such script, so provide mocks
// here so the reducer functions and components can be tested.
global.fetchAPI = function (date) {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

global.submitAPI = function (formData) {
  return true;
};
