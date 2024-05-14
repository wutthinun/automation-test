describe("Authentication process success", () => {
  const input = {
    username: "admin",
    password: "password",
    firstname: "John",
    lastname: "Wick",
    gender: "Male",
    membershipType: "Premium",
    tnc: true,
  };

  it("should register successfully", () => {
    cy.visit("http://localhost:3000");
    cy.get('[test-id="hpl-register"]').should("be.visible").click();

    cy.url().should("eq", "http://localhost:3000/register");
    cy.get('[test-id="username"]').should("be.visible").type(input.username);
    cy.get('[test-id="password"]').should("be.visible").type(input.password);
    cy.get('[test-id="firstname"]').should("be.visible").type(input.firstname);
    cy.get('[test-id="lastname"]').should("be.visible").type(input.lastname);
    cy.get('[type="radio"]').check(input.gender);
    cy.get('[test-id="membership-type"]').should("be.visible").click();
    cy.contains(input.membershipType).should("be.visible").click();
    cy.get('[test-id="terms-cons"]').check();
    cy.get('[test-id="register-submit"]').should("be.visible").click();

    cy.url().should("eq", "http://localhost:3000/register/result");
    cy.contains(`${input.firstname} ${input.lastname}`).should("be.visible");
    cy.contains(input.gender).should("be.visible");
    cy.contains(input.membershipType).should("be.visible");
    cy.contains("Agree").should("be.visible");
  });

  it("should login successfully", () => {
    cy.visit("http://localhost:3000");

    cy.url().should("eq", "http://localhost:3000/login");
    cy.get('[test-id="username"]').should("be.visible").type(input.username);
    cy.get('[test-id="password"]').should("be.visible").type(input.password);
    cy.get('[test-id="btn-submit"]').should("be.visible").click();

    cy.url().should("eq", `http://localhost:3000/home/${input.username}`);
    cy.contains(input.username).should("be.visible");
  });
});

describe("Authentication process fail", () => {
  it("should register require field", () => {
    cy.visit("http://localhost:3000");
    cy.get('[test-id="hpl-register"]').should("be.visible").click();

    cy.url().should("eq", "http://localhost:3000/register");
    cy.get('[test-id="register-submit"]').should("be.visible").click();

    cy.contains("Please input your username!").should("be.visible");
    cy.contains("Please input your password!")
      .scrollIntoView()
      .should("be.visible");
    cy.contains("Please input your first name!").should("be.visible");
    cy.contains("Please input your last name!").should("be.visible");
    cy.contains("Please input your gender!").should("be.visible");
    cy.contains("Please select your membership type!").should("be.visible");
    cy.contains("Please agree to the terms and conditions!").should(
      "be.visible"
    );
  });

  it("should login successfully", () => {
    cy.visit("http://localhost:3000");

    cy.url().should("eq", "http://localhost:3000/login");
    cy.get('[test-id="btn-submit"]').should("be.visible").click();
    cy.contains("Please input your username!").should("be.visible");
    cy.contains("Please input your password!").should("be.visible");
  });
});
