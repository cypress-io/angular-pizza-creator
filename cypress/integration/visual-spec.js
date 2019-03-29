/// <reference types="Cypress" />
context('Pizza Creator', () => {
  beforeEach(() => {
    // uses base url setting from cypress.json
    // which right now points at "localhost:3000"
    cy.visit('/')
  })

  it('draws pizza correctly', function () {
    cy.percySnapshot('Empty Pizza')
    cy.enterDeliveryInformation()
    const toppings = ['Pepperoni', 'Chili', 'Onion']
    cy.pickToppings(...toppings)
    cy.percySnapshot(toppings.join(' - '))

    // scroll pizza view back into view
    cy.get('form')
      .scrollIntoView({})
      .should('be.visible')
  })
})
