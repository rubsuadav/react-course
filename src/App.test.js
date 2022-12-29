import { render, screen } from "@testing-library/react";
import { TaskCard } from "./Task";

test("test task", () => {
  render(<TaskCard />);
  expect(screen.getByText("Mi primera tarjeta")).toBeInTheDocument;
});
