describe("Inventory Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should show the inventory", () => {
    cy.get("#app")
      .find(".inventory")
      .should("exist");
  });

  describe("computers", () => {
    it("should show the computers count", () => {
      cy.setCookie("computers", "5");
      cy.reload();
      cy.get("#app")
        .find(".inventory")
        .contains("COMPUTADORES: 5");
    });

    it("should not buy computer if clicks aren't enough", () => {
      cy.setCookie("clicks", "10");
      cy.reload();
      cy.get("#app")
        .find(".buy_computer")
        .click();
      cy.get("#app")
        .find(".inventory")
        .contains("COMPUTADORES: 0");
    });

    it("should buy computer when clicks are enough", () => {
      cy.setCookie("clicks", "60");
      cy.reload();
      cy.get("#app")
        .find(".buy_computer")
        .click();
      cy.get("#app")
        .find(".inventory")
        .contains("COMPUTADORES: 1");
      cy.get("#app")
        .get(".score")
        .contains("CLICKS: 10");
    });
  });

  describe("workers", () => {
    it("should show the workers count", () => {
      cy.get("#app")
        .find(".inventory")
        .contains("FUNCIONÁRIOS: 0");
    });

    it("should not buy worker if clicks aren't enough", () => {
      cy.setCookie("clicks", "90");
      cy.reload();
      cy.get("#app")
        .find(".buy_worker")
        .click();
      cy.get("#app")
        .find(".inventory")
        .contains("FUNCIONÁRIOS: 0");
    });

    it("should not buy worker if clicks are enough but there are less computers", () => {
      cy.setCookie("clicks", "110");
      cy.setCookie("computers", "1");
      cy.setCookie("workers", "1");
      cy.reload();
      cy.get("#app")
        .find(".buy_worker")
        .click();
      cy.get("#app")
        .find(".inventory")
        .contains("FUNCIONÁRIOS: 1");
    });

    it("should buy worker if clicks and computers are enough", () => {
      cy.setCookie("clicks", "110");
      cy.setCookie("computers", "2");
      cy.setCookie("workers", "1");
      cy.reload();
      cy.get("#app")
        .find(".buy_worker")
        .click();
      cy.get("#app")
        .find(".inventory")
        .contains("FUNCIONÁRIOS: 2");
      cy.get("#app")
        .get(".score")
        .contains("CLICKS: 10");
    });
  });
});
