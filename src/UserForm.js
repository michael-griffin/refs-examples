import AgeInput from "./AgeInput";
import NameInput from "./NameInput";
import ColorInput from "./ColorInput";

import { useState, createRef, useRef, useEffect } from "react";
//Form can set focus.

//Possible use for forwardRef?
//Child input



function UserForm() {


  const [hidden, setHidden] = useState(false);
  const [count, setCount] = useState(0);
  const [namerefs, setNamerefs] = useState([]); //will push nameRefs
  const [agerefs, setAgerefs] = useState([]); //will push nameRefs
  const nameRef = createRef();

  // const nameinUseRef = useRef();
  // nameinUseRef.current = nameRef;


  const ageRef = useRef();
  const colorRef = useRef();

  function toggleHidden() {
    setHidden(prev => !prev);
  }

  useEffect(() => {
    console.log('with createRef, nameRef current is: ', nameRef.current);
    console.log('with useRef, ageRef current is: ', ageRef.current);
    console.log('color input with no forwardref is:', colorRef.current)
  }, [hidden]);

  function addToCount() {

    if (namerefs.length < 2) {
      console.log("count incremented");
      console.log("createRef should make new object, useRef should remain the same ");
    }

    setCount(prevCount => prevCount + 1);
    setNamerefs(prevList => [...prevList, nameRef]);
    setAgerefs(prevList => [...prevList, ageRef]);
    if (namerefs.length > 1) {
      console.log('comparing nameRef to previous declaration of itself:');
      console.log(namerefs[namerefs.length - 1] === namerefs[namerefs.length - 2]);
    }

    if (agerefs.length > 1) {
      console.log('comparing ageRef to previous version of itself:');
      console.log(agerefs[agerefs.length - 1] === agerefs[agerefs.length - 2]);
    }
  }

  function targetName() {
    nameRef.current?.focus();
  }

  // Breaks when current is null
  function badTargetAge() {
    ageRef.current.focus();
  }

  return (
    <>
      <p>Count is: {count}</p>
      <button onClick={addToCount}>Add 1</button>
      <button onClick={toggleHidden}>Hide name input</button>
      <button onClick={targetName}>Focus on name input field</button>
      <button onClick={badTargetAge}>Bad focus on age input field</button>

      <form>
        <label htmlFor="Message">Message</label>
        <input type="text" name="message" />
        {!hidden &&
          <>
            <NameInput ref={nameRef} />
            <AgeInput ref={ageRef} />
            <ColorInput ref={colorRef} />
          </>}
      </form>
    </>

  );
}

export default UserForm;
