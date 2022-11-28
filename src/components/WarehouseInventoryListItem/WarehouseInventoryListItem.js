import "./WarehouseInventoryListItem.scss";
import arrowIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

function WarehouseInventoryListItem ({name , quantity , category , status}) {

    return (
        <div className="inv-row">
            <div className="inv-row__inv">
                <p className="inv-row__inv-heading--mobile">INVENTORY ITEM</p>
                <div className="inv-row__inv-item-con">
                    <p className="inv-row__inv-item">{name}</p>
                    <img className="inv-row__inv-icon" src={arrowIcon} alt="chevron right" /> 
                </div>
            </div>
            <div className="inv-row__cat-mobile">
                <p className="inv-row__inv-heading--mobile">CATEGORY</p>
                <p className="inv-row__cat">{category}</p>
            </div>
            <div className="inv-row__stock">
                <p className="inv-row__inv-heading--mobile">STATUS</p>
                <p className={quantity ? 'inv-row__in-stock' : 'inv-row__out-stock' }>{status}</p>
            </div>
            <div className="inv-row__quantity-mobile">
                <p className="inv-row__inv-heading--mobile">QTY</p>
                <p className="inv-row__quantity">{quantity}</p>
            </div>
            <div className="inv-row__actions">
                <img className="inv-row__actions-delete" src={deleteIcon} alt="red garbage can delete" />
                <img className="inv-row__actions-edit" src={editIcon} alt="blue pen representing edit" />
            </div>
        </div>
    )
}

export default WarehouseInventoryListItem;