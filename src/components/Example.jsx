// State Hook 计数器栗子
import React, { useState } from 'react';
import useFriendStatus from "./FriendStatus"
function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  // setCount 是定义的一个方法
  // useState(0) 0 是 count 变量的默认值
  const [count, setCount] = useState(2);
  // 可以声明多个 state 变量！
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');

  // 使用自定义 hook 
  const isOnline = useFriendStatus(123);
  console.log(isOnline);
  return (
    <div>
      <p onClick={() => setAge(age + 1)}>点击年龄+1  {age}</p>
      <p onClick={() => setFruit(fruit + '+Apple')}>点击在加一个苹果{fruit}</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default Example