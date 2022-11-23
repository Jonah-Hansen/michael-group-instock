import './TextInput.scss';

// text input component requires a type. all other props are optional.
// if no placeholder provided, placeholder will use label. 
// additional className can be applied to overwrite parent label style. use to set width as needed. 
function TextInput({ type, label, placeholder, name, value, className }) {

  let input;
  switch (type) {
    case 'small':
      input =
        <input className={`text-input__input`} placeholder={placeholder || label} name={name} defaultValue={value} />
      break;

    case 'large':
      input =
        <textarea className='text-input__input--large' placeholder={placeholder || label} name={name} defaultValue={value} />
      break;

    case 'search':
      input =
        <input type={type} className='text-input__input--search' placeholder='Search...' name={name} />
      break;

    case 'tel':
      input =
        <input type={type} className='text-input__input--contact' placeholder={placeholder || label} name={name} defaultValue={value} />
      break;

    case 'email':
      input =
        <input type={type} className='text-input__input--contact' placeholder={placeholder || label} name={name} defaultValue={value} />
      break;

    default:
      label = 'please set a type for this component'
      input =
        <input className='text-input__input' defaultValue={'types: small | large | search | tel | email'} />
  }

  return (
    <label className={`text-input ${className ? className : ''}`}>
      <h3 className='text-input__heading' >{label}</h3>
      {input}
    </label>
  )
}

export default TextInput