describe("Build Me Homepage", () => {
  it("loads homepage", () => {
    cy.visit("/");
    cy.contains("Build Me").should("be.visible");
  });
});
