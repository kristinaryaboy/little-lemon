# Little Lemon

A responsive React web app for the Little Lemon restaurant in Chicago. Customers can browse the homepage and reserve a table online through a form connected to a booking API.

Built as the final capstone project for the Meta Front-End Developer program.

## Features

- **Responsive homepage** with a hero call to action, weekly specials, customer testimonials, and an about section
- **Mobile-friendly navigation** with a hamburger menu, logo, and cart icon
- **Table reservation flow**
  - Controlled booking form (date, time, number of guests, occasion)
  - Available times fetched from the API and updated based on the selected date
  - Client-side validation (HTML5 plus React) with the submit button disabled until the form is valid
  - Confirmation page shown after a successful booking
- **Accessibility** using semantic HTML, ARIA attributes, and properly labeled form fields
- **Unit tests** with Jest and React Testing Library

## Tech stack

- React (Create React App)
- React Router for navigation
- `useState` and `useReducer` for state management
- Jest and React Testing Library for testing
- CSS with the Little Lemon brand style guide (Markazi Text and Karla fonts)

## Getting started

Install dependencies:

```bash
npm install
```

Run the app in development mode at [http://localhost:3000](http://localhost:3000):

```bash
npm start
```

Run the test suite:

```bash
npm test
```

Create a production build:

```bash
npm run build
```

## Project structure

```
src/
├── App.js               App shell (Header, Main, Footer)
├── Header.js / Nav.js   Responsive navigation
├── Main.js              Routes and lifted booking-times state (useReducer)
├── Homepage.js          Composes the homepage sections
├── CallToAction.js      Hero section
├── Specials.js          Weekly specials / order for delivery
├── CustomersSay.js      Testimonials
├── Chicago.js           About the restaurant
├── BookingPage.js       Reservation page
├── BookingForm.js       Controlled, validated booking form
├── ConfirmedBooking.js  Booking confirmation page
├── ComingSoon.js        Placeholder for pages not yet built
└── images/              Brand and food photography assets
```
