# react-useunmount

[![NPM](https://img.shields.io/npm/v/react-useunmount.svg)](https://www.npmjs.com/package/react-useunmount) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## What it does

This package is a super simple and minimal hook for storing an array of dependencies within a ref, making the data available on unmount - which is the effect function passed in as the first parameter.

It accepts a function as the first parameter, which gets called on component unmount, and a dependecy array as the second parameter which is stored and passed back to the unmount function. Fundamentally it:

- Creates a ref to store the required data in
- Initiates a useEffect for when the dependencies change, which updates the ref
- Initiates a useEffect for component unmount, which calls your unmount function with the dependency data passed back as the first argument

## When might I need this?

If you have state data currently stored within context, state or a reducer and you need it available when the component unmounts.

If you don't need any of the above data on unmount, then you may only need a standard React `useEffect` return function:

```tsx
useEffect(() => {
  return () => {
    console.log("This will be called when the component unmounts");
  };
}, []);
```

## Install

```bash
npm install --save react-useunmount
```

or with yarn:

```bash
yarn add react-useunmount
```

## Usage

```tsx
import * as React from "react";

import { useUnmount } from "react-useunmount";

const Example = () => {
  const [state, setState] = useState();

  useUnmount(
    // Destructure argument #1 into the same order as passed dependencies
    ([refState]) => {
      console.log("State now available via ref", refState);
    },
    [state]
  );

  return </>;
};
```

## Full Example

Want to see a full working example showcasing how this works, and why a standard useEffect isn't enough? Clone this repository and:

```bash
cd example && yarn start
```

## License

MIT © [WazzaJB](https://github.com/WazzaJB)
