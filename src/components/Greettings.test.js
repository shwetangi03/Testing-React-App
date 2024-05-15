import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";

// test Suites
describe("Greetings component", () => {
  test("renders Hello world as a text", () => {
    // Arrange
    render(<Greetings />);

    // Act
    // Nothing...

    //Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });
});
