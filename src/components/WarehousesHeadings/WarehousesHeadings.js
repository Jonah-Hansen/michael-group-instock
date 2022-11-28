import sortIcon from "../../assets/icons/sort-24px.svg";
import "./WarehousesHeadings.scss";

function WarehousesHeadings() {

  return (
    <div className="wh-headings">
      <div className="wh-headings__item">
        <p className="wh-headings__title">WAREHOUSE</p>
        <img src={sortIcon} alt="arrows up and down representing sort" />
      </div>
      <div className="wh-headings__item">
        <p className="wh-headings__title">ADDRESS</p>
        <img src={sortIcon} alt="arrows up and down representing sort" />
      </div>
      <div className="wh-headings__item">
        <p className="wh-headings__title">CONTACT NAME</p>
        <img src={sortIcon} alt="arrows up and down representing sort" />
      </div>
      <div className="wh-headings__item">
        <p className="wh-headings__title">CONTACT INFORMATION</p>
        <img src={sortIcon} alt="arrows up and down representing sort" />
      </div>
      <p className="wh-headings__title wh-headings__action">ACTIONS</p>
    </div>
  )
}

export default WarehousesHeadings;