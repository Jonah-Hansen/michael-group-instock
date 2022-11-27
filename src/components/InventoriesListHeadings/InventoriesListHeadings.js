import sortIcon from "../../assets/icons/sort-24px.svg";
import "./InventoriesListHeadings.scss";

function InventoryListHeadings({setItemOrdered, setCategoryOrdered, setStatusOrdered, setQuantityOrdered, setWarehouseOrdered}) {

  return (
    <div className="inv-headings">
      <div className="inv-headings__item">
        <p className="inv-headings__title">INVENTORY ITEM</p>
        <img src={sortIcon} alt="arrows up and down representing sort" onClick={() => setItemOrdered(prev => !prev)}/>
      </div>
      <div className="inv-headings__item">
        <p className="inv-headings__title">CATEGORY</p>
        <img src={sortIcon} alt="arrows up and down representing sort" onClick={() => setCategoryOrdered(prev => !prev)} />
      </div>
      <div className="inv-headings__item">
        <p className="inv-headings__title">STATUS</p>
        <img src={sortIcon} alt="arrows up and down representing sort" onClick={() => setStatusOrdered(prev => !prev)} />
      </div>
      <div className="inv-headings__item">
        <p className="inv-headings__title inv-headings__qtytab">QUANTITY</p>
        <p className="inv-headings__title inv-headings__qty">QTY</p>
        <img src={sortIcon} alt="arrows up and down representing sort" onClick={() => setQuantityOrdered(prev => !prev)} />
          </div>
          <div className="inv-headings__item">
        <p className="inv-headings__title">WAREHOUSE</p>
        <img src={sortIcon} alt="arrows up and down representing sort" onClick={() => setWarehouseOrdered(prev => !prev)} />
      </div>
      <p className="inv-headings__title inv-headings__action">ACTIONS</p>
    </div>
  )
}

export default InventoryListHeadings;