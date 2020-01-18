import React, { useImperativeHandle, useRef, forwardRef } from 'react';
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return (
    <React.Fragment>
    <input ref={inputRef} type="text" />
  </React.Fragment>
  )
}
FancyInput = forwardRef(FancyInput);
export default FancyInput