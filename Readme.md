# Rivraddon tracker

## Description

An app that generates a bundle that tracks PREBID events.

## Requirements

 [node.js](http://node.org)

## Installation

```bash
# installation
$ npm install
```

## Building/bundling the app

This command build the latest changes in the code and inject them into the html file

```bash
# Building
$ npm run build
```

## Running the app

You can serve the bundled `build` file on a server using [serve](https://github.com/vercel/serve#readme) or any other server.

To use serve:
ensure the module is installed by running

```bash
# Install serve locally
$ npm install -g serve
```

To serve the `build` file on server run

```bash
# serve the build file
$ serve -S build -p 8080
```

## Test

```bash
# unit tests
$ npm run test
```
