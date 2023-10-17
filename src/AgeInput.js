import React, {forwardRef} from "react";

const AgeInput = React.forwardRef((props, ref) => (
  <>
    <label htmlFor="age">Age</label>
    <input ref={ref} type="text" name="age" />
  </>
));


export default AgeInput;