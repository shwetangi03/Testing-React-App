import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";
import userEvent from "@testing-library/user-event";

// test Suites
describe("Greetings component", () => {
  test("renders Hello world as a text", () => {
    render(<Greetings />);
    const helloWorldElement = screen.getByText("Hello World!", {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you (button not clicked)", () => {
    render(<Greetings />);
    const paraElement = screen.getByText("Its good to see you", {
      exact: false,
    });
    expect(paraElement).toBeInTheDocument();
  });

  test("renders changed (button clicked)", () => {
    render(<Greetings />);
    // act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const outputElemment = screen.getByText("Changed", { exact: false });
    expect(outputElemment).toBeInTheDocument();
  });

  test("render changed (button clicked)", () => {
    render(<Greetings />);
    // act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const output = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(output).toBeNull();
  });
});
