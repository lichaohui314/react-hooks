react hook的小栗子
useState:   状态函数,给函数组件设置状态
useEffect:  副作用函数,相当于 componentDidMount 和 componentDidUpdate
useContext: useContext(MyContext) 相当于 class 组件中的 static contextType = MyContext 或者 <MyContext.Consumer>。
useReducer: useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法。
useCallback:返回一个 memoized 回调函数。
useMemo:    返回一个 memoized 值。你可以把 useMemo 作为性能优化的手段
useRef:     useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变。