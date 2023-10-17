
import { createRef } from "react";

function Example() {
  const myRef = createRef(); //starts as null
  return (
    <>
      <button onClick={() => myRef.current.focus()}>
        Focus Name
      </button>
      <input ref={myRef} name="username" />
    </>
  );
}