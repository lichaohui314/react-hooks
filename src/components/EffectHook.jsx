/* useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。
 * 它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，
 * 只不过被合并成了一个 API。
 */
/* 当你调用 useEffect 时，就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数。
 * 由于副作用函数是在组件内声明的，所以它们可以访问到组件的 props 和 state。
 * 默认情况下，React 会在每次渲染后调用副作用函数 —— 包括第一次渲染的时候
 */
import React, { useState, useEffect } from 'react';

function EffectHook() {
  const [count, setCount] = useState(0);

  // 副作用函数,相当于 componentDidMount 和 componentDidUpdate
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;

    // 副作用函数还可以通过返回一个函数来指定如何“清除”副作用。
    // 这个是清除函数,是可选的
    return () => {
      console.log('这个是清除函数');
    }
    // 如果某些特定值在两次重渲染之间没有发生变化，你可以通知 React 跳过对 effect 的调用，
    // 只要传递数组作为 useEffect 的第二个可选参数即可：
    // 性能优化
  }, [count]);

  // 跟 useState 一样，你可以在组件中多次使用 useEffect
  useEffect(()=>{
    console.log('在组件中可以多次使用 useEffect');
  })


  return (
    <div>
      <p>You clicked {count} times</p>
      {/* 点击之后,在生命周期里面修改标题 */}
      <button onClick={() => setCount(count+1)}>
        Click me
      </button>
    </div>
  );
}
export default EffectHook;