// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

context('Pizza Creator', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('orders custom pizza', function () {
    cy.get('[formcontrolname="name"]').type('Joe')
    cy.get('[formcontrolname="email"]').type('foo@bar.com')
    cy.get('[formcontrolname="confirm"]').type('foo@bar.com')

    cy.get('button[type="submit"]').should('be.disabled')

    cy.get('[formcontrolname="address"]').type('1 Pizza st')
    cy.get('[formcontrolname="postcode"]').type('12345')
    cy.get('[formcontrolname="phone"]').type('1234567890')

    cy.get('button[type="submit"]').should('be.disabled')

    // add a few toppings
    cy.contains('label.pizza-topping', 'Pepperoni').click()
    cy.contains('label.pizza-topping', 'Onion').click()
    cy.contains('label.pizza-topping', 'Mozzarella').click()
    cy.contains('label.pizza-topping', 'Basil').click()

    // confirm the pizza looks good
    // scroll pizza view back into view
    cy.get('form')
      .scrollIntoView({})
      .should('be.visible')
    cy.wait(1000)
    cy.get('.pizza--active')
      .should('be.visible')
      .percySnapshot('4 toppings')

    // check the price and order pizza
    cy.contains('.pizza-summary__total-price', 'Total: $12.75')
    cy.on('window:alert', cy.stub().as('alert'))
    cy.get('button[type="submit"]')
      .should('be.enabled')
      .click()
    cy.get('@alert').should('have.been.calledWithExactly', 'Order placed')

    // scroll pizza view back into view
    cy.get('form')
      .scrollIntoView({})
      .should('be.visible')
  })

  // more examples
  //
  // https://github.com/cypress-io/cypress-example-todomvc
  // https://github.com/cypress-io/cypress-example-kitchensink
  // https://on.cypress.io/writing-your-first-test
})
