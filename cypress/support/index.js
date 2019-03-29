// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import '@percy/cypress'

/** Returns selector for a form control using name attribute */
const f = name => `[formcontrolname="${name}"]`

Cypress.Commands.add('enterForm', (name, text) => {
  // enter text into the form control without Command Log messages
  const quiet = {
    log: false
  }
  cy.get(f(name), quiet).type(text, quiet)
})

Cypress.Commands.add('enterDeliveryInformation', () => {
  cy.enterForm('name', 'Joe')
  cy.enterForm('email', 'foo@bar.com')
  cy.enterForm('confirm', 'foo@bar.com')
  cy.enterForm('address', '1 Pizza st')
  cy.enterForm('postcode', '12345')
  cy.enterForm('phone', '1234567890')
})

Cypress.Commands.add('pickToppings', (...toppings) => {
  toppings.forEach(name => {
    cy.contains('label.pizza-topping', name).click()
  })
})
