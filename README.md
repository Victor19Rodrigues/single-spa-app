# single-spa app

In this example, I hope to showcase a simple login app how to use a utility module that shares application state across multiple single-spa applications and multiple frameworks, using a utility module for ui too.

This example consists of:

- root: shared HTML layout for microfrontends
- app-header: basic React application with navigation responsibilities
- app-footer: basic React application with footer component
- app-home: basic React application for logged-in users
- app-login: basic React application for logged-out users
- app-angular: basic Angular application for logged-in users
- util-auth: utility module, using Rxjs and plain Typescript
- util-ui: utility module for ui modules, using atomic design

### Setup

> ⚠️ This project relies on [yarn](https://yarnpkg.com/) for start and build scripts. You may need to make changes to scripts/lerna.json to get it working with npm client.

### Running locally

- `git clone git@github.com:Victor19Rodrigues/single-spa-app.git`
- run `yarn` inside directories to install dependencies
  - root
  - util-auth
  - util-ui
  - app-header
  - app-login
  - app-angular
  - app-footer
  - app-home
- go to http://localhost:9000/
- celebrate good times 🎉

### Login and guards

1. Log in using any credentials to show an error, as expected.

   - Also attempt going to [/home](http://localhost:9000/home) route directly. It will redirect you back to login since there is no valid user.

1. Log in using **victor@gmail.com** with **victor123** as the password.<br/>Once logged in, you will be redirected to [/home](http://localhost:9000/home). If you try going back to [/login](http://localhost:9000/login) you'll no longer be able to and will be redirected back to home.

### Logout

Log out of the system using the "Logout" icon in the navbar. Once again, after logging out, you will be redirected back to login.

## Additional notes

These are implemented within the same repo using lerna **for illustration purposes**. In an organizational setting, each of the modules should be in its own repo (though [a monorepo setup could still work with the right deployment setup](https://github.com/single-spa/single-spa.js.org/pull/329)).

### Utility module?

[Utility modules have lots of use cases](https://single-spa.js.org/docs/recommended-setup/#utility-modules-styleguide-api-etc), not just authentication, and are great for [sharing common logic](https://single-spa.js.org/docs/module-types/#utility-modules-share-common-logic) in one centralized place.

### Why Rxjs?

Preference. I think Rxjs is extremely powerful when leveraged correctly, even though it has a high learning curve. However using Rxjs is just [one of many options for sharing UI state](https://single-spa.js.org/docs/faq/#how-can-i-share-application-state-between-applications)
