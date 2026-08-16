/// <reference types="cypress" />

describe("Landing Page E2E Test", () => {
  it("loads the homepage and displays main heading", () => {
    cy.visit("/");
    cy.contains("h1", "Build Me").should("be.visible");
  });

  it("submits lead intake form successfully", () => {
    cy.visit("/");
    cy.get('input[name="name"]').type("John Doe");
    cy.get('input[name="email"]').type("john@example.com");
    cy.get('button[type="submit"]').click();

    cy.contains("Thank you for submitting!").should("be.visible");
  });
});
