import React, { useCallback, doSomething } from "react"
// useCallback(fn, deps) 相当于 useMemo(() => fn, deps)
const memoizedCallback = useCallback(
  () => {
    // console.log(1,2)
    doSomething(1, 2);
  },
  // [a, b],
);
console.log(memoizedCallback)
export default memoizedCallback;