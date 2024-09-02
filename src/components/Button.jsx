
import Prop_Types from 'prop-types'
const Button = ({buttonContent,buttonStyle,buttonEvent,buttonDisabled}) => {
  return (
    <button className={`${buttonStyle} rounded-md py-2 px-3 font-semibold`} onClick={buttonEvent} disabled={buttonDisabled}>{buttonContent}</button>
  )
}

Button.propTypes={
  buttonContent:Prop_Types.string,
  buttonStyle:Prop_Types.string,
  buttonEvent:Prop_Types.func,
  buttonDisabled:Prop_Types.string,
}
export default Button
