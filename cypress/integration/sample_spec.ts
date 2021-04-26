describe("App", () => {
  it("Contains a link to learn about React", () => {
    cy.visit("/")
    cy.findByText("Learn React").should("exist")
    cy.findByText("Learn React").should(
      "have.attr",
      "href",
      "https://reactjs.org",
    )
  })
})
