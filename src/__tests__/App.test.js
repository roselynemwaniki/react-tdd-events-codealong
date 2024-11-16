import { render, screen, } from "@testing-library/react";
import App from "../App";

import '@testing-library/jest-dom';

// Code tests here
test("pizza checkbox is initially unchecked", () => {
    render(<App />);

    const addPepperoni = screen.getByRole("checkbox", {name: /add pepperoni/i});

    expect(addPepperoni).not.toBeChecked();
  })

  test("toppings list initially contains only cheese", () => {
    render(<App />);

    expect(screen.getAllByRole("listitem").length).toBe(1);
    expect(screen.getByText("Cheese")).toBeInTheDocument();
    expect(screen.queryByText("Pepperoni")).not.toBeInTheDocument();
  })


  test("checkbox appears as checked when user clicks it", () => {
    render(<App />);

    const addPepperoni = screen.getByRole("checkbox", {name: /add pepperoni/i});


  })

  test("topping appears in toppings list when checked", () => {
    render(<App />);

    const addPepperoni = screen.getByRole("checkbox", {name: /add pepperoni/i});


  })

 
  test("selected topping disappears when checked a second time", () => {
    render(<App />);

    const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });



    expect(addPepperoni).not.toBeChecked();
    expect(screen.getByText("Cheese")).toBeInTheDocument();
    expect(screen.queryByText("Pepperoni")).not.toBeInTheDocument();

  });

