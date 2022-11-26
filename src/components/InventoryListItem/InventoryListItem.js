import "./InventoryListItem.scss";
import arrowIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { useNavigate } from "react-router-dom";

function InventoryListItem({ item })
{
const navigate = useNavigate()

    return (
        <div className="inv-row">
            <div className="inv-row__inv">
                <p className="inv-row__inv-item" onClick={() => navigate(`/inventories/${item.id}`)}>{item.item_name}</p>
                <img className="inv-row__inv-icon" src={arrowIcon} alt="chevron right" />
            </div>
            <p className="inv-row__cat">{item.category}</p>
            <div className="inv-row__stock">
                <p className={item.quantity ? 'inv-row__in-stock' : 'inv-row__out-stock' }>{item.status}</p>
            </div>
            <p className="inv-row__quantity">{item.quantity}</p>
            <p className="inv-row__quantity">{item.warehouse_name}</p>
            <div className="inv-row__actions">
                <img className="inv-row__actions-delete" src={deleteIcon} alt="red garbage can delete" />
                <img className="inv-row__actions-edit" src={editIcon} alt="blue pen representing edit" />
            </div>
        </div>
    )
}

export default InventoryListItem;