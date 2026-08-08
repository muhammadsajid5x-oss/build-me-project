import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
describe("Home Page", () => {
  it("renders the landing page content through Home", () => {
    render(<Home />);
    expect(screen.getByText("Technology Ownership")).toBeInTheDocument();
    expect(screen.getByText("Engineering Excellence Through")).toBeInTheDocument();
  });
});
