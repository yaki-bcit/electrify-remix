# Welcome to Electrify!

## We are using Remix

[Remix documentation](https://remix.run/docs/en/v1/api/conventions)

It uses an interesting filesystem-based [routing structure](https://remix.run/docs/en/v1/guides/routing).

Remix has [server-side rendering](https://remix.run/docs/en/v1/api/conventions#loader) everywhere.

Remix welcomes writing an API route for each page or component using 
[an action function](https://remix.run/docs/en/v1/api/conventions#action).

## We are using Tailwind

It's already installed and configured, just start using the classes for styling.

You might often have to use [margin styling](https://v1.tailwindcss.com/docs/margin), for example.

## We are using Mina font

It's configured as default for all pages and components. If you want normal text, just use
`
style={{ fontFamily: "system-ui, sans-serif" }}
`
for your component.

## Development

Remix is happy with npm commands, no yarn.

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!
