import './UserForm.css';
import { useState, createRef, useRef, useEffect } from "react";
import AgeInput from "./AgeInput";
import NameInput from "./NameInput";
import ColorInput from "./ColorInput";

/** Form component to show differences between createRef and useRef. */
function UserForm() {
  const [hidden, setHidden] = useState(false);
  const [comparingRefs, setComparingRefs] = useState(false);
  const [nameRefs, setNameRefs] = useState([]);
  const [ageRefs, setAgeRefs] = useState([]);

  const nameRef = createRef(); // returns different object every time
  const ageRef = useRef(); // returns same object every time
  const colorRef = useRef(); // child component NOT using forwardRef

  // Toggle hidden state
  function toggleHidden() {
    setHidden(prev => !prev);
  }

  // Console log current reference objects
  function logRefs() {
    console.log('nameRef, called with createRef, is: ', nameRef);
    console.log('ageRef, called with useRef, is: ', ageRef);
  };

  // Compare current reference objects with most recent reference objects
  function compareRefs() {
    setComparingRefs(prev => !prev);
  }

  // Add new (or existing) reference objects to state.
  function addRefsToState() {
    setNameRefs(prevList => [...prevList, nameRef]);
    setAgeRefs(prevList => [...prevList, ageRef]);
  }

  // Focus on name input; optional chaining prevents app crash if nameRef.current is null
  function focusOnName() {
    nameRef.current?.focus();
  }

  // Focus on age input; breaks when ageRef.current is null
  function focusOnAge() {
    ageRef.current.focus();
  }

  return (
    <div className="UserForm">
      <div className="UserForm-CodeSnippets">
        <img src="/referenceStates.png" alt="referenceStates"></img>
        <img src="/createRefs.png" alt="createRefs"></img>
      </div>

      <div className="UserForm-State">
        <p>Objects in nameRefs: <b>{nameRefs.length}</b></p>
        <p>Objects in ageRefs: <b>{ageRefs.length}</b></p>
      </div>

        {comparingRefs &&
          <div className="UserForm-Refs">
            <p>nameRef === nameRefs[nameRefs.length- 1]: <b>{`${nameRef === nameRefs[nameRefs.length - 1]}`}</b></p>
            <p>ageRef === ageRefs[ageRefs.length- 1]: <b>{`${ageRef === ageRefs[ageRefs.length - 1]}`}</b></p>
          </div>
        }

      <div className="UserForm-Buttons">
        <button className="btn btn-primary" onClick={logRefs}>Console.log current refs</button>
        <button className="btn btn-primary" onClick={addRefsToState}>Add current refs to state</button>
        {nameRefs.length > 1 && ageRefs.length > 1 && <button className="btn btn-primary" onClick={compareRefs}>{!comparingRefs ? "Compare current refs to most recent refs in state" : "Hide comparison"}</button>}
        <button className="btn btn-primary" onClick={toggleHidden}>{!hidden ? "Hide" : "Show"} inputs</button>
        <button className="btn btn-primary" onClick={focusOnName}>Focus on name input</button>
        <button className={`btn ${!hidden ? "btn-primary" : "btn-danger"}`} onClick={focusOnAge}>Focus on age input</button>
      </div>

      <form className="UserForm-Form">
        {!hidden &&
          <>
            <div className="form-group">
              <NameInput ref={nameRef} />
            </div>
            <div className="form-group">
              <AgeInput ref={ageRef} />
            </div>
            <div className="form-group">
              <ColorInput ref={colorRef} />
            </div>
          </>}
      </form>
    </div>

  );
}

export default UserForm;
