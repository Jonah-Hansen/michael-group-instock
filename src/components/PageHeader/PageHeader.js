import { useNavigate } from 'react-router-dom';
import edit from '../../assets/icons/edit-24px.svg';
import TextInput from '../TextInput/TextInput';
import './PageHeader.scss';

//page header takes a type of details or list, and text for the heading.
//default style has only back button and heading
function PageHeader({ type, text }) {
  const navigate = useNavigate()

  let back = true; //back button is present by default
  let actions;
  switch (type) {
    case 'details':
      actions =
        <button><img src={edit} alt='edit' /></button>
      break;
    case 'list':
      back = false;
      actions =
        <div>
          <TextInput type='search' />
          <button>placeholder button</button>
        </div>
      break;
    default:
      break
  }

  return (
    <header className='page-header'>
      {back &&
        <button className='page-header__back' onClick={() => navigate(-1)} />
      }
      <h1 className='page-header__heading'>{text}</h1>
      {actions}
    </header>
  )
}

export default PageHeader