/// <reference types="Cypress" />
context('Pizza Creator', () => {
  beforeEach(() => {
    // uses base url setting from cypress.json
    // which right now points at "localhost:3000"
    cy.visit('/')
  })

  it('orders custom pizza', function () {
    cy.get('button[type="submit"]').should('be.disabled')
    cy.enterDeliveryInformation()
    cy.get('button[type="submit"]').should('be.disabled')

    cy.pickToppings('Pepperoni', 'Onion', 'Mozzarella', 'Basil')

    // check the price and order pizza
    cy.contains('.pizza-summary__total-price', 'Total: $12.75')

    // let us confirm we can place our order,
    // but first, prepare for "window.alert" call
    cy.on('window:alert', cy.stub().as('alert'))

    // now the button should be enabled
    cy.get('button[type="submit"]')
      .should('be.enabled')
      .click()
    cy.get('@alert').should('have.been.calledWithExactly', 'Order placed')

    // scroll pizza view back into view
    cy.get('form')
      .scrollIntoView({})
      .should('be.visible')
  })
})
