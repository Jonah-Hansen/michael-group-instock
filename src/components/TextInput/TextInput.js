import { useRef } from 'react';
import errorIcon from '../../assets/icons/error-24px.svg';
import './TextInput.scss';

// text input component requires a type. all other props are optional.
// if no placeholder provided, placeholder will use label. 
// additional className can be applied to overwrite parent label style. use to set width as needed. 
function TextInput({ type, label, placeholder, name, value, className, error }) {
  const ref = useRef(null)

  //render different input element depending on type
  let input;
  switch (type) {
    case 'small':
      input =
        <input className={`text-input__input`} placeholder={placeholder || label} name={name} defaultValue={value} ref={ref} />
      break;

    case 'large':
      input =
        <textarea className='text-input__input--large' placeholder={placeholder || label} name={name} defaultValue={value} ref={ref} />
      break;

    case 'search':
      input =
        <input type={type} className='text-input__input--search' placeholder='Search...' name={name} ref={ref} />
      break;

    case 'tel':
      input =
        <input type={type} className='text-input__input--contact' placeholder={placeholder || label} name={name} defaultValue={value} ref={ref} />
      break;

    case 'email':
      input =
        <input type={type} className='text-input__input--contact' placeholder={placeholder || label} name={name} defaultValue={value} ref={ref} />
      break;

    default:
      label = 'please set a type for this component'
      input =
        <input className='text-input__input' defaultValue={'types: small | large | search | tel | email'} />
  }

  //wait until ref is attached
  if (ref.current) {
    const refClass = ref.current.className
    //if an error is passed, reflect on the input border.
    if (error && !refClass.includes('error')) {
      ref.current.className = refClass + ' error'
    }
    //otherwise remove the error from class
    else if (!error) {
      ref.current.className = refClass.replace(' error', '')
    }
  }

  return (
    <label className={`text-input ${className ? className : ''}`}>
      <h3 className='text-input__heading' >{label}</h3>
      {input}
      {error &&
        <div className='text-input__error'>
          <img src={errorIcon} alt="error" className='text-input__error-icon' />
          <p className='text-input__error-text'>{error}</p>
        </div>}
    </label>
  )
}

export default TextInput