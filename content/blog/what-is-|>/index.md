---
title: What is |>?
date: "2019-04-29"
description: "Introduction to the pipeline operator in JavaScript"
---

Since the frontend world moves really fast, you might see `|>` being used in CodePens, API docs, gists, etc. This operator makes chained function calls more readable and embraces syntax used in other functional languages (e.g. Elm, Elixir).

## What is it?

It’s called a _pipeline operator_.

It is currently in Stage 1 of the [TC39 process](https://tc39.github.io/process-document/), meaning it is still a proposal and requires discussions, syntax definition, feedback, refinement, and standardization.

Since they’ve [deprecated stage presets](https://babeljs.io/blog/2018/07/27/removing-babels-stage-presets), Babel have exposed it through `@babel/plugin-proposal-pipeline-operator` in v7.3.0.

## How does it work?

```js
const user = { name: "Jon Snow", pet: "Ghost" }
const sayHello = name => `Hello ${name}...`
const getName = user => user.name

// traditional
const message1 = sayHello(getName(user)) // Hello Jon Snow...

// with pipeline operator
const message2 = user |> getName |> sayHello // Hello Jon Snow...
```

## React Example

```jsx
const PizzaBase = ({ toppings }) => (
  <ul>
    {toppings.map(topping => (
      <li key={topping}>{topping}</li>
    ))}
  </ul>
)

const withCheese = BasePizza => props => (
  <BasePizza toppings={[...props.toppings, "cheese"]} />
)
const withHam = BasePizza => props => (
  <BasePizza toppings={[...props.toppings, "ham"]} />
)
const withPineapple = BasePizza => props => (
  <BasePizza toppings={[...props.toppings, "pineapple"]} />
)

// traditional
const Hawaiian1 = withCheese(withHam(withPineapple(PizzaBase)))

// with pipeline operator
const Hawaiian2 = PizzaBase |> withPineapple |> withHam |> withCheese
```

A more practical example of the one above would be:

```jsx
// traditional
const NavigationSpotlight1 = withAnalytics(
  injectIntl(NavigationSpotlightComponent)
)

// with pipeline operator
const NavigationSpotlight2 =
  NavigationSpotlightComponent |> injectIntl |> withAnalytics
```

## Read More

If you’d like to learn more, here are good places to start:

- [TC39 draft for pipeline operator](https://tc39.github.io/proposal-pipeline-operator/#sec-pipeline-evaluate)
- [@babel/plugin-proposal-pipeline-operator doc](https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator#via-babelrc-recommended)
- [Minimal](https://github.com/tc39/proposal-pipeline-operator/) vs [Smart](https://github.com/js-choi/proposal-smart-pipelines) vs [F#](https://github.com/valtech-nyc/proposal-fsharp-pipelines) pipeline
