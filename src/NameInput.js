import React, {forwardRef} from "react";

const NameInput = React.forwardRef((props, ref) => (
  <>
    <label htmlFor="firstName">First Name</label>
    <input ref={ref} type="text" name="firstName" />
  </>
));


export default NameInput;