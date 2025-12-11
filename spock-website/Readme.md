# Spock Website

This folder contains the source code for the [Spock Framework](https://spockframework.org) website. It is built using [Vite](https://vitejs.dev/) and uses [Playwright](https://playwright.dev/) for visual regression testing.

## Features

- Modern frontend development with Vite and Tailwind CSS
- Automated visual regression tests using Playwright
- Easy snapshot updates via Docker

## Development

To start the development server:

```sh
npm ci
npm run dev
```

## Visual Regression Testing

Visual regression tests are located in the `tests/` directory and use Playwright to compare screenshots.

The reference screenshots are taken on linux, so local testing requires the use of Docker.

To run the tests locally:

```sh
./visual-regression-test.sh
```
This requires Docker to be installed and running on your machine.
It will build a local docker image and run the tests inside a container.

To update visual snapshots:

```sh
./visual-regression-test.sh --update-snapshots
```
