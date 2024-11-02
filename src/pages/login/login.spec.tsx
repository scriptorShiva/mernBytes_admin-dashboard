import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Login from "./login";

describe("Login page", () => {
  it("should render with required fields", () => {
    render(<Login />);
    //getBy -- throws an error
    //queryBy -- returns null
    //findBy -- returns promise (Async)

    expect(screen.getByText(/Sign In/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Log in" })).toBeInTheDocument();
    expect(
      screen.getByRole("checkbox", { name: "Remember me" })
    ).toBeInTheDocument();
    expect(screen.getByText("Forgot Password")).toBeInTheDocument();
  });
});
