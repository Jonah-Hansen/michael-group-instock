import sortIcon from "../../assets/icons/sort-24px.svg";
import "./WarehouseInventoryListHeadings.scss";

function WarehouseInventoryListHeadings() {

  return (
    <div className="inv-headings">
      <div className="inv-headings__item">
        <p className="inv-headings__title">INVENTORY ITEM</p>
        <img src={sortIcon} alt="arrows up and down representing sort" />
      </div>
      <div className="inv-headings__item">
        <p className="inv-headings__title">CATEGORY</p>
        <img src={sortIcon} alt="arrows up and down representing sort" />
      </div>
      <div className="inv-headings__item inv-headings__item--status">
        <p className="inv-headings__title">STATUS</p>
        <img src={sortIcon} alt="arrows up and down representing sort" />
      </div>
      <div className="inv-headings__item">
        <p className="inv-headings__title inv-headings__qtytab">QUANTITY</p>
        <p className="inv-headings__title inv-headings__qty">QTY</p>
        <img src={sortIcon} alt="arrows up and down representing sort" />
      </div>
      <p className="inv-headings__title inv-headings__action">ACTIONS</p>
    </div>
  )
}

export default WarehouseInventoryListHeadings;