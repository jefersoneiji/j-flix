<h1 align="center">
    JFlix
</h1>

<h4 align="center">
    TV Shows navigator
</h4>

<div align="center">
  <img  alt="policy-diagram" src="./src/assets/jflix-demo.gif">
</div>

## Summary 

This web app is able to navigate throw TV Shows, display its seasons and information about shows/seasons/episodes.

## Prerequisites

For this project to run, make sure these software are installed:

- [nodejs](https://nodejs.org/en/download/current)
    
## Installing

To run locally:
1. Clone this repo
   ```cmd
   git@github.com:jefersoneiji/j-flix.git
   ```

2. Install dependencies in your machine
   ```cmd
   yarn install
   ```

3. Start the front
    ```cmd
    yarn dev
    ```

## Testing

Execute the following command:
   ```cmd
   yarn test
   ```
## Linting 

```shell
yarn lint
```

## Colocation

By following the principle of colocation, requests, styles and tests are placed as closer as possible to each other. Meaning, that requests may be found in the same file (or folder) containing tests and styles. 

Example: In `home.tsx` the data loader is inside the home component itself. 

## Components 

### `<Navbar />`
  Displays navigation bar

### `<Home />`
  Displays all TV Shows

### `<ShowDetails/>`
  Displays specific show info and episodes by season

## API Fetching

### Fetching

Requests are done through the Fetch API. See [featchAPI](./src/api/fetch.ts)

### Error Handling

Errors are handled in two levels:
1.  inside the [featchAPI](./src/api/fetch.ts) or 
2.  inside the component itself through an [error handler](./src/api/error-handler.ts). See: [home](./src/home.tsx) `showsLoader()`

## Future Improvements

- Add storybook to project
- Add more animation to components
- Increase edge cases coverage in tests

Made by Jeferson Eiji ➡️ [Get in touch!](https://www.linkedin.com/in/jeferson-eiji/)
