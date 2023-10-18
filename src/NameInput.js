import { forwardRef } from "react";

/** Name input component. Wrapped in forwardRef to be able to receive ref. */
const NameInput = forwardRef((props, ref) => (
  <>
    <label htmlFor="firstName">First Name</label>
    <input {...props} ref={ref} className="form-control" type="text" name="firstName" />
  </>
));


export default NameInput;