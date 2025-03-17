# cy-wrap

Sample project to demonstrate the [`cy.wrap`](https://docs.cypress.io/api/commands/wrap) Cypress command.

## Pre-requirements

It is required to have git, Node.js and npm installed to clone and run this project.

> I've used versions `2.42.1`, `v22.13.1` and `10.9.2` of git, Node.js and npm, respectively. I suggest you use the same or later LTS versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

Run `npm test` (or `npm t` for the short version) to run the test in headless mode.

Or, run `npm run cy:open` to open the Cypress App and run the tests in interactive mode.

### Test results

After running the tests in headless mode, you should see something like this:

```sh
(Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  spec.cy.js                               00:02        10        10        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:02        10        10        -        -        -

```

## Support this project

If you want to support this project, leave a ⭐.

___

This project was created with 💚 by [Walmyr](https://walmyr.dev).
