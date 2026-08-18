describe("Build Me Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("loads the homepage", () => {
    cy.get("h1").should("be.visible").and("contain.text", "Build Better");

    cy.get("h1").should("contain.text", "Digital Experiences");
  });

  it("displays the primary hero content", () => {
    cy.contains("TECHNOLOGY OWNERSHIP").should("be.visible");

    cy.contains(
      "Websites and apps that are easy to use, look great, and work fast.",
    ).should("be.visible");
  });

  it("displays the hero image", () => {
    cy.get('img[alt="Engineering professional working with technology"]')
      .should("be.visible")
      .and("have.attr", "src", "/Sajid.png");
  });
});
