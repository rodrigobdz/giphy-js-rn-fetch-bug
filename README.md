# Giphy Core SDK for JS Fetch Bug

[MCVE](https://stackoverflow.com/help/mcve) (Minimal, Complete, and Verifiable example) for [giphy-js-sdk-core](https://github.com/Giphy/giphy-js-sdk-core) issue [#22](https://github.com/Giphy/giphy-js-sdk-core/issues/22).

## Description

The [import](https://github.com/Giphy/giphy-js-sdk-core/blob/913afeb5360320a6a02f00c0c0b36933598dec21/src/handlers/RequestHandler.js#L12) of `isomorphic-fetch` in [giphy-js-sdk-core](https://github.com/Giphy/giphy-js-sdk-core)@1.0.3 breaks in React Native.

## Steps to reproduce

1. Setup project

    ```sh
    react-native init AwesomeProject
    cd AwesomeProject
    ```

1. Install giphy-js-sdk-core

    ```sh
    yarn add giphy-js-sdk-core
    ```
    
1. Import giphy-js-sdk-core in App.js
    ```diff
    -
    + import GphApiClient from 'giphy-js-sdk-core'
    ```

1. Run app

    ```sh
    react-native run-ios
    ```

## License

[MIT](./LICENSE) © 2018 Rodrigo Bermúdez Schettino
