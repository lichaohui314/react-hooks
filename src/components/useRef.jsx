import React, { useRef } from "react"
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const spanEl = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
    console.log(spanEl.current)
  };
  return (
    <React.Fragment>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
      <span ref={spanEl}>123</span>
    </React.Fragment>
  );
}
export default TextInputWithFocusButton;