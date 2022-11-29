import sortIcon from "../../assets/icons/sort-24px.svg";
import "./InventoriesListHeadings.scss";

function InventoryListHeadings({setItemOrdered, setCategoryOrdered, setStatusOrdered, setQuantityOrdered, setWarehouseOrdered}) {

  return (
    <div className="inventories-headings">
      <div className="inventories-headings__item">
        <p className="inventories-headings__title inventories-headings__title--name">INVENTORY ITEM</p>
        <img src={sortIcon} alt="arrows up and down representing sort" onClick={() => setItemOrdered(prev => !prev)}/>
      </div>
      <div className="inventories-headings__item">
        <p className="inventories-headings__title">CATEGORY</p>
        <img src={sortIcon} alt="arrows up and down representing sort" onClick={() => setCategoryOrdered(prev => !prev)} />
      </div>
      <div className="inventories-headings__item">
        <p className="inventories-headings__title">STATUS</p>
        <img src={sortIcon} alt="arrows up and down representing sort" onClick={() => setStatusOrdered(prev => !prev)} />
      </div>
      <div className="inventories-headings__item inventories-headings__qty">
        <p className="inventories-headings__title">QTY</p>
        <img src={sortIcon} alt="arrows up and down representing sort" onClick={() => setQuantityOrdered(prev => !prev)} />
          </div>
          <div className="inventories-headings__item">
        <p className="inventories-headings__title">WAREHOUSE</p>
        <img src={sortIcon} alt="arrows up and down representing sort" onClick={() => setWarehouseOrdered(prev => !prev)} />
      </div>
      <p className="inventories-headings__title inv-headings__action">ACTIONS</p>
    </div>
  )
}

export default InventoryListHeadings;