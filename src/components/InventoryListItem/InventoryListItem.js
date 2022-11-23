import "./InventoryListItem.scss";
import arrowIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

function InventoryListItem () {

    function instock({quantity}) {
        if ({quantity} > 0) {
           return "wh-row__instock"
        } else {
            return "wh-row__outstock"
        }
    }

    return (
        <div className="wh-row">
            <div className="wh-row__inv">
                <p className="wh-row__inv-item">{inventoryItem}</p>
                <img className="wh-row__inv-icon" src={arrowIcon} alt="chevron right" />
            </div>
            <p className="wh-row__cat">{category}</p>
            <p className={instock}>IN STOCK</p>
            <p className="wh-row__quantity">{quantity}</p>
            <div className="wh-row__actions">
                <img className="wh-row__actions-delete" src={deleteIcon} alt="red garbage can delete" />
                <img className="wh-row__actions-edit" src={editIcon} alt="blue pen representing edit" />
            </div>
        </div>
    )
}

export default InventoryListItem;