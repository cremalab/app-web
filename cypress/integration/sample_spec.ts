describe("App", function () {
  it("Contains a link to learn about React", function () {
    cy.visit("/")
    cy.get(".App-link").contains("Learn React")
    cy.get(".App-link").should("have.attr", "href", "https://reactjs.org")
  })
})
