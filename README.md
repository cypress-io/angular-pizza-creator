# Angular Pizza Creator [![CircleCI](https://circleci.com/gh/cypress-io/angular-pizza-creator.svg?style=svg)](https://circleci.com/gh/cypress-io/angular-pizza-creator) [![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.png)](https://percy.io/cypress-io/angular-pizza-creator)

Forked from [https://github.com/toddmotto/angular-pizza-creator](https://github.com/toddmotto/angular-pizza-creator)

> Check out the [live demo](https://toddmotto.com/angular-pizza-creator/)

![Pizza](pizza.png)

## Tests

Tests are located in [cypress/integration](cypress/integration) folder

- [order-spec.js](cypress/integration/order-spec.js) is a function test that confirms the user can enter delivery details, pick toppings and place an order
- [dry-spec.js](cypress/integration/dry-spec.js) shows how to use custom commands defined in [cypress/support/index.js](cypress/support/index.js) to make test code dry and readable
- [visual-spec.js](cypress/integration/visual-spec.js) does image diffing before adding toppings and after

Interested in changing code? Check out [DEVELOPMENT.md](DEVELOPMENT.md)
