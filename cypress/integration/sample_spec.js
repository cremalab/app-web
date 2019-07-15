import { PORT } from "../../src/components/AppRouter"
describe("My First Test", function() {
  it("Visits the Kitchen Sink", function() {
    cy.request(`http://localhost:${PORT}`)
  })
})
