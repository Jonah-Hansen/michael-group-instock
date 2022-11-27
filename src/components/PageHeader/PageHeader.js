import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import './PageHeader.scss';

//page header takes a type of details or list, and text for the heading.
//default style has only back button and heading
function PageHeader({ type, text, searchState }) {
  const navigate = useNavigate()

  let back = true; //back button is present by default
  let actions;
  switch (type) {
    case 'details':
      actions =
        <Link to={'./edit'} className='page-header__edit' />
      break;
    case 'list':
      back = false;
      actions =
        <>
          <TextInput type='search' searchState={searchState} />
          <Button text={`+ add a new ${text.includes('ventory') ? 'item' : 'warehouse'}`} onClick={() => navigate('./new')} />
        </>
      break;
    default:
      break
  }

  return (
    <header className='page-header'>
      <div className='page-header__heading-and-back-container'>
        {back &&
          <button className='page-header__back' onClick={() => navigate(-1)} />
        }
        <h1 className='page-header__heading'>{text}</h1>
      </div>
      {actions}
    </header>
  )
}

export default PageHeader