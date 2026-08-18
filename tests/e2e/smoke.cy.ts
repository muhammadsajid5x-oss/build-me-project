describe("Build Me App Smoke Test", () => {
  it("loads the homepage successfully", () => {
    cy.visit("/");
    cy.title().should("not.be.empty");
  });
});
