import sortIcon from "../../assets/icons/sort-24px.svg";
import "./WarehousesHeadings.scss";

function WarehousesHeadings() {

  return (
    <div className="inv-headings">
      <div className="inv-headings__item">
        <p className="inv-headings__title">WAREHOUSE</p>
        <img src={sortIcon} alt="arrows up and down representing sort" />
      </div>
      <div className="inv-headings__item">
        <p className="inv-headings__title">ADDRESS</p>
        <img src={sortIcon} alt="arrows up and down representing sort" />
      </div>
      <div className="inv-headings__item">
        <p className="inv-headings__title">CONTACT NAME</p>
        <img src={sortIcon} alt="arrows up and down representing sort" />
      </div>
      <div className="inv-headings__item">
        <p className="inv-headings__title inv-headings__qtytab"></p>
        <p className="inv-headings__title inv-headings__qty">CONTACT INFORMATION</p>
        <img src={sortIcon} alt="arrows up and down representing sort" />
      </div>
      <p className="inv-headings__title inv-headings__action">ACTIONS</p>
    </div>
  )
}

export default WarehousesHeadings;