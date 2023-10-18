/** Favorite color input component. Not wrapped in forwardRef. */
const ColorInput = (props) => ( // App crashes when trying to pass ref down as a prop
  <>
    <label htmlFor="color">Favorite Color</label>
    <input {...props} className="form-control" type="text" name="color" />
  </>
);


export default ColorInput;