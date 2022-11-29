import sortIcon from "../../assets/icons/sort-24px.svg";
import "./WarehousesHeadings.scss";

function WarehousesHeadings({setWarehouseOrdered, setAddressOrdered, setContactNameOrdered, setContactInfoOrdered}) {

  return (
    <div className="wh-headings">
      <div className="wh-headings__item">
        <p className="wh-headings__title">WAREHOUSE</p>
        <img src={sortIcon} alt="arrows up and down representing sort" className="wh-headings__icon" onClick={() => setWarehouseOrdered(prev => !prev)}/>
      </div>
      <div className="wh-headings__item">
        <p className="wh-headings__title">ADDRESS</p>
        <img src={sortIcon} alt="arrows up and down representing sort" className="wh-headings__icon" onClick={() => setAddressOrdered(prev => !prev)}/>
      </div>
      <div className="wh-headings__item">
        <p className="wh-headings__title">CONTACT NAME</p>
        <img src={sortIcon} alt="arrows up and down representing sort" className="wh-headings__icon" onClick={() => setContactNameOrdered(prev => !prev)}/>
      </div>
      <div className="wh-headings__item">
        <p className="wh-headings__title">CONTACT INFORMATION</p>
        <img src={sortIcon} alt="arrows up and down representing sort" className="wh-headings__icon" onClick={() => setContactInfoOrdered(prev => !prev)}/>
      </div>
      <p className="wh-headings__title wh-headings__action">ACTIONS</p>
    </div>
  )
}

export default WarehousesHeadings;