# GraphCDN Contentful types

This repo serves one purpose: to always contain, at `index.d.ts`, an up to date file with typings for all of GraphCDN's Contentful content models.

## Usage

```bash
# Install this package with
yarn add -D overnice/graphcdn-contentful-types
```

> **NOTE**: The installation command is `overnice/graphcdn-contentful-types` without an `@` on purpose, as this package is intended to be installed directly from github. When requiring it internally however, use `@overnice/graphcdn-contentful-types` as this is the npm package name.

Add its location to the `typeRoots` config in your `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "otherOptions": "xxx",
    "typeRoots": [
      "node_modules/@types",
      "node_modules/@overnice/graphcdn-contentful-types"
    ]
  }
}
```

Now you should be able to import types directly from this package, as such:

```ts
import { CaseStudy } from "@overnice/graphcdn-contentful-types";
```

### Known issue with tsconfig and typeRoots

If you see a `cannot find type definition file for 'node_modules'` error in your `tsconfig` file:

```bash
# Install node types
yarn add -D @types/node
```

Add them to the `types` config in your `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "otherOptions": "xxx",
    "typeRoots": [
      "node_modules/@types",
      "node_modules/@overnice/graphcdn-contentful-types"
    ],
    "types": ["node"]
  }
}
```

## How it works

Every time there's a change in any of the Contentful content models, a webhook will trigger this a node.js app and update the `index.d.ts` file if necessary.

We already have one running in [glitch.com](https://glitch.com/edit/#!/graphcdn-contentful-types). The app is set up in such a way that Contentful pings the app (via a webhook) when there is a change to any of the content models, the app then generates the types from Contentul's GraphQL API, compares the result to the existing types, and if they are different, commits them to the `index.d.ts` file.

[Jeff Escalante](https://github.com/jescalan) is the original author, this is a derivation of [this repo](https://github.com/hashicorp/dato-types).
