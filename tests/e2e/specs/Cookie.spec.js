describe("Cookie Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should show the cookie", () => {
    cy.get("#app")
      .find(".cookie")
      .should("exist");
  });

  describe("score", () => {
    it("should start as 0", () => {
      cy.get("#app")
        .get(".score")
        .contains("CLICKS: 0");
    });
    it("should increase score when clicked cookie", () => {
      cy.get("#app")
        .get(".cookie")
        .click();
      cy.get("#app")
        .get(".score")
        .contains("CLICKS: 1");
    });
    it("should set score as 0 when clicked reset", () => {
      cy.get("#app")
        .get(".cookie")
        .click();
      cy.get("#app")
        .get(".reset")
        .click();
      cy.get("#app")
        .get(".score")
        .contains("CLICKS: 0");
    });
  });

  describe("cookies", () => {
    it("should set cookie when clicked cookie", () => {
      cy.get("#app")
        .get(".cookie")
        .click();
      cy.getCookie("clicks").should("have.property", "value", "1");
    });
    it("should show the saved score", () => {
      cy.setCookie("clicks", "42");
      cy.reload();
      cy.get("#app")
        .get(".score")
        .contains("CLICKS: 42");
    });
    it('should remove the "clicks" cookie when clicked reset', () => {
      cy.get("#app")
        .get(".reset")
        .click();
      cy.getCookie("clicks").should("not.exist");
    });
  });
});
