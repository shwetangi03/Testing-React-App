import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("render post (succeed)", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", post: "First Post" }],
    });
    render(<Async />);
    const listItemElement = await screen.findAllByRole("listitem");
    expect(listItemElement).not.toHaveLength(0);
  });
});
