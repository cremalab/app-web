describe("My First Test", function() {
  it("Visits the Kitchen Sink", function() {
    cy.request(`http://localhost:5000`)
  })
})
