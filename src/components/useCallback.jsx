import React, { useCallback } from "react"
// useCallback(fn, deps) 相当于 useMemo(() => fn, deps)
const memoizedCallback = useCallback(
  () => {
    console.log(a,b)
    // doSomething(a, b);
  },
  // [a, b],
);
console.log(memoizedCallback)
export default memoizedCallback;