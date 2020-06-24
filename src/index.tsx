import * as React from "react";

export const useUnmount = (
  effect: (deps?: React.DependencyList) => void,
  deps?: React.DependencyList
): void => {
  const tracked = React.useRef<React.DependencyList>();

  React.useEffect(() => {
    tracked.current = deps;
  }, deps);

  React.useEffect(() => {
    return () => {
      effect(tracked.current);
    };
  }, []);

  return;
};
