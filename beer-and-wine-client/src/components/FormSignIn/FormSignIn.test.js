import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FormSignIn from ".";

// Using React Testing Library
test("renders FormSignIn component", async () => {
  const mockSetShowModal = jest.fn();
  const mockSetShowLoginForm = jest.fn();

  render(
    <FormSignIn
      setShowModal={mockSetShowModal}
      setShowLoginForm={mockSetShowLoginForm}
    />
  );

  const emailInput = screen.getByPlaceholderText("Email");
  fireEvent.change(emailInput, { target: { value: "test@test.com" } });

  const passwordInput = screen.getByPlaceholderText("Password");
  fireEvent.change(passwordInput, { target: { value: "password" } });

  const submitButton = screen.getByText("Entrar agora");
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(mockSetShowModal).toHaveBeenCalled();
    expect(mockSetShowLoginForm).toHaveBeenCalled();
  });
});

// Using Cypress
describe("FormSignIn Component", () => {
  beforeEach(() => {
    cy.visit("/"); // assuming this is where your form is located
  });

  it("submits the form", () => {
    cy.get('input[placeholder="Email"]').type("test@test.com");
    cy.get('input[placeholder="Password"]').type("password");

    cy.intercept("POST", "/your-api-endpoint", {
      // Replace with your real endpoint
      statusCode: 200,
      body: { message: "Login successful" },
    });

    cy.get("button").contains("Entrar agora").click();

    cy.contains("Login successful"); // Check for an element containing this text after login
  });

  it("links to sign up form", () => {
    cy.get("a").contains("Cadastrar").click();

    // assuming you navigate to a different page on sign up
    cy.url().should("include", "/signup");
  });
});
