describe("Calculator Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Addition: 5 + 3 = 8", () => {
    cy.get("#btn-5").click();
    cy.get("#btn-add").click();
    cy.get("#btn-3").click();
    cy.get("#btn-equals").click();
    cy.get("#display").should("have.value", "8");
  });

  it("Subtraction: 10 - 4 = 6", () => {
    cy.get("#btn-1").click();
    cy.get("#btn-0").click();
    cy.get("#btn-sub").click();
    cy.get("#btn-4").click();
    cy.get("#btn-equals").click();
    cy.get("#display").should("have.value", "6");
  });

  it("Multiplication: 6 * 7 = 42", () => {
    cy.get("#btn-6").click();
    cy.get("#btn-mul").click();
    cy.get("#btn-7").click();
    cy.get("#btn-equals").click();
    cy.get("#display").should("have.value", "42");
  });

  it("Division: 15 / 3 = 5", () => {
    cy.get("#btn-1").click();
    cy.get("#btn-5").click();
    cy.get("#btn-div").click();
    cy.get("#btn-3").click();
    cy.get("#btn-equals").click();
    cy.get("#display").should("have.value", "5");
  });
});