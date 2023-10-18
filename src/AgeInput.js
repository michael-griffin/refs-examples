import { forwardRef } from "react";

/** Age input component. Wrapped in forwardRef to be able to receive ref. */
const AgeInput = forwardRef((props, ref) => (
  <>
    <label htmlFor="age">Age</label>
    <input {...props} ref={ref} className="form-control" type="text" name="age" />
  </>
));


export default AgeInput;