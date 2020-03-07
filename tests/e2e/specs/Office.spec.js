describe("Office Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should show the office", () => {
    cy.get("#app")
      .find(".office")
      .should("exist");
  });

  it("should render the computers", () => {
    cy.setCookie("computers", "5");
    cy.reload();
    cy.get("#app")
      .find(".computer")
      .should("have.length", 5);
  });

  it("should render the workers", () => {
    cy.setCookie("workers", "5");
    cy.reload();
    cy.get("#app")
      .find(".worker")
      .should("have.length", 5);
  });
});
